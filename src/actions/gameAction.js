import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesURL());
  const newGames = await axios.get(newGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETACH_GAMES",
    payload: {
      popularGames: popularGames.data.results,
      newGames: newGames.data.results,
      upcomingGames: upcomingGames.data.results,
    },
  });
};
