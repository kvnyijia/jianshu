import { fromJS } from "immutable";
import { change_home_data, add_more_articles } from "../";

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
    case add_more_articles: 
      return state.set('articleList', state.get('articleList').concat(action.list))
    default:
      return state;
  }
};
