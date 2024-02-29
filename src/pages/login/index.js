import React from "react";
import { connect } from "react-redux";
import { Button, Input, LoginBox, LoginWrapper } from "./style";

const Login = (props) => {

  return (
    <LoginWrapper>
      <LoginBox>
        <Input placeholder="username"/>
        <Input placeholder="password"/>
        <Button>Login</Button>
      </LoginBox>
    </LoginWrapper>
  );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
