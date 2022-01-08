import "../styles/Home.module.css";
import TypingBox from "./Components/TypingBox";
import { texts } from "../public/data";

export default function Home() {
  const target = texts[Math.floor(Math.random() * texts.length)].text;

  return (
    <div className="flex flex-col items-center justify-center">
      <TypingBox target={target} />
    </div>
  );
}
