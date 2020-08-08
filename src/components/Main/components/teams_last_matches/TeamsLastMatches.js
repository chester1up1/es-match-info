import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
export const TeamsLastMatches = (props) => {
  const { tournament, team1, team2 } = props;
  return (
    <div className="last_match">
      <div className="tournament">
        <p>{tournament}</p>
      </div>
      <div className="score">
        <p style={{ color: team1.win > team2.win ? "#A9D14A" : "#D0393E" }}>
          {team1.win}
        </p>
        <p className="def">-</p>
        <p style={{ color: team1.win < team2.win ? "#A9D14A" : "#D0393E" }}>
          {team2.win}
        </p>
      </div>
      <div className="teams">
        <img src={team1.img} alt="team1" />
        <p>vs</p>
        <img src={team2.img} alt="team2" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsLastMatches);
