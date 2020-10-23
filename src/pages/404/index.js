import React from "react"

import Layout from "../../components/layout"
import * as S from "./styles"

export default function NotFound({ location }) {
  return (
    <Layout pathData={{ location }}>
      <S.Container>
        <img src="/images/not-found.png" alt="not-found"/>
        <S.H2>Página não encontrada</S.H2>
      </S.Container>
    </Layout>
  )
}
