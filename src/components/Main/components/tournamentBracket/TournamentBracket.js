import React from "react";
import "./style.scss";
export default function TournamentBracket() {
  let data = [
    {
      id: 1,
      name: "​​ViKin.gg",
      matches: "2",
      win: "2",
      lose: "0",
      points: "6",
    },
    {
      id: 2,
      name: "Team Unique",
      matches: "2",
      win: "2",
      lose: "0",
      points: "6",
    },
    {
      id: 3,
      name: "​​Cyberium Seed",
      matches: "3",
      win: "1",
      lose: "2",
      points: "3",
    },
    {
      id: 4,
      name: "Evil Corporation",
      matches: "3",
      win: "0",
      lose: "3",
      points: "0",
    },
  ];
  let data_g = ["A", "B", "C", "D"];
  return (
    <div className="bracket">
      <div className="groups">
        <p className="g_title">Groups</p>
        {data_g.map((item) => (
          <div
            className="g_item"
            style={{ border: item == "A" ? "solid white 1px" : "" }}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="table">
        <div className="table_header">
          <div className="st">
            <p>#</p>
            <p>Group A</p>
          </div>
          <div className="end">
            <p>M</p>
            <p>W</p>
            <p>L</p>
            <p>P</p>
          </div>
        </div>
        {data.map((item) => (
          <div className="t_item">
            <div className="st">
              <p className="name">{item.name}</p>
            </div>
            <div className="end">
              <p>{item.matches}</p>
              <p>{item.win}</p>
              <p>{item.lose}</p>
              <p>{item.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
