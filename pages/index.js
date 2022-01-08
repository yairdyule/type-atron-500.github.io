import "../styles/Home.module.css";
import TypingBox from "./Components/TypingBox";

export default function Home() {
  const texts = [
    "oh no, are you going to finish that?",
    "my though as well",
    "the quick brown fox jumped over the lazy dog",
    "hello, world!",
  ];

  const target = texts[Math.floor(Math.random() * texts.length)].text;

  return (
    <div className="flex flex-col items-center justify-center">
      <TypingBox target={target} />
    </div>
  );
}
