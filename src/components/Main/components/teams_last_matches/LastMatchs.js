import React from "react";
import { TeamsLastMatches } from "./TeamsLastMatches";

export default function LastMatchs(props) {
  const { last_matches } = props;
  return (
    <div>
      <p className="last-title">Last Matches</p>
      <div className="main_last_matches">
        {last_matches
          ? last_matches.map((item) => (
              <TeamsLastMatches
                tournament={item.tournament}
                team1={item.team1}
                team2={item.team2}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
