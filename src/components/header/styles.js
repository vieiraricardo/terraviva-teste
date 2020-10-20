import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Icon from "../icons";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  /* position: fixed;
  z-index: 1; */
  background: #fff;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.04);
`;
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  flex-direction: row;
  height: 82px;
  padding: 14px 0;
  margin: 0 auto;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
`;
export const HeaderBlock = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  p {
    font-size: ${(props) => (props.fs ? props.fs : "14px")};
  }
`;
export const VerticalLine = styled.div`
  height: 100%;
  border-style: solid;
  border-width: 0px 1px 0px 0px;
  border-color: #e6e8e8;
`;
export const Nav = styled.nav`
  width: 100%;
  max-width: 1140px;
  position: absolute;
  background: #fe7d0b;
  z-index: 10;
  padding: 0 15px;
  bottom: -55px;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 3px;
  transition: all 0.25s linear;

  ${media.lessThan("770px")`
    display: none;
  `}
`;
export const PhoneNumber = styled.p`
  color: #5f656d;
  font-family: "Roboto", Sans-serif;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.643em;
  margin-left: 10px;

  ${media.lessThan("770px")`
    display: none;
  `}
`;
export const MenuList = styled.ul`
  display: flex;
`;
export const MenuItem = styled.li`
  height: 100%;
  font-family: "Roboto", Open Sans, Sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  text-decoration: none;
  line-height: 23.002px;
  /* letter-spacing: 0.56px; */
  background: #fe7d0b;
  transition: all 0.3s;
  position: relative;
  white-space: nowrap;
  :hover {
    background: #000;
  }
  a {
    display: flex;
    color: #fff;
    padding: 14px;
    text-decoration: none;
    font-weight: bold;
    outline: none;
  }
`;

export const DropDownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 51px;
  z-index: 1;
`;
export const Logo = styled.img`
  height: 80px;
  margin-top: -10px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;

  ${media.lessThan("770px")`
    padding-right: 50px;
  `}
`;
export const Menu = styled.div`
  top: 20px;
  right: 10px;
  padding: 13px;
  background: #fe7d0b;
  border-radius: 4px;
  position: fixed;
  display: none;
  z-index: 10;

  ${media.lessThan("770px")`
    display: block;
  `}
`;
export const SStyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 40px;
  height: 40px;
  background: ${(props) => (props.bg ? props.bg : "#FFF")};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 300;
  outline: none;
  font-size: 18px;
  transition: all 0.3s;
  margin-left: 10px;
`;
export const SocialLink = ({ icon, url, size, bg }) => (
  <SStyledLink href={url} target="_blank" size={size} bg={bg}>
    <Icon name={icon} />
  </SStyledLink>
);
