import axios from "axios";
import { change_detail_data } from "./constants";


export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then((res) => {
      const data = res.data.data;
      const action = {
        type: change_detail_data,
        title: data.title,
        content: data.content,
      };
      dispatch(action);
    });
  }
};