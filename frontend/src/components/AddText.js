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
    <div className="pt-40 flex flex-col justify-center items-center">
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className="text-slate-700 w-48 h-12"
      />
      <button className="bg-green-300" onClick={submitText}>
        submit new text
      </button>
    </div>
  );
}
