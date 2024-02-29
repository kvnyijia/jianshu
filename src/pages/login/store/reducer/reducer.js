import { fromJS } from "immutable";
import { change_login } from "../action/constants";

export const defaultState = fromJS({
  login: false,
});

export const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case change_login: 
      return state.set('login', action.login);
    default:
      return state;
  }
};
