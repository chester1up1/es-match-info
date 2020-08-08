import React from "react";
import { Switch, Route } from "react-router";
import Bets from "./Bets";
import Bet from "./Bet";

export default function BetsRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Bets} />
      <Route path="/bet/:bet" component={Bet} />
      <Route path="/" component={Bets} />
    </Switch>
  );
}
