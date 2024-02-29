import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommned";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { change_showScrollToTop, getHomeData } from "./store";
import { BackToTop, HomeLeft, HomeRight, HomeWrapper } from "./style";

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
        { this.props.showScrollToTop ? <BackToTop onClick={this.handleScrollToTop}>^</BackToTop> : null }
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.handleHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleShowScrollToTop);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.handleShowScrollToTop);
  }

  handleScrollToTop() {
    window.scrollTo(0, 0);
  }
}

const mapStateToProps = (state) => {
  return {
    showScrollToTop: state.getIn(['home','showScrollToTop']),
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleHomeData() {
    dispatch(getHomeData());
  },
  handleShowScrollToTop(e) {
    if (document.documentElement.scrollTop > 100) {
      dispatch(change_showScrollToTop(true));
    } else {
      dispatch(change_showScrollToTop(false));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
