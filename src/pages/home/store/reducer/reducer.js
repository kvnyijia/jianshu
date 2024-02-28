import { fromJS } from "immutable";

export const defaultState = fromJS({
  topicList: [{
    id: 0,
    title: 'topic 0',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa-AB4KLa5Q4jYOas-CixGrdSxaXPgDa9wQ2jtQwDAQ&s',
  }, {
    id: 1,
    title: 'topic 1',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa-AB4KLa5Q4jYOas-CixGrdSxaXPgDa9wQ2jtQwDAQ&s',
  },],
});

export const reducer = (state=defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
