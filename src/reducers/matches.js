const defaultState = {
  load: false,
  running_match: {},
  // r_logo: "",
  // d_logo: "",
  // r_players: "",
  // d_players: "",
  // past_matchs: "",
};

const matches = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_RUNNING_MATCH":
      if (action.data) {
        return {
          ...state,
          load: action.data ? true : false,
          running_match: action.data,
          r_players: action.data.players.filter(
            (item) => item.hero_id !== 0 && item.team == 0
          ),
          d_players: action.data.players.filter(
            (item) => item.hero_id !== 0 && item.team == 1
          ),
        };
      }
    case "GET_PLAYER":
      return {
        ...state,
        r_players: state.r_players.map((item) =>
          item.account_id == action.data.account_id
            ? { ...item, rank: action.data.rank }
            : item
        ),
        d_players: state.d_players.map((item) =>
          item.account_id == action.data.account_id
            ? { ...item, rank: action.data.rank }
            : item
        ),
      };
    case "GET_HERO":
      let new_r = state.r_players.map((item) => {
        return {
          ...item,
          img: action.data.filter((element) => element.id == item.hero_id),
        };
      });
      let new_d = state.d_players.map((item) => {
        return {
          ...item,
          img: action.data.filter((element) => element.id == item.hero_id),
        };
      });
      return {
        ...state,
        r_players: new_r.map((item) => {
          return { ...item, img: "http://cdn.dota2.com" + item.img[0].img };
        }),
        d_players: new_d.map((item) => {
          return { ...item, img: "http://cdn.dota2.com" + item.img[0].img };
        }),
      };

    case "GET_RADIANT_LOGO":
      console.log(action.data);
      return {
        ...state,
        r_logo: action.data,
      };
    case "GET_DIRE_LOGO":
      console.log(action.data);
      return {
        ...state,
        d_logo: action.data,
      };
    case "GET_PAST_MATCHS":
      console.log("action.data", action.data);
      let game1 = "";
      let game2 = "";
      if (action.data[1]) {
        game1 = {
          team1: { win: 0, name: "", img: "" },
          team2: { win: 0, name: "", img: "" },
        };
        action.data[1].forEach((element, index) => {
          if (game1.team1.name == "") {
            game1 = {
              tournament: element.league.name,
              team1: {
                ...game1.team1,
                name: element.radiant_team.name,
                img: element.radiant_team.logo_url,
              },
              team2: {
                ...game1.team2,
                name: element.dire_team.name,
                img: element.dire_team.logo_url,
              },
            };
            if (element.radiant_win) {
              game1 = {
                ...game1,
                team1: { ...game1.team1, win: game1.team1.win + 1 },
              };
            } else {
              game1 = {
                ...game1,
                team2: { ...game1.team2, win: game1.team2.win + 1 },
              };
            }
          } else {
            if (element.radiant_win) {
              game1 = {
                ...game1,
                team1: { ...game1.team1, win: game1.team1.win + 1 },
              };
            } else {
              game1 = {
                ...game1,
                team2: { ...game1.team2, win: game1.team2.win + 1 },
              };
            }
          }
        });
      }

      if (action.data[2]) {
        game2 = {
          team1: { win: 0, name: "", img: "" },
          team2: { win: 0, name: "", img: "" },
        };
        action.data[2].forEach((element, index) => {
          if (game2.team1.name == "") {
            game2 = {
              tournament: element.league.name,
              team1: {
                ...game2.team1,
                name: element.radiant_team.name,
                img: element.radiant_team.logo_url,
              },
              team2: {
                ...game2.team2,
                name: element.dire_team.name,
                img: element.dire_team.logo_url,
              },
            };
            if (element.radiant_win) {
              game2 = {
                ...game2,
                team1: { ...game2.team1, win: game2.team1.win + 1 },
              };
            } else {
              game2 = {
                ...game2,
                team2: { ...game2.team2, win: game2.team2.win + 1 },
              };
            }
          } else {
            if (element.radiant_win) {
              game2 = {
                ...game2,
                team1: { ...game2.team1, win: game2.team1.win + 1 },
              };
            } else {
              game2 = {
                ...game2,
                team2: { ...game2.team2, win: game2.team2.win + 1 },
              };
            }
          }
        });
      }
      return {
        ...state,
        past_matchs: game1 !== "" && game2 !== "" ? [game1, game2] : "",
      };
    default:
      return state;
  }
};

export default matches;
