import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommned";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { getHomeData } from "./store";
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
    this.props.handleHomeData();
  }
}

const mapStateToProps = null;
// (state) => {
//   return {
//     articleList: state.getIn(['home','articleList']),
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  handleHomeData() {
    dispatch(getHomeData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
