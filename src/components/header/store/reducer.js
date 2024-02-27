import { fromJS } from "immutable";

export const defaultState = fromJS({
  focused: false
});

export const reducer = (state=defaultState, action) => {
  if (action.type === 'search_focus') {
    return state.set(
      'focused', true
    );
  }
  if (action.type === 'search_blur') {
    return state.set(
      'focused', false
    );
  }
  return state;
};
