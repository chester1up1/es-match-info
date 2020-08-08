import React from "react";
import { Switch, Route } from "react-router";
import Main from "../components/Main/Main";
import Player from "../components/Main/components/player/Player";

export default function DefaultRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route
        path="/player/:id/:rank/:name/:team_id/:hero_id"
        component={Player}
      />
      <Route path="/" component={Main} />
    </Switch>
  );
}
