import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Addition, HeaderStyle, Logo, Nav, NavButton, NavItem, NavSearch, SearchWrapper } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <Logo/>
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">Aa</NavItem>

          <SearchWrapper>
            <NavSearch/>
            <FontAwesomeIcon className="search_icon" icon={faMagnifyingGlass} />
          </SearchWrapper>
        </Nav>
        <Addition>
          <NavButton className="writing">Writing</NavButton>
          <NavButton className="register">Register</NavButton>
        </Addition>
      </HeaderStyle>
    )
  }
}

export default Header;
