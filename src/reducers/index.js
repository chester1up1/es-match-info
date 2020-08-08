import { combineReducers } from "redux";
import matches from "./matches";
import player from "./player";

export default combineReducers({
  matches,
  player,
});
