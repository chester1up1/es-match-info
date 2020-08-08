import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";

export const Team = (props) => {
  const { side, color, team_name, players } = props;
  const RankImg = (rank) => {
    if (rank <= 100 && rank > 10) {
      return (
        <img
          className="rank_img"
          src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/a/ad/SeasonalRankTop2.png/160px-SeasonalRankTop2.png?version=995bb2efa880999170983276f91acc2c"
          alt="100"
        />
      );
    }
    if (rank <= 1000 && rank > 100) {
      return (
        <img
          className="rank_img"
          src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/d/df/SeasonalRankTop1.png/160px-SeasonalRankTop1.png?version=427bad7d9283224f592c646ad8abc7fe"
          alt="1000"
        />
      );
    }
    if (rank <= 10 && rank > 1) {
      return (
        <img
          className="rank_img"
          src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/8/8e/SeasonalRankTop3.png/160px-SeasonalRankTop3.png?version=b86a852425e46ce86db058c34653f59e"
          alt="10"
        />
      );
    }
    if (rank == 1) {
      return (
        <img
          className="rank_img"
          src="https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/4/46/SeasonalRankTop4.png/160px-SeasonalRankTop4.png?version=35864ef84f59654a028db101425ce078"
          alt="10"
        />
      );
    }
    if (rank == null || rank > 1000) {
      return (
        <img
          className="rank_img"
          src="https://gamepedia.cursecdn.com/dota2_gamepedia/e/e7/SeasonalRank0-0.png?version=6d3899e42d1569b076a3518934d42054"
          alt="none"
        />
      );
    }
  };

  return (
    <div className="team">
      <div className="team_header">
        <p className="side" style={{ color: color }}>
          {side + ":"}
        </p>
        <p className="team_name">{team_name}</p>
      </div>
      <div className="players">
        {players.map((item) => (
          <div className="player">
            <p className="name">{item.name}</p>
            <img className="hero" src={item.img} alt="hero" />
            <div className="rank_box">
              {RankImg(item.rank)}
              <div className="rank_text">
                <p className="rank">{item.rank}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
