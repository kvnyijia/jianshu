import { fromJS } from "immutable";
import { change_home_data, add_more_articles, toggle_showScrollToTop } from "../";

export const defaultState = fromJS({
  title: 'title',
  content: "content",
});

export const reducer = (state=defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
