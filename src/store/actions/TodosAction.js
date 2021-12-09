import { v4 as uuidv4 } from "uuid";

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: "ADD",
    payload: {
      id: uuidv4().slice(0, 8),
      text: todo.text,
      createdAt: new Date(),
    },
  });
};

export const removeTodo = (todo) => (dispatch) => {
  dispatch({
    type: "REMOVE",
    payload: todo,
  });
};
