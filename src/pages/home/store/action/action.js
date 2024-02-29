import axios from "axios";
import { change_home_data } from "../";

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
