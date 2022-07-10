const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gameReducers = (state = initialState, action) => {
  switch (action.type) {
    case `FETACH_GAMES`:
      return {
        ...state,
        popularGames: action.payload.popularGames,
        newGames: action.payload.newGames,
        upcomingGames: action.payload.upcomingGames,
      };
    case "FETCH_SEARCH":
      return { ...state, searched: action.payload.search };
    case "CLEAR_SEARCH":
      return { ...state, searched: [] };

    default:
      return { ...state };
  }
};

export default gameReducers;
