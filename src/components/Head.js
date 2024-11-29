import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
      const text = await data.text();
      const searchSuggestions = [];
      text.split("[").forEach((ele, index) => {
        if (!ele.split('"')[1] || index === 1) return;
        return searchSuggestions.push(ele.split('"')[1]);
      });
      dispatch(
        cacheResults({
          [searchQuery]: searchSuggestions,
        })
      );
      setSuggestions(searchSuggestions);
    };
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, searchCache, searchQuery]);

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
          onClick={() => dispatch(toggleSidebar())}
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="px-5 w-5/12 border border-gray-400 rounded-l-full p-2"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full py-2 px-5 bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && searchQuery && (
          <div className="absolute bg-white py-2 px-5 w-[774px] rounded-lg">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm border-gray-100 hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end">
        <img
          className="h-10"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
        />
      </div>
    </div>
  );
};

export default Head;
