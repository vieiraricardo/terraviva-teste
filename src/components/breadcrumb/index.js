import React from "react"
import { Breadcrumb as CrumbLinks } from "gatsby-plugin-breadcrumb"

import * as S from "./styles"

export default function BreadCrumb({ crumbs }) {
  return (
    <S.Container>
      <S.Centered>
        {crumbs?.length && <CrumbLinks crumbs={crumbs} crumbSeparator=" / " />}
      </S.Centered>
    </S.Container>
  )
}
