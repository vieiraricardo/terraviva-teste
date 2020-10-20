import styled from "styled-components"

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
  padding: ${props => props.padding};
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
export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
