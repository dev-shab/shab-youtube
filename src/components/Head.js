import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
    };
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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
      <div className="col-span-10 text-center">
        <input
          className="w-5/12 border border-gray-400 rounded-l-full p-2"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 rounded-r-full py-2 px-5 bg-gray-200">
          🔍
        </button>
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
