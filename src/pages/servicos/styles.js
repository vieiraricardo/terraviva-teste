import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 100px;
  box-sizing: border-box;
  /* padding: 0 30px; */
`
export const LinkItem = styled(Link)`
  width: 100%;
  height: 80px;
  border: 1px solid #ebeced;
  color: #000;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Hind", Sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  text-decoration: none;
  line-height: 18.9px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin-bottom: 15px;
  :hover {
    background: #3b3d42;
    color: #fff;
  }
`
export const P = styled.p`
  color: #5f656d;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.643em;
  letter-spacing: 0px;
  margin-bottom: 15px;
  b {
    color: #000;
    font-weight: bold;
  }
  /* text-align: center; */

  a {
    color: #000;
    text-decoration: underline;
  }
`
export const H1 = styled.h1`
  font-size: ${props => (props.size ? props.size : "34px")};
  font-family: "Hind", sans-serif;
  font-weight: 600;
  color: ${props => (props.color ? props.color : "#fe7d0b")};
  margin-right: 40px;
  letter-spacing: 0;
`
export const H2 = styled.h2`
  font-family: "Hind", Sans-serif;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #fe7d0b;
`
export const Divider = styled.hr`
  display: block;
  height: 1px;
  width: 18px;
  border: 0;
  border-top: 3px solid #fe7d0b;
  margin: 1em 0;
  padding: 0;
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-items: center;
  grid-gap: 20px;
  width: 100%;
  margin: 30px;
`
