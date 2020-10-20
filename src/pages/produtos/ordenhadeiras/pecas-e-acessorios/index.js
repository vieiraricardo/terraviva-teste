import React from "react"

import ProductLayout from "../../../../components/productLayout"
import * as S from "./styles"
import Carousel from "../../../../components/carousel"
import SEO from "../../../../components/seo"
import Icon from "../../../../components/icons"

export default function Product({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  return (
    <ProductLayout pathData={{ location, crumbs }}>
      <SEO
        title="Peças e Acessórios"
        description="Peças e acessórios para diversos sistemas de ordenhas do mercardo."
        meta={[
          {
            name: "keywords",
            content: "sanity milk, ordenhadeiras, peças, acessórios",
          },
          {
            name: "image",
            content:
              "https://sanitymilk.com.br/images/pecas_e_acessorios/Slide27.JPG",
          },
          {
            property: "og:image",
            content:
              "https://sanitymilk.com.br/images/pecas_e_acessorios/Slide27.JPG",
          },
          {
            property: "twitter:image",
            content:
              "https://sanitymilk.com.br/images/pecas_e_acessorios/Slide27.JPG",
          },
        ]}
      >
        <link rel="stylesheet" href="/css/flickity.min.css" />
      </SEO>
      <S.H1>Peças e Acessórios</S.H1>

      <S.P>
        Possuímos uma vasta linha de peças e acessórios para os mais diversas
        sistemas de ordenha do mercado, garantindo assim um melhor conforto ao
        produtor de leite e nossos parceiros, propiciando uma assistência
        técnica rápida e personalizada a cada cliente, independente da
        ordenhadeira que possui.
      </S.P>

      <S.DownloadButton href="https://www.dropbox.com/s/0eec4uk0246zpba/Cat%C3%A1logo%20SanityMilk.pdf?dl=1">
        <Icon name="file-pdf" color="#fe7d0b" size="4x" />
        <div>
          <S.H3>Baixe nosso Catálogo</S.H3>
          <S.P>2.02 MB</S.P>
        </div>
      </S.DownloadButton>

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
          {[...new Array(34)].map((a, i) => (
            <S.Img
              key={`Carousel${i + 1}`}
              data-flickity-lazyload={`/images/pecas_e_acessorios/Slide${i +
                1}.JPG`}
            />
          ))}
        </Carousel>
      </S.Gallery>
    </ProductLayout>
  )
}
