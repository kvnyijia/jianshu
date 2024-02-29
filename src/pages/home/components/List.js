import React from "react";
import { connect } from "react-redux";
import { getMoreList } from "../store";
import { ListInfo, ListItem, LoadMoreButton } from '../style';

function List(props) {
  return (
    <div>
      {props.articleList.map((item, idx) => (
        <ListItem key={idx}>
          <img alt="" className="listItem_pic" src={item.get('imgUrl')}/>
          <ListInfo>
            <h3 className="listTitle">{item.get('title')}</h3>
            <p className="listDesc">{item.get('desc')}</p>
          </ListInfo>
        </ListItem>
      ))}
      <LoadMoreButton
        onClick={() => props.handleLoadMore(props.articlePage)}
      >
        Load more
      </LoadMoreButton>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home','articleList']),
    articlePage: state.getIn(['home', 'articlePage']),
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLoadMore(page) {
    dispatch(getMoreList(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
