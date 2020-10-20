import styled from "styled-components"
import media from "styled-media-query"

export const GalleryCell = styled.div`
  width: 100%;
  height: 600px;

  ${media.lessThan("500px")`
    height: ${props => (props.fixed ? "600px" : "250px")};
  `}
`
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
