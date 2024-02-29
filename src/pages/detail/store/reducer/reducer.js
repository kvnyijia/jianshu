import { fromJS } from "immutable";
import { change_detail_data } from "../";

export const defaultState = fromJS({
  title: '',
  content: '',
});

export const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case change_detail_data:
      return state.merge({
        title: action.title,
        content: action.content,
      })
    default:
      return state;
  }
};
