import { billsData } from "../../data";
import moment from "moment";

const initialState = {
  currentbills: billsData,
  history: [
    {
      amount: 79,
      title: "Phone Bill",
      type: "bill",
      date: moment().format("L"),
    },
    {
      amount: 34,
      title: "Water Bill",
      type: "bill",
      date: moment().format("L"),
    },
    {
      amount: 50,
      title: "groceries",
      type: "bill",
      date: moment().format("L"),
    },
  ],
};

export const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Bill":
      return {
        ...state,
        currentbills: [...state.currentbills, action.payload],
      };

    case "Update_Bill":
      let index = state.currentbills.findIndex(
        (obj) => obj.id == action.payload.id,
      );
      state.currentbills[index].amount = action.payload;
      return { ...state, currentbills: [state.currentbills] };

    case "Remove_Bill":
      return {
        ...state,
        currentbills: [
          state.currentbills.filter((item) => item.id !== action.id),
        ],
      };

    case "Add_To_History":
      return {
        ...state,
        currentbills: state.currentbills.filter(
          (item) => item.id !== action.payload.id,
        ),
        history: [...state.history, action.payload],
      };

    case "Clear_history":
      return { ...state, history: [] };

    case "Clear_Bills":
      return { ...state, currentbills: [] };

    default:
      return state;
  }
};
