import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled(Link)`
  background: ${props => (props.bg ? props.bg : "#fe7d0b")};
  transition: all 0.3s;
  box-sizing: border-box;
  text-transform: uppercase;
  outline: none;
  color: ${props => (props.color ? props.color : "#FFF")};
  font-size: ${props => (props.fs ? props.fs : "13.5px")};
  text-decoration: none;
  display: inline-flex;
  padding: ${props => (props.spacing ? props.spacing : "15px 30px")};

  :hover {
    background: ${props => (props.bgh ? props.bgh : "#222931")};
    color: ${props => (props.hcolor ? props.hcolor : "#FFF")};
  }
`
