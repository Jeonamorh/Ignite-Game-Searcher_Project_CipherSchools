const initialState = {
  detail: { platforms: [] },
  screenshot: [],

  isLoading: true,
};

export const detailReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GAME_DETAILS":
      return {
        ...state,
        detail: action.payload.details,
        screenshot: action.payload.screen,
        isLoading: false,
      };
    case "IS_LOADING":
      return { ...state, isLoading: true };

    default:
      return { ...state };
  }
};
