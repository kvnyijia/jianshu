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
  articleList: [{
    id: 0,
    title: 'article 0',
    desc: 'desc',
    imgUrl: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
  }, {
    id: 1,
    title: 'article 1',
    desc: 'desc',
    imgUrl: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
  }]
});

export const reducer = (state=defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
