import React, { useState, useEffect } from "react";
import pari from "./pari.png";
import xbet from "./xbet.png";
import gg from "./gg.png";
import loot from "./loot.png";
import bet from "./bet.png";
import omega from "./omega.png";
import "./style.scss";
import { Link } from "react-router-dom";
export default function Bets() {
  let data = [pari, xbet, gg, loot, bet];
  function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return parseInt(rand * 100) / 100;
  }
  const [rnd_data_1, setData1] = useState([
    randomInteger(1.4, 1.49),
    randomInteger(1.4, 1.49),
    randomInteger(1.5, 1.55),
    randomInteger(1.4, 1.49),
    randomInteger(1.4, 1.49),
  ]);
  const [rnd_data_2, setData2] = useState([
    randomInteger(2.8, 3.2),
    randomInteger(2.3, 2.7),
    randomInteger(2.3, 2.7),
    randomInteger(2.3, 2.7),
    randomInteger(2.3, 2.7),
  ]);
  useEffect(() => {
    rnd_rnd();
    setTimeout(() => {
      rnd_rnd();
      setTimeout(() => {
        rnd_rnd;
      }, 4000);
    }, 4000);
  }, []);
  const rnd_rnd = () => {
    setTimeout(() => {
      setData1([
        randomInteger(1.4, 1.49),
        randomInteger(1.4, 1.49),
        randomInteger(1.5, 1.55),
        randomInteger(1.4, 1.49),
        randomInteger(1.4, 1.49),
      ]);
      setData2([
        randomInteger(2.8, 3.2),
        randomInteger(2.3, 2.7),
        randomInteger(2.3, 2.7),
        randomInteger(2.3, 2.7),
        randomInteger(2.3, 2.7),
      ]);
    }, 4000);
  };
  return (
    <div>
      <p className="bet-t">Bets</p>
      <div className="bets">
        <div className="bets-header">
          <div className="tournament">
            <img src={omega} alt="tt" />
          </div>
          <div className="cantors">
            {data.map((item) => (
              <div className="cantor">
                <img src={item} alt="cantor" />
              </div>
            ))}
          </div>
        </div>
        <div className="bets-items">
          <div className="tournament-header">
            <p>Map Winer</p>
          </div>
          <div className="bets-items-bot">
            <div className="bets-teams">
              <div className="bets-team team-1">
                {/* <img /> */}
                <p>Viking.gg</p>
              </div>
              <div className="bets-team">
                {/* <img /> */}
                <p>Unik</p>
              </div>
            </div>
            <div className="bets-box">
              <div className="bet">
                <Link to={`/bet/${rnd_data_1[0]}`}>
                  {" "}
                  <p>{rnd_data_1[0]}</p>
                </Link>
                <Link to={`/bet/${rnd_data_2[0]}`}>
                  {" "}
                  <p style={{ color: "#CA7F0A" }}>{rnd_data_2[0]}</p>
                </Link>
              </div>
              <div className="bet">
                <Link to={`/bet/${rnd_data_1[1]}`}>
                  {" "}
                  <p>{rnd_data_1[1]}</p>
                </Link>
                <Link to={`/bet/${rnd_data_2[1]}`}>
                  <p>{rnd_data_2[1]}</p>
                </Link>
              </div>
              <div className="bet">
                <Link to={`/bet/${rnd_data_1[2]}`}>
                  {" "}
                  <p style={{ color: "#CA7F0A" }}>{rnd_data_1[2]}</p>
                </Link>
                <Link to={`/bet/${rnd_data_2[2]}`}>
                  {" "}
                  <p>{rnd_data_2[2]}</p>
                </Link>
              </div>
              <div className="bet">
                <Link to={`/bet/${rnd_data_1[3]}`}>
                  {" "}
                  <p>{rnd_data_1[3]}</p>
                </Link>
                <Link to={`/bet/${rnd_data_2[3]}`}>
                  {" "}
                  <p>{rnd_data_2[3]}</p>
                </Link>
              </div>
              <div className="bet">
                <Link to={`/bet/${rnd_data_1[4]}`}>
                  <p>{rnd_data_1[4]}</p>
                </Link>
                <Link to={`/bet/${rnd_data_2[4]}`}>
                  {" "}
                  <p>{rnd_data_2[4]}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
