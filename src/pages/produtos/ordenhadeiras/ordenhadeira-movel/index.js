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
        title="Ordenhadeira Móvel"
        description="Com as mesmas características da ordenhadeira balde ao pé e inclusive
        podendo se transformar em uma, a ordenhadeira móvel é montada em cima de
        um carrinho, o que facilita o manuseio e a deixa compacta."
        meta={[
          {
            name: "keywords",
            content:
              "sanity milk, ordenhadeiras, ordenhadeira móvel, ordenhadeira carrinho, sistema de ordenha móvel",
          },
          {
            name: "image",
            content: "https://sanitymilk.com.br/images/pg1.png",
          },
          {
            property: "og:image",
            content: "https://sanitymilk.com.br/images/pg1.png",
          },
          {
            property: "twitter:image",
            content: "https://sanitymilk.com.br/images/pg1.png",
          },
        ]}
      >
        <link rel="stylesheet" href="/css/flickity.min.css" />
      </SEO>
      <S.H1>Ordenhadeira Móvel</S.H1>

      <S.P>
        Com as mesmas características da ordenhadeira balde ao pé e inclusive
        podendo se transformar em uma, a ordenhadeira móvel é montada em cima de
        um carrinho, o que facilita o manuseio e a deixa compacta, sem precisar
        de instalação. Com designer robusto aliado a praticidade, esse
        equipamento atende bem a produtores que não ensejam fazer uma sala de
        ordenha, que possuem mais de um local (fazendas) onde serão ordenhados
        os animais ou ainda produtores que queiram adquirir esse equipamento
        somente para ordenhar vacas recém-paridas, medicadas que não se pode
        aproveitar o leite, torneios leiteiros entre outros.
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
          <S.Img src="/images/pg1.png" alt="" />
          <S.Img src="/images/pg2.png" alt="" />
          <S.Img src="/images/pg3.png" alt="" />
        </Carousel>
      </S.Gallery>
    </ProductLayout>
  )
}
