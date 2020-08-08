import React from "react";
import { Switch, Route } from "react-router";
import BetsRouter from "../components/bets/BetsRouter";
import LastMatchs from "../components/teams_last_matches/LastMatchs";
import TournamentBracket from "../components/tournamentBracket/TournamentBracket";
export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={BetsRouter} />
      <Route path="/bets-r" component={BetsRouter} />
      <Route path="/last" component={LastMatchs} />
      <Route path="/bracket" component={TournamentBracket} />
      <Route path="/" component={BetsRouter} />
    </Switch>
  );
}
