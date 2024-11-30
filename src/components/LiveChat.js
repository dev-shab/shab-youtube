import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(1, 1),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <div className="ml-2 p-2 w-full h-[900px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shab",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96 border border-blue-900"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 bg-green-200 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
