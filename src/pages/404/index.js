import React from "react"

import Layout from "../../components/layout"
import * as S from "./styles"

export default function NotFound({ location }) {
  return (
    <Layout pathData={{ location }}>
      <S.Container>
        <h1>NotFound</h1>
      </S.Container>
    </Layout>
  )
}
