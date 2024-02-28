import React from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from '../style';

function Recommend(props) {
  return (
    <RecommendWrapper>
      {props.recommendList.map((item, idx) => (
        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
      ))}
    </RecommendWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home','recommendList']),
  }
}

const mapDispatchToProps = null; //(dispatch) => {

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
