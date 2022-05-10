import uuid from "react-native-uuid";
import moment from "moment";

const initialState = {
  count: 2,
  information: [
    {
      id: uuid.v4(),
      title: `Your phone bill is paid`,
      subtitle: `Your phone bill has been paid.`,
      date: moment().format("L"),
      type: "paid",
    },
    {
      id: uuid.v4(),
      title: `Welcome to Bangbola banking`,
      subtitle: `Your account has been created and is ready for use!`,
      date: moment().format("L"),
      type: "information",
    },
  ],
};

export const NotificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT_COUNT":
      return { ...state, count: state.count - 1 };
    case "CLEAR_COUNT":
      return { ...state, count: 0 };
    case "ADD_NOTE":
      return { ...state, information: [...state.information, action.payload] };
    case "REMOVE_NOTE":
      return {
        ...state,
        information: [
          ...state.information.filter((item) => item.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};
