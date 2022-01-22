import axios from "axios";
import { useState } from "react";

export default function Login({ setLoggedIn, loggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const signIn = async () => {
    let { data } = await axios.post("http://localhost:8000/login", {
      username,
      password,
    });
    console.log(data);
    if (data.login) {
      console.log(data.msg);
      setShowAlert(false);
      setLoggedIn(true);
    } else {
      setShowAlert(true);
      setAlert(data.msg);
      setLoggedIn(false);
    }
  };

  const logIn = async () => {
    let { data } = await axios.post("http://localhost:8000/signup", {
      username,
      password,
    });
    console.log(data);
    if (data.login) {
      console.log(data.msg);
      setLoggedIn(true);
      setShowAlert(false);
    } else {
      setLoggedIn(false);
      setShowAlert(true);
      setAlert(data.msg);
    }
  };

  return (
    <div className="mt-12 pt-12 gap-1 flex flex-col items-center justify-center">
      {showAlert && <p className="text-red-300">{alert}</p>}
      <input
        className=""
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <input
        className=""
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button className="bg-green-700" onClick={signIn}>
        sign in
      </button>
      <button className="bg-green-700" onClick={logIn}>
        sign up
      </button>
    </div>
  );
}
