import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: relative;
`
export const FooterContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 30px;
  max-width: 1140px;
  margin-bottom: 30px;
  box-sizing: border-box;
`
export const Block = styled.div`
  ${media.lessThan("1140px")`
    padding: 0 30px;
  `}
`
export const FooterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1140px;
  padding: 30px 0;
  ${media.lessThan("1140px")`
    padding: 30px;
  `}
`
export const P = styled.p`
  color: #5f656d;
  font-family: "Open Sans", Sans-serif;
  font-size: ${props => (props.size ? props.size + "px" : "15px")};
  font-weight: 400;
  line-height: 1.643em;

  a {
    color: #5f656d;
    text-decoration: none;
  }

  a:hover {
    color: #fe7d0b;
  }

  b {
    color: #000;
    font-weight: bold;
  }
`
export const FooterHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121;
  width: 100%;
`
export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`
export const MenuItem = styled.li`
  /* background: #fe7d0b; */
  font-size: 14px;
  text-transform: uppercase;
  a {
    padding: 20px 20px 0 0;
    text-decoration: none;
    font-weight: 300;
    outline: none;
    font-size: 13px;
    transition: all 0.3s;
  }
  a:hover {
    color: #fe7d0b;
  }
`
export const StyledLink = styled(Link)`
  width: 100%;
  color: #5f656d;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.643em;
  text-decoration: none;
  display: flex;
  margin-bottom: 10px;
  :hover {
    color: #fe7d0b;
  }
`
export const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`
export const Copyright = styled.p`
  color: #848a90;
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 20px;
`
export const SStyledLink = styled.a`
  color: #5f656d;
  text-decoration: none;
  font-weight: 300;
  outline: none;
  font-size: ${props => (props.size ? props.size + "px" : "13px")};
  transition: all 0.3s;
  margin-left: 10px;
  :hover {
    color: #fe7d0b;
  }
`
export const H1 = styled.h1`
  font-family: "Hind", Sans-serif;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: ${props => (props.color ? props.color : "#000")};
  margin: 20px 0;
`
export const WrapElement = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: ${props => (props.center ? "center" : "none")};
  margin-bottom: ${props => (props.bottom ? props.bottom : "20px")};
  font-size: 15.5px;
  color: #5f656d;
  font-family: "Open Sans", Sans-serif;
  font-weight: 400;
  line-height: 1.643em;
`
export const WrapIcon = styled.div`
  width: 30px;
  min-width: 30px;
  height: auto;
`
export const LineSpace = styled.div`
  margin-bottom: 10px;
`
