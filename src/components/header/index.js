import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Addition, HeaderStyle, Logo, Nav, NavButton, NavItem, NavSearch, SearchWrapper } from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFoucs = this.handleInputFoucs.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

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
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFoucs}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
            <FontAwesomeIcon className={this.state.focused ? 'focused search_icon' : 'search_icon'} icon={faMagnifyingGlass} />
          </SearchWrapper>
        </Nav>
        <Addition>
          <NavButton className="writing">Writing</NavButton>
          <NavButton className="register">Register</NavButton>
        </Addition>
      </HeaderStyle>
    )
  }

  handleInputFoucs() {
    this.setState({
      focused: true
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;
