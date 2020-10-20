import React from "react"
import { Link } from "gatsby"
import * as S from "./styles"

export default function Card({ img, children, link }) {
  return (
    <S.Container>
      <Link to={link}>
        <S.Img src={img} />
      </Link>
      <S.Block>{children}</S.Block>
    </S.Container>
  )
}
