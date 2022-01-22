import axios from "axios";
import { useState } from "react";

export default function Login({ setLoggedIn, loggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const onClick = async () => {
    let { data } = await axios.post("http://localhost:8000/login", {
      email,
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
    }
  };

  return (
    <div className="mt-12 pt-12 gap-1 flex flex-col items-center justify-center">
      {showAlert && <p>oopsies, couldn't login</p>}
      <input
        className=""
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        className=""
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button className="bg-green-700" onClick={onClick}>
        sign in
      </button>
    </div>
  );
}
