import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* margin-top: 37px; */
  background: #f5f6f6;
  justify-content: center;

  ${media.lessThan("770px")`
    margin-top: 0;
  `}
`
export const Centered = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  box-sizing: border-box;
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan("1140px")`
    padding: 20px 30px;
  `}

  ${media.lessThan("770px")`
    flex-direction: column;
  `}
`
export const H3 = styled.h3`
  font-family: "Hind", Sans-serif;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  text-decoration: none;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #292929;

  ${media.lessThan("770px")`
    margin-bottom: 15px;
  `}
`
