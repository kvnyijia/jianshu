import React from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

function Topic(props) {
  return (
    <TopicWrapper>
      {props.topicList.map((item, idx) => (
        <TopicItem key={idx}>
          <img 
            className="topicItem_pic"
            src={item.get('imgUrl')}
            alt=""
          />
          {item.get('title')}
        </TopicItem>
      ))}
    </TopicWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home','topicList']),
  }
}

const mapDispatchToProps = null; //(dispatch) => {

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
