import { Userlist } from "../../data";

const initialState = {
  users: Userlist,
  favorites: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_user":
      return { ...state, users: [...state.users, action.payload] };

    case "Remove_User":
      return {
        ...state,
        favorites: [state.filter((user) => user !== action.id)],
        users: [state.filter((user) => user !== action.id)],
      };

    case "Update_User":
      let id = state.users.findIndex((user) => user.id == action.payload.id);
      state.users[id] = action.payload;
      return { ...state, users: [state.users] };

    case "Add_Favorites":
      return { ...state, favorites: [...state.favorites, action.payload] };

    default:
      return state;
  }
};
