import React from "react";
import { connect } from "react-redux";
import { ListInfo, ListItem } from '../style';

function List(props) {
  return (
    <div>
      {props.articleList.map((item, idx) => (
        <ListItem key={item.get('id')}>
          <img alt="" className="listItem_pic" src={item.get('imgUrl')}/>
          <ListInfo>
            <h3 className="listTitle">{item.get('title')}</h3>
            <p className="listDesc">{item.get('desc')}</p>
          </ListInfo>
        </ListItem>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home','articleList']),
  }
}

const mapDispatchToProps = null; //(dispatch) => {

export default connect(mapStateToProps, mapDispatchToProps)(List);
