import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initStore = (initState) =>
  createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export function useStore(initialState) {
  const store = useMemo(() => initStore(initialState), [initialState]);
  return store;
}

export default initStore;
