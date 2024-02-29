import axios from "axios";
import { fromJS } from "immutable";
import { change_home_data, add_more_articles } from "../";

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data;
      const action = {
        type: change_home_data,
        topicList: data.topicList,
        articleList: data.articleList, 
        recommendList: data.recommendList,
      };
      dispatch(action);
    })
  };
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then((res) => {
      const data = res.data;
      const action = {
        type: add_more_articles,
        list: fromJS(data.articleList),
        nextPage: page+1,
      };
      dispatch(action);
    })
  };
};
