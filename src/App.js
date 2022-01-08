import "./App.css";
import TypingBox from "./components/TypingBox";

function App() {
  const texts = [
    "oh no, are you going to finish that?",
    "my thought as well",
    "the quick brown fox jumped over the lazy dog",
    "hello, world!",
  ];

  const target = texts[Math.floor(Math.random() * texts.length)];

  return (
    <div className="flex flex-col items-center justify-center">
      <TypingBox target={target} />
    </div>
  );
}

export default App;
