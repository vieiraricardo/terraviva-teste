import React from "react"

import ProductLayout from "../../../../components/productLayout"
import * as S from "./styles"
import Carousel from "../../../../components/carousel"
import SEO from "../../../../components/seo"

export default function Product({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  return (
    <ProductLayout pathData={{ location, crumbs }}>
      <SEO
        title="Ordenhadeira Balde ao Pé"
        description=" Com o melhor custo x benefício do mercado, as Ordenhadeiras Balde ao Pé
        SANITY MILK são equipamentos que aliam simplicidade, tecnologia e
        robustez."
        meta={[
          {
            name: "keywords",
            content:
              "sanity milk, ordenhadeiras, ordenhadeira balde ao pé, ordenha balde ao pé, sistema de ordenha balde ao pé",
          },
          {
            name: "image",
            content: "https://sanitymilk.com.br/images/pg7.png",
          },
          {
            property: "og:image",
            content: "https://sanitymilk.com.br/images/pg7.png",
          },
          {
            property: "twitter:image",
            content: "https://sanitymilk.com.br/images/pg7.png",
          },
        ]}
      >
        <link rel="stylesheet" href="/css/flickity.min.css" />
      </SEO>
      <S.H1>Ordenhadeira Balde ao Pé</S.H1>

      <S.P>
        Com o melhor custo x benefício do mercado, as Ordenhadeiras Balde ao Pé
        SANITY MILK são equipamentos que aliam simplicidade, tecnologia e
        robustez. Consiste em um sistema onde os conjuntos de ordenha com tarro
        são colocados ao lado do pé da vaca em um estábulo ou sala de ordenha
        para ser realizada a ordenha. De fácil instalação e customizável,
        conforme necessidade e realidade de cada produtor. Composta por itens de
        alta qualidade e durabilidade, são ideais para produtores de leite com
        pequenos rebanhos e que necessitem otimizar a sua rotina de ordenha,
        reservando mais tempo para outras atividades da fazenda e para sua
        família. São oferecidas no mercado nas versões SMI (Inox) ou SMA (Aço)
      </S.P>

      <S.Gallery>
        <Carousel
          flickityRef={c => (window.flkty = c)}
          options={{
            cellAlign: "left",
            contain: true,
            pageDots: false,
            autoPlay: 2000,
            lazyLoad: true,
          }}
        >
          <S.Img src="/images/pg7.png" alt="" />
          <S.Img src="/images/pg5.png" alt="" />
          <S.Img src="/images/pg6.png" alt="" />
        </Carousel>
      </S.Gallery>

      <S.H3>Características:</S.H3>
      <S.ImageBanner src="/images/diagram.jpg" alt="" />
    </ProductLayout>
  )
}
