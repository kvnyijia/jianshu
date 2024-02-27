import React, { useRef } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Addition, HeaderStyle, Logo, Nav, NavButton, NavItem, NavSearch, SearchWrapper } from "./style";

const Header = (props) => {
  const node_ref = useRef(null);

  return (
    <HeaderStyle>
      <Logo/>
      <Nav>
        <NavItem className="left active">Home</NavItem>
        <NavItem className="left">Download App</NavItem>
        <NavItem className="right">Login</NavItem>
        <NavItem className="right">Aa</NavItem>

        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
            nodeRef={node_ref}
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFoucs}
              onBlur={props.handleInputBlur}
              ref={node_ref}
            />
          </CSSTransition>
          <FontAwesomeIcon className={props.focused ? 'focused search_icon' : 'search_icon'} icon={faMagnifyingGlass} />
        </SearchWrapper>
      </Nav>
      <Addition>
        <NavButton className="writing">Writing</NavButton>
        <NavButton className="register">Register</NavButton>
      </Addition>
    </HeaderStyle>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFoucs() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    }, 
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
