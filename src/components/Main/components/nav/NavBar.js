import React, { useState } from "react";
import { Link } from "react-router-dom";
import money from "./money.png";
import tournament from "./tournament.png";
import television from "./television.png";
import "./style.scss";
export default function NavBar(props) {
  const [check, setCheck] = useState("b");
  const handleChange = (i) => {
    setCheck(i);
  };
  return (
    <div className="nav_bar_">
      <Link to="/bets-r">
        <div
          className={`item ${check == "b" ? "active" : ""}`}
          onClick={() => handleChange("b")}
        >
          <img src={money} alt="" />
          <p>best</p>
        </div>
      </Link>
      <Link to="/bracket">
        <div
          className={`item ${check == "g" ? "active" : ""}`}
          onClick={() => handleChange("g")}
        >
          <img src={tournament} alt="" />
          <p>bracket</p>
        </div>
      </Link>
      <Link to="/last">
        <div
          className={`item ${check == "l" ? "active" : ""}`}
          onClick={() => handleChange("l")}
        >
          <img src={television} alt="" />
          <p>last</p>
        </div>
      </Link>
    </div>
  );
}
