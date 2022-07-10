import { combineReducers } from "redux";
import gameReducers from "./gameReducers";
import { detailReducers } from "./detailReducers";

const allReducers = combineReducers({
  games: gameReducers,
  details: detailReducers,
});

export default allReducers;
