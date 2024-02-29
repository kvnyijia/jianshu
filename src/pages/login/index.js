import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "./store/action/action";
import { Button, Input, LoginBox, LoginWrapper } from "./style";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (props.login ? 
    <Navigate to="/"/>
    :
    <LoginWrapper>
      <LoginBox>
        <Input placeholder="username" onChange={e => setUsername(e.target.value)} />
        <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
        <Button onClick={() => props.handleLogin(username, password) }>Login</Button>
      </LoginBox>
    </LoginWrapper>  
  );
}

const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login']),
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin(username, password) {
    dispatch(login(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
