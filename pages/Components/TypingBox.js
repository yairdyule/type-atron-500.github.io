import { useState } from "react";
import DisplayText from "./DisplayText";

export default function TypingBox({ target }) {
  const [input, setInput] = useState("");
  const [isFocused, setFocused] = useState(false);

  return (
    <div className="m-12 relative ">
      {!isFocused && (
        <p className=" text-slate-200">
          click hereabouts whenever you&apos;re ready
        </p>
      )}
      <textarea
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={input}
        spellCheck="false"
        className="bg-transparent top-1/2 left-1/2 -translate-x-1/3 -translate-y-8  text-transparent absolute resize-none outline-none w-96 h-56"
      ></textarea>
      <DisplayText input={input} target={target} focused={isFocused} />
    </div>
  );
}
