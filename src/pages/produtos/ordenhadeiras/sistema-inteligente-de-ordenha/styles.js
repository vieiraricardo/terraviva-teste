import styled from "styled-components"
import media from "styled-media-query"

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
  font-size: 24px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #5f656d;
  margin-bottom: 40px;
  margin-top: 30px;
`
export const H3 = styled.h3`
  font-family: "Hind", Sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #5f656d;
  margin-bottom: 22px;
`
export const H4 = styled.h4`
  font-family: "Hind", Sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #5f656d;
  margin: 10px 0;
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
  letter-spacing: 0;
  text-align: justify;
  padding: ${props => props.padding};
  b {
    color: #000;
    font-weight: bold;
  }
`
export const UL = styled.ul`
  padding-left: 20px;
  list-style: disc;
`
export const LI = styled.li`
  color: #5f656d;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1.643em;
  letter-spacing: 0;
`

export const Block = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  margin-bottom: 30px;
  justify-content: space-between;

  ${media.lessThan("770px")`
    flex-direction: column;
  `}
`
export const Gallery = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
`
export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
export const ProductItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${media.lessThan("770px")`
    flex-direction: column;
  `}
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
`
export const Image = styled.img`
  margin-left: 30px;
  margin-top: 20px;
`
