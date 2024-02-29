import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDetail } from "./store";
import { Content, DetailWrapper, Header } from "./style";

function Detail(props) {
  useEffect(() => {
    props.handleDetail();
  }, [props]);

  return (
    <DetailWrapper>
      <Header>{props.title}</Header>      
      <Content dangerouslySetInnerHTML={{__html: props.content}}/>
    </DetailWrapper>
  );
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
});

const mapDispatchToProps = (dispatch) => ({
  handleDetail() {
    dispatch(getDetail());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
