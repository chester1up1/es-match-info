const defaultState = {
  load: false,
};

const player = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PLAYER_INFO":
      return {
        ...state,
        load: true,
        item: action.data,
      };
    case "GET_TEAM_LOGO":
      return {
        ...state,
        team_logo: action.data,
      };
    case "GET_PLAYERS_HERO":
      return {
        ...state,
        top_heros: action.data,
      };
    case "GET_PLAYER_GAMES_WL":
      return {
        ...state,
        wl: action.data,
      };
    case "GET_LANE":
      return {
        ...state,
        lane: action.data,
      };
    case "GET_HERO_ONE":
      return {
        ...state,
        hero: action.data,
      };
    case "GET_PLAYERS_LAST_Matches":
      return {
        ...state,
        last_matches: action.data,
      };
    default:
      return state;
  }
};

export default player;
