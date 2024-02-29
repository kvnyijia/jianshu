import React from "react";
import { connect } from "react-redux";
import { Content, DetailWrapper, Header } from "./style";

function Detail(props) {
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

const mapDispatchToProps = null; // (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
