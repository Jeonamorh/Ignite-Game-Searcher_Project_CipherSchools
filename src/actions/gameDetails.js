import axios from "axios";
import { getLoadDetailsURL, getScreenShotURL } from "../api";
import { loadGames } from "./gameAction";
import { searchGameURL } from "../api";

export const loadGameDetails = (id) => async (dispatch) => {
  dispatch({
    type: `IS_LOADING`,
  });
  const gameDetail = await axios.get(getLoadDetailsURL(id));
  const screenshot = await axios.get(getScreenShotURL(id));

  dispatch({
    type: `GAME_DETAILS`,
    payload: {
      details: gameDetail.data,
      screen: screenshot.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const search = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: search.data.results,
    },
  });
};
