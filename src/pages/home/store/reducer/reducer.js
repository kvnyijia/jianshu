import { fromJS } from "immutable";
import { change_home_data, add_more_articles, toggle_showScrollToTop } from "../";

export const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScrollToTop: false,
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
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage,
      });
    case toggle_showScrollToTop: 
      return state.set('showScrollToTop', action.show);
    default:
      return state;
  }
};
