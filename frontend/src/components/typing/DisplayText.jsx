import axios from "axios";
import { useEffect, useState } from "react";

export default function DisplayText({ input, focused }) {
  const [target, setTarget] = useState("");
  useEffect(() => {
    async function getData() {
      let { data } = await axios.get("http://localhost:8000/text");
      // let data = { text: "arstneio" };
      console.log(data.text);
      setTarget(data.text);
    }
    getData();
  }, []);

  return (
    <>
      <p
        className={
          "font-bold tracking-widest ease-in-out duration-150" +
          (!focused && " blur-md")
        }
      >
        {input.split("").map((char, index) => {
          let className;
          if (char === target[index]) {
            className = "text-emerald-300";
          } else if (char !== target[index]) {
            className = "text-red-300";
          }
          return (
            <span key={index} className={className + " relative"}>
              {char}
            </span>
          );
        })}
        <span className="font-light text-lg text-white absolute -translate-y-1 -translate-x-0.5 animate-pulse duration-75 ease-in-out">
          |
        </span>
        {target
          .split("")
          .slice(input.length)
          .map((char, ind) => {
            return (
              <span key={ind} className="text-slate-400">
                {char}
              </span>
            );
          })}
      </p>
    </>
  );
}
