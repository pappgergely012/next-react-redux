import { v4 as uuidv4 } from "uuid";

const init = [
  {
    id: uuidv4().slice(0, 8),
    text: "Remove it",
    createdAt: new Date("1960-01-01"),
  },
];

const Todos = (state = init, action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "REMOVE": {
      const newState = state.filter((i) => i.id !== action.payload.id);

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default Todos;
