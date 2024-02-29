import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "./store";
import { Content, DetailWrapper, Header } from "./style";

const Detail = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.handleDetail(id);
  }, [props, id]);

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
  handleDetail(id) {
    dispatch(getDetail(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
