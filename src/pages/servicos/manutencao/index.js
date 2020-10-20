import React from "react"

import ServiceLayout from "../../../components/serviceLayout"
import * as S from "./styles"
import SEO from "../../../components/seo"

export default function Services({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  return (
    <ServiceLayout pathData={{ location, crumbs }}>
      <SEO
        title="Manutenção de sistema de ordenhas"
        description="Serviço de manutenção de de sistemas de ordenhas para clientes Sanity Milk."
        meta={[
          {
            name: "keywords",
            content:
              "sanity milk, ordenhadeiras, manutenção de ordenhadeira, ordenha",
          },
          {
            name: "image",
            content: "https://sanitymilk.com.br/images/service3.jpg",
          },
        ]}
      />
      <S.H1>Serviço de Manutenção de sistema de ordenhas</S.H1>
      <S.P>
        Todo parceiro <b>SANITY MILK</b> (revendas, distribuidores e técnicos)
        obrigatoriamente participam de treinamento de qualificação na sede da
        empresa onde são repassados todos os conceitos sobre o uso adequado de
        uma ordenhadeira mecânica, componentes, aferições, etc.
      </S.P>
      <S.P>
        O treinamento de uma semana, consiste em ensinamentos teóricos e
        práticos e ao fim do mesmo um teste é aplicado para avaliar o candidato.
        Se aprovado receberá um certificado da <b>SANITY MILK</b> e estará apto
        a trabalhar na região previamente determinada pela empresa como técnico
        da mesma ou como técnico de parceiro <b>SANITY MILK</b>.
      </S.P>
      <S.P>
        Esse cuidado todo para garantir aos nossos clientes em geral (produtores
        e parceiros) um atendimento personalizado, de alto valor técnico e
        garantia de perfeito funcionamento do equipamento de ordenha.
      </S.P>
      <S.P>
        Clientes do <b>PROGRAMA SANITY MILK DE QUALIDADE DO LEITE</b> são
        atendidos periodicamente por esses profissionais, onde, através de um
        check-list, o técnico avaliará todo o equipamento de ordenha e
        identificará possíveis gargalos do perfeito funcionamento desta,
        indicando a troca preventiva de algum componente que possa estar
        comprometendo esse perfeito processo de ordenha.
      </S.P>
      <S.ImagesContainer>
        <S.ImageBlock>
          <S.Img src="/images/manutencao-04.jpg" alt="" />
          <br />
          <S.P>
            Serviço preventivo de funcionamento adequado de ordenhadeiras.
          </S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/manutencao-01.jpg" alt="" />
          <br />
          <S.P>Check-up periódico de todos os componentes da ordenhadeira.</S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/manutencao-02.jpg" alt="" />
          <br />
          <S.P>Serviço corretivo de funcionamento das ordenhadeiras.</S.P>
        </S.ImageBlock>
      </S.ImagesContainer>
    </ServiceLayout>
  )
}
