import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const Container = styled.main`
  display: grid;
  grid-template-columns: 23% 75%;
  grid-gap: 2%;
  height: auto;
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;

  ${media.lessThan("770px")`
    grid-template-columns: 100%;
  `}

  ${media.between("771px", "1124px")`
    grid-template-columns: 100%;
  `}
`
export const Sidebar = styled.aside`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  box-sizing: border-box;

  ${media.lessThan("770px")`
    padding: 0 30px;
    min-height: auto;
  `}

  ${media.lessThan("1020px")`
    display: none;
  `}
`
export const MainContent = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;

  ${media.lessThan("770px")`
    padding: 0 20px;
  `}
`
export const LinkItem = styled(Link)`
  width: 100%;
  padding: 20px 0;
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
  box-sizing: border-box;
  :hover {
    background: #3b3d42;
    color: #fff;
  }
`
export const CallToContact = styled.div`
  width: 100%;
  background: #fe7d0b;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`
export const P = styled.p`
  color: ${props => (props.color ? props.color : "#FFF")};
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.643em;
  letter-spacing: 0px;
  margin-bottom: ${props => (props.mb ? props.mb : "5px")};
`
export const H2 = styled.h2`
  font-family: "Hind", Sans-serif;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  text-decoration: none;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: ${props => (props.color ? props.color : "#FFF")};
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
export const WrapIcon = styled.div`
  width: 25px;
  margin-right: 10px;
`
export const WtContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
