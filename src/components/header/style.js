import styled from "styled-components";
import logoPic from '../../static/nav-logo.png'

export const HeaderStyle = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: orange;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .search_icon {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 10px;
    height: 10px;
    border-radius: 15px;
    padding: 8px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
  .rotate_icon {
    // display: block;
    // float: left;
    margin-right: 5px;
    transition: all .2s ease-in;
    // transform-orgin: center center;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'search'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 250px
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 250px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  color: #787878;
  border-radius: 3px;
  border: 1px solid #ddd;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const NavButton = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.register {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;