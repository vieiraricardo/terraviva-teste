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
  font-size: 22px;
  font-weight: 600;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #5f656d;
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

  b {
    color: #000;
    font-weight: bold;
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
export const Logo = styled.img`
  width: 100%;
  max-width: 800px;
  align-self: center;
  margin-bottom: 30px;
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
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 340px;
  margin-bottom: 20px;
`
