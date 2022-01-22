import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/buttons/Login";
import TypingBox from "./components/TypingBox";
import AddText from "./components/AddText";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    async function getData() {
      let data = await axios.get("http://localhost:8000");
      console.log(data.data);
    }
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      {!loggedIn && <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
      <TypingBox />
      <AddText />
    </div>
  );
}

export default App;
