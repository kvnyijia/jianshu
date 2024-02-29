import { fromJS } from "immutable";
import { change_home_data } from "../";

export const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
});

export const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case change_home_data:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    default:
      return state;
  }
};
