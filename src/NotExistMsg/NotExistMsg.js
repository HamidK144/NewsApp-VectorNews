import React from "react";
import { Link } from "react-router-dom";
import "./Notexist.css";

import NavigationBar from "../NavigationBar/NavigationBar";
function NotExistMsg() {
  return (
    <div className="notexist-container">
      <h2 className="notexist-text" style={{ color: "tomato" }}>
        Page does not exist, go to <Link to={"/topstories"}>Homepage</Link>
      </h2>
      <img
        className="notexist-image"
        style={{ width: "250px", height: "auto" }}
        src={require("./errorpic.png").default}
      />
    </div>
  );
}

export default NotExistMsg;
