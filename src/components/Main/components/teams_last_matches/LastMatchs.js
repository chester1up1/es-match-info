import React, { Component } from "react";
import { connect } from "react-redux";
import TeamsLastMatches from "./TeamsLastMatches";
export const LastMatchs = (props) => {
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
};

const mapStateToProps = (state) => ({
  last_matches: state.matches.past_matches,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LastMatchs);
