import moment from "moment";

const initialState = {
  money: 5521,
  transitions: [
    {
      id: "1",
      amount: 35,
      title: "Phone Bill",
      type: "bill",
      date: moment().format("L"),
    },
    {
      id: "0",
      amount: 1500,
      title: "Rent Bill",
      type: "bill",
      date: moment().add(1, "days").format("L"),
    },
    {
      amount: 50,
      title: "Groceries",
      type: "bill",
      date: moment().add(1, "days").format("L"),
    },
    {
      amount: 50,
      title: "Petrol station",
      type: "bill",
      date: moment().add(1, "days").format("L"),
    },
  ],
};

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Get-Money":
      return { ...state, money: action.payload };

    case "Reduce_Money":
      return { ...state, money: state.money - action.payload };

    case "Add_Money":
      return { ...state, money: state.money - action.payload };

    case "Clear_Money":
      return { ...state, money: 0 };

    case "Add_To_transitions":
      return {
        ...state,
        transitions: [...state.transitions, action.payload],
      };

    case "Clear_transitions":
      return { ...state, transitions: [] };

    default:
      return state;
  }
};
