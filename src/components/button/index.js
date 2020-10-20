import React from "react"
import { Container } from "./styles"
import Icon from "../icons"

export default function Button({
  text,
  icon,
  url,
  iconr,
  size,
  bg,
  color,
  hcolor,
}) {
  const renderRight = () => (
    <>
      <p>{text}</p>
      {icon && <Icon name={icon} margin="0 0 0 10px" size={size} />}
    </>
  )

  const renderLeft = () => (
    <>
      {icon && <Icon name={icon} margin="0 10px 0 0" size={size} />}
      <p>{text}</p>
    </>
  )

  return (
    <Container bg={bg} color={color} hcolor={hcolor} to={url}>
      {iconr ? renderRight() : renderLeft()}
    </Container>
  )
}
