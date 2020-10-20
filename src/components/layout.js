import React from "react"

import Header from "./header"
import Footer from "./footer"
import BreadCrumb from "./breadcrumb"

export default function Layout({ children, pathData }) {
  const { location, crumbs } = pathData
  return (
    <>
      <Header pathData={pathData} />

      {location.pathname !== "/" && <BreadCrumb crumbs={crumbs} />}

      {children}
      <Footer />
    </>
  )
}
