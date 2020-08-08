import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import {
  GetRunningMatch,
  GetTeamRadiantLogo_,
  GetTeamDireLogo_,
  GetPastMatchs,
} from "../core/actions";
import Team from "./components/team/Team";
import { VsItem } from "./components/vs/VsItem";

export const Main = (props) => {
  const [load, setLoad] = useState(false);
  const [radiant_players, setRadiantPlayers] = useState([]);
  const [radiant_name, setRadiantName] = useState("");
  const [dire_players, setDirePlayers] = useState([]);
  const [dire_name, setDireName] = useState("");
  const {
    GetRunningMatch,
    match,
    state,
    GetTeamRadiantLogo_,
    GetTeamDireLogo_,
    GetPastMatchs,
    r_players,
    d_players,
    r_logo,
    d_logo,
  } = props;
  useEffect(() => {
    GetRunningMatch();
  }, []);
  useEffect(() => {
    if (state.matches.r_logo == "") {
      if (
        typeof match.radiant_team !== "undefined" &&
        typeof match.dire_team !== "undefined"
      ) {
        // setRadiantPlayers(state.matches.r_players);
        GetTeamDireLogo_(match.dire_team.team_id);
        GetTeamRadiantLogo_(match.radiant_team.team_id);

        GetPastMatchs(
          match.match_id,
          match.radiant_team.team_id,
          match.dire_team.team_id
        );
      }
    }
  }, [match]);
  useEffect(() => {
    if (r_players && d_players) {
      setRadiantPlayers(r_players);
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
        />
        {r_logo && d_logo ? <VsItem r_logo={r_logo} d_logo={d_logo} /> : ""}

        <Team
          side="Dire"
          color="#EC030B"
          team_name={dire_name}
          players={dire_players}
        />
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
});

const mapDispatchToProps = {
  GetRunningMatch,
  GetTeamRadiantLogo_,
  GetTeamDireLogo_,
  GetPastMatchs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
