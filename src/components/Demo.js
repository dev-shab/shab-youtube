import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "p-4 m-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="p-2 my-4 bg-blue-600"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Change Theme
        </button>
      </div>
      <div>
        <input
          className="px-2 border border-black w-72 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold">Nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
