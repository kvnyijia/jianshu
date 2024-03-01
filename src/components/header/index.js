import React, { useRef, useState } from "react";
import { faMagnifyingGlass, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Addition, HeaderStyle, Logo, Nav, NavButton, NavItem, NavSearch, SearchInfo, SearchInfoItem, SearchInfoList, SearchInfoSwitch, SearchInfoTitle, SearchWrapper } from "./style";
import { change_page, get_searchList, mouse_enter, mouse_leave, search_blur, search_focus } from "./store";
import { Link } from "react-router-dom";
import { logout } from "../../pages/login/store/";

const GetSearchInfo = (props) => {
  const list = [];
  const jsList = props.list.toJS();
  for (let i = props.page*10; i < (props.page+1)*10; ++i) {
    if (jsList[i] != null) {
      list.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>);
    }
  }
  const [rotate_icon, setRotate_icon] = useState();

  return props.focused || props.mouseIn ? (
    <SearchInfo
      onMouseEnter={props.handleMouseEnter}
      onMouseLeave={props.handleMouseLeave}
    >
      <SearchInfoTitle>
        Popular
        <SearchInfoSwitch onClick={() => { props.handleInfoSwitch(props.page, props.totalPage, rotate_icon); }}>
          <FontAwesomeIcon 
            className="rotate_icon" 
            icon={faRotate}
            ref={setRotate_icon}
          />
          Shuffle
        </SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoList>
        {list}
      </SearchInfoList>
    </SearchInfo>
  ) : null;
};

const Header = (props) => {
  const node_ref = useRef(null);

  return (
    <HeaderStyle>
      <Link to="/">
        <Logo/>
      </Link>
      <Nav>
        <NavItem className="left active">Home</NavItem>
        <NavItem className="left">Download App</NavItem>
        {props.login ? 
          <NavItem className="right" onClick={props.handleLogout}>Logout</NavItem>
           : 
          <Link to="/login">
            <NavItem className="right">Login</NavItem>
          </Link>
        }
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
              onFocus={() => { props.handleInputFoucs(props.list); }}
              onBlur={props.handleInputBlur}
              ref={node_ref}
            />
          </CSSTransition>
          <FontAwesomeIcon className={props.focused ? 'focused search_icon' : 'search_icon'} icon={faMagnifyingGlass} />
          { GetSearchInfo(props) }
        </SearchWrapper>
      </Nav>
      <Addition>
        <Link to="/write">
          <NavButton className="writing">Writing</NavButton>
        </Link>
        <NavButton className="register">Register</NavButton>
      </Addition>
    </HeaderStyle>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFoucs(list) {
      if (list.size === 0) {
        dispatch(get_searchList());
      }
      dispatch(search_focus());
    }, 
    handleInputBlur() {
      dispatch(search_blur());
    },
    handleMouseEnter() {
      dispatch(mouse_enter());
    },
    handleMouseLeave() {
      dispatch(mouse_leave());
    },
    handleInfoSwitch(page, totalPage, rotate_icon) {
      let angle = rotate_icon.style.transform.replace(/[^0-9]/ig, '');
      angle = angle !== '' ? parseInt(angle, 10) : 0;
      rotate_icon.style.transform = `rotate(${angle + 360}deg)`;
      dispatch(change_page((page+1) % totalPage));
    },
    handleLogout() {
      dispatch(logout());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
