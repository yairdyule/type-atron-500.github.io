import { useState, useEffect } from "react";
import axios from "axios";

export default function AddText() {
  const [text, setText] = useState("");

  const submitText = async () => {
    let data = await axios.post("http://localhost:8000/text", {
      createText: text,
    });
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
    <h1 className="text-xl text-slate-200">submit your text below</h1>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className="text-slate-400 bg-slate-900 rounded-md w-96 h-24"
      />
      <button
        className="bg-green-400 rounded-md w-16 hover:bg-green-500"
        onClick={submitText}
      >
        submit
      </button>
    </div>
  );
}
