import React from "react"
import * as S from "./styles"
import Flickity from "react-flickity-component"

export default function Carousel({
  children,
  height,
  bg,
  options,
  flickityRef,
  fixed,
}) {
  return (
    <Flickity
      flickityRef={flickityRef}
      className={"carousel"}
      elementType={"div"}
      options={options}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {children.map((child, i) => (
        <S.GalleryCell key={i} fixed={fixed}>
          {child}
        </S.GalleryCell>
      ))}
    </Flickity>
  )
}
