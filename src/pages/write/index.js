import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Write = (props) => {
  return (props.login ? 
    <div>Writing Page</div>  
    :
    <Navigate to="/login"/>
  );
}

const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login']),
});

const mapDispatchToProps = null;
// (dispatch) => ({

// });

export default connect(mapStateToProps, mapDispatchToProps)(Write);
