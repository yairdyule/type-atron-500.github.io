import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TypingGame from "./components/pages/TypingGame";
import AddText from "./components/pages/AddText";
import Welcome from "./components/pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="/type" element={<TypingGame />} />
          <Route path="/submitText" element={<AddText />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
