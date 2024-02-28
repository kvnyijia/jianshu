import axios from 'axios';
import { fromJS } from 'immutable';

export const search_focus = () => ({
  type: 'search_focus'
});

export const search_blur = () => ({
  type: 'search_blur'
});

const changeList = (data) => ({
  type: 'change_list',
  data: fromJS(data),   // must use fromJS() to achieve immutability
  totalPage: Math.ceil(data.length / 10),
})

export const get_searchList = () => {
  return (dispath) => {
    axios.get('/api/headerList.json').then((res) => {
      dispath(changeList(res.data.data));
    }).catch((error) => {
      console.log(error);
    });
  }
};

export const mouse_enter = () => ({
  type: 'mouse_enter',
});

export const mouse_leave = () => ({
  type: 'mouse_leave',
});

export const change_page = (page) => ({
  type: 'change_page',
  page,
});
