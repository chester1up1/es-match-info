import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import {
  GetInfoPlayer,
  GetTeamLogo,
  GetPlayerHeroInfo,
  GetHeroPlayer,
  PlayerRole,
  GetLastMatches,
} from "../../../core/actions";
import "./style.scss";
import { Link } from "react-router-dom";
export const Player = (props) => {
  const {
    GetInfoPlayer,
    GetTeamLogo,
    team_logo,
    player,
    GetPlayerHeroInfo,
    top_heros,
    GetHeroPlayer,
    hero,
    wl,
    PlayerRole,
    lane,
    GetLastMatches,
    last_matches,
  } = props;
  const player_id = props.match.params.id;
  const player_hero_id = props.match.params.hero_id;
  const player_name = props.match.params.name;
  const player_rank = props.match.params.rank;
  const player_team_id = props.match.params.team_id;

  useEffect(() => {
    GetInfoPlayer(player_id);
    GetTeamLogo(player_team_id);
    GetPlayerHeroInfo(player_id);
    GetHeroPlayer(player_hero_id, player_id);
    PlayerRole(player_id);
    GetLastMatches(player_id);
  }, []);

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
  var timeFormat = (function () {
    function num(val) {
      val = Math.floor(val);
      return val < 10 ? "0" + val : val;
    }

    return function (ms /**number*/) {
      var sec = ms / 1000,
        hours = (sec / 3600) % 24,
        minutes = (sec / 60) % 60,
        seconds = sec % 60;
      return num(hours) + ":" + num(minutes) + ":" + num(seconds);
    };
  })();
  const time_converotor = (time_unix) => {
    var a = new Date(time_unix * 1000);
    var months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + "." + month + "." + year;
    return time;
  };
  return (
    <div className="app-window">
      <div className="main-bg">
        <Link to="/" className="back">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/close-1439771-1214342.png"
            alt="back"
          />
        </Link>

        <div className="header">
          <div className="player">
            <div className="player-team">
              <img className="team_logo" src={team_logo ? team_logo : ""} />
              <p className="name">{player_name}</p>
            </div>
            <img
              src={player ? player.profile.avatarfull : ""}
              className="player_logo"
            />
            <div className="rank_box">
              {RankImg(player_rank)}
              <div className="rank_text">
                <p className="rank">{player_rank}</p>
              </div>
            </div>
          </div>
          <div className="top_heros">
            {top_heros
              ? top_heros.map((item) => (
                  <div className="item">
                    <img src={"http://cdn.dota2.com" + item.info[0].img} />
                    <div className="win_rate_box">
                      <p>
                        {parseInt((item.win / item.games) * 100 * 100) / 100 +
                          "%"}
                      </p>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className="info">
          {wl ? (
            <div className="wl">
              <div className="item">
                <p className="title">win games</p>
                <p className="win numb">{wl.win}</p>
              </div>
              <div className="item">
                <p className="title">lose games</p>
                <p className="lose numb">{wl.lose}</p>
              </div>
              <div className="item">
                <p className="title">win rate</p>
                <p className="win_rate numb">{wl.win_rate + "%"}</p>
              </div>
              <div className="item">
                <p className="title">lane</p>
                <p className="numb">{lane}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="title-name">Playing now:</p>
        <div className="hero-now">
          <img src={hero ? "http://cdn.dota2.com" + hero[0].img : ""} />
          <div className="mr5">
            <p className="title">games played</p>
            <p className="games">{hero ? hero[1].games : ""}</p>
          </div>
          <div>
            <p className="title">win rate</p>
            <p className="proc">
              {hero
                ? parseInt((hero[1].win / hero[1].games) * 100 * 100) / 100 +
                  "%"
                : ""}
            </p>
          </div>
        </div>
        <p className="title-name">Last Matches:</p>
        <div className="last_matches">
          {last_matches
            ? last_matches.map((item) => (
                <div className="match">
                  <div className="hero_match">
                    <img src={"http://cdn.dota2.com" + item.hero.img} />
                    <p>{item.hero.localized_name}</p>
                  </div>
                  <div className="duration">
                    <p className="time">
                      {timeFormat(item.element.duration * 1000).substr(3)}
                    </p>
                    <p className="text_duration">duration</p>
                  </div>
                  <div className="kda">
                    <p style={{ color: item.win ? "#66bb6a" : "#ff4c4c" }}>
                      {item.win ? "win" : "lose"}
                    </p>
                    <p className="date">
                      {time_converotor(item.element.start_time)}
                    </p>
                    <div className="cda_stats">
                      <p>{item.element.kills + "/"}</p>
                      <p>{item.element.deaths + "/"}</p>
                      <p>{item.element.assists}</p>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  player: state.player.item,
  team_logo: state.player.team_logo,
  top_heros: state.player.top_heros,
  hero: state.player.hero,
  wl: state.player.wl,
  lane: state.player.lane,
  last_matches: state.player.last_matches,
});

const mapDispatchToProps = {
  GetInfoPlayer,
  GetHeroPlayer,
  GetTeamLogo,
  GetPlayerHeroInfo,
  PlayerRole,
  GetLastMatches,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
