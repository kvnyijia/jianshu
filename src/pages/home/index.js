import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommned";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { HomeLeft, HomeRight, HomeWrapper } from "./style";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className="banner-img" src="https://m.media-amazon.com/images/I/61GC3F6XpsL._SX3000_.jpg"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const data = res.data;
      const action = {
        type: 'change_home_data',
        topicList: data.topicList,
        articleList: data.articleList, 
        recommendList: data.recommendList,
      };
      this.props.handleHomeData(action);
    })
  }
}

const mapStateToProps = null;
// (state) => {
//   return {
//     articleList: state.getIn(['home','articleList']),
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  handleHomeData(action) {
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
