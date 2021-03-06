import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import {
  GetRunningMatch,
  GetTeamRadiantLogo_,
  GetTeamDireLogo_,
  GetPastMatches,
} from "../core/actions";
import Team from "./components/team/Team";
import VsItem from "./components/vs/VsItem";
import TeamsLastMatches from "./components/teams_last_matches/TeamsLastMatches";
import Bets from "./components/bets/Bets";
import LastMatchs from "./components/teams_last_matches/LastMatchs";
import BetsRouter from "./components/bets/BetsRouter";
import { Spinner } from "reactstrap";
import MainRouter from "./components/MainRouter";
import NavBar from "./components/nav/NavBar";

export const Main = (props) => {
  const [radiant_players, setRadiantPlayers] = useState([]);
  const [radiant_name, setRadiantName] = useState("");
  const [dire_players, setDirePlayers] = useState([]);
  const [dire_name, setDireName] = useState("");
  const [radiant, setRadiant] = useState("");
  const [dire, setDire] = useState("");
  const [time_load, setLoad] = useState(false);
  const {
    GetRunningMatch,
    match,
    state,
    GetTeamRadiantLogo_,
    GetTeamDireLogo_,
    GetPastMatches,
    r_players,
    d_players,
    r_logo,
    d_logo,
    load,
    last_matches,
  } = props;
  useEffect(() => {
    GetRunningMatch();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      GetPastMatches(
        match.match_id,
        match.radiant_team.team_id,
        match.dire_team.team_id
      );
    }, 100);
    if (state.matches.r_logo == "") {
      if (
        typeof match.radiant_team !== "undefined" &&
        typeof match.dire_team !== "undefined"
      ) {
        GetTeamDireLogo_(match.dire_team.team_id);
        GetTeamRadiantLogo_(match.radiant_team.team_id);
      }
    }
  }, [load]);
  useEffect(() => {
    if (r_players && d_players) {
      setRadiantPlayers(r_players);
      setRadiant(match.radiant_team);
      setDire(match.dire_team);
      setRadiantName(match.radiant_team.team_name);
      setDirePlayers(d_players);
      setDireName(match.dire_team.team_name);
      // setDirePlayers(d_players);
    }
  }, [r_players]);
  return (
    <div className="app-window">
      <div className="main-bg">
        <Team
          side="Radiant"
          color="#A9D14A"
          team_name={radiant_name}
          players={radiant_players}
          team_id={radiant.team_id}
        />
        {r_logo && d_logo ? <VsItem r_logo={r_logo} d_logo={d_logo} /> : ""}

        <Team
          side="Dire"
          color="#D0393E"
          team_name={dire_name}
          players={dire_players}
          team_id={dire.team_id}
        />
        <MainRouter />
        {last_matches ? (
          <NavBar
            match_id={match.match_id}
            team_r={match.radiant_team.team_id}
            team_d={match.dire_team.team_id}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  match: state.matches.running_match,
  state: state,
  r_players: state.matches.r_players,
  d_players: state.matches.d_players,
  r_logo: state.matches.r_logo,
  d_logo: state.matches.d_logo,
  load: state.matches.load,
  last_matches: state.matches.past_matches,
});

const mapDispatchToProps = {
  GetRunningMatch,
  GetTeamRadiantLogo_,
  GetTeamDireLogo_,
  GetPastMatches,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
