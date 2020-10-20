import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import Button from "./button"

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: 140px;
  padding: ${props => props.pad};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: ${props => (props.bg ? props.bg : "#fe7d0b")};

  ${media.lessThan("920px")`
    display: none;
  `}
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
`
const H1 = styled.h1`
  font-size: 34px;
  font-family: "Hind", sans-serif;
  font-weight: 600;
  color: ${props => (props.color ? props.color : "#FFF")};
  margin-right: 40px;
  letter-spacing: 0;
`
const H2 = styled.h1`
  font-size: 28px;
  font-family: "Lobster", sans-serif;
  font-weight: 400;
  color: ${props => (props.color ? props.color : "#333")};
  margin-right: 40px;
  letter-spacing: 0;
`

const BannerContainer = props => (
  <Container {...props}>{props.children}</Container>
)

export default function Banner({ bg, color, pad, buttonBg, buttonColor }) {
  return (
    <BannerContainer pad={pad} bg={bg}>
      <Row>
        <H1 color={color}>Somos a SANITY MILK</H1>
        <H2>Inovação e Confiabilidade</H2>
      </Row>
      <Button
        icon={["far", "envelope"]}
        text="contate nos"
        url="/contato"
        bg={buttonBg}
        color={buttonColor}
      />
    </BannerContainer>
  )
}
