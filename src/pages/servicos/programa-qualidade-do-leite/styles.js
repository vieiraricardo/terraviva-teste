import styled from "styled-components"
import media from "styled-media-query"

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
  font-family: "Hind", Sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #5f656d;
`

export const H3 = styled.h3`
  font-family: "Hind", Sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: ${props => (props.color ? props.color : "#5f656d")};
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
  padding: ${props => props.padding};
  b {
    color: #000;
    font-weight: bold;
  }

  a {
    color: #000;
    text-decoration: underline;
  }
`
export const ImageBanner = styled.img`
  object-fit: contain;
  width: 100%;
`
export const Gallery = styled.div`
  width: 100%;
  margin: 50px 0;
`
export const Img = styled.img`
  object-fit: contain;
  width: 100%;
`
export const Table = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-gap: 5px;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;

  ${media.lessThan("563px")`
    div > h3:nth-child(1) {
      font-size: 12px;
    }
  `}
`
export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  margin-top: 50px;

  ${media.lessThan("770px")`
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  `}
`
export const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-bottom: 30px;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box;
`
export const TableRow = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 40% 20% 20% 20%;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3px;

  div:nth-child(1) {
    justify-content: flex-start;
    /* background: red; */
  }

  ${media.greaterThan("771px")`
    grid-template-columns: 25% 25% 25% 25%;
  `};
`
export const Row = styled.div`
  display: flex;
  width: 100%;
  /* max-width: 211px; */
  box-sizing: border-box;
  padding: 14px 10px;
  justify-content: center;
  align-items: center;
  background: ${props => (props.bg ? props.bg : "#f5f5f5")};
  border-top-left-radius: ${props => (props.br ? props.br : 0)};
  border-top-right-radius: ${props => (props.br ? props.br : 0)};
`
