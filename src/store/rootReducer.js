import { combineReducers } from "redux";
import todosReducer from "./reducers/TodosReducer";

const rootReducer = combineReducers({
  todosReducer,
});

export default rootReducer;
