const initialState = {
  isNight: false,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_Night":
      return { ...state, isNight: action.isNight };
    default:
      return state;
  }
};

// night mode actions
export const toggle_night = (state) => ({
  type: "TOGGLE_Night",
  isNight: state,
});
