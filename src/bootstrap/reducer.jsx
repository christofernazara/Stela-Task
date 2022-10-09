import { combineReducers } from "redux";
import initialState from "./initialState";
import * as ACTION from "./action";
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.SET_TODOS:
      return {
        ...state,
        todos: payload,
      };

    default:
      return state;
  }
};

export const rootReducers = combineReducers({ todos: reducer });

export default reducer
