import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 1140px;
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 100px;

  ${media.lessThan("1140px")`
    padding: 0 30px;
  `}
`
export const H1 = styled.h1`
  font-size: ${props => (props.size ? props.size : "34px")};
  font-family: "Hind", sans-serif;
  font-weight: 600;
  color: ${props => (props.color ? props.color : "#fe7d0b")};
  margin-right: 40px;
  margin-bottom: 10px;
  letter-spacing: 0;
`
export const H2 = styled.h2`
  font-size: ${props => (props.size ? props.size : "30px")};
  font-family: "Hind", sans-serif;
  font-weight: 600;
  color: ${props => (props.color ? props.color : "#fe7d0b")};
  margin-right: 40px;
  margin-bottom: 10px;
  letter-spacing: 0;
`
export const H3 = styled.h3`
  font-family: "Hind", Sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #292929;
`
export const H5 = styled.h5`
  font-family: "Hind", Sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #292929;
`
export const P = styled.p`
  color: #5f656d;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1.643em;
  margin: ${props => (props.margin ? props.margin : "20px 0")};
  letter-spacing: 0;
  padding: ${props => props.padding};
  b {
    color: #000;
    font-weight: bold;
  }
`
export const Divider = styled.hr`
  display: block;
  height: 1px;
  width: 18px;
  border: 0;
  border-top: 3px solid #fe7d0b;
  margin: 1em 0;
  padding: 0;
  margin-bottom: 15px;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: 100%;

  ${media.lessThan("768px")`
    flex-direction: column;
    align-items: center;
  `}
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: 100%;

  ${media.lessThan("768px")`
    align-items: center;
  `}
`
export const Img = styled.img`
  margin-left: 20px;
  margin-top: 25px;
  height: 320px;
`
export const RoundedIcon = styled.div`
  min-width: 100px;
  width: 100px;
  height: 100px;
  background: #fe7d0b;
  border-radius: 50%;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 30px;
  fill: #fff;
`
export const CoreValues = styled.div`
  display: grid;
  grid-template-columns: 67% 30%;
  grid-gap: 3%;
  margin-bottom: 50px;

  ${media.lessThan("1024px")`
      grid-template-columns: 100%;
      grid-gap: 0;
  `}
`
export const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  color: #222931;
  font-family: "Hind", Sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  outline: none;
  border: 1px solid #e6e8e8;
  padding: 20px;
  background: #fff;
  cursor: pointer;
  text-align: left;
`
export const AccordionPannel = styled.div`
  background: #f5f6f6;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  border-width: 0 1px 0 1px;
  border-style: solid;
  border-color: #e6e8e8;
`

export const CellContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
