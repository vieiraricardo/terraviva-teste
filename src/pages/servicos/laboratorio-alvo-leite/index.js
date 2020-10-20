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
        title="Laboratório Alvo Leite"
        description="O Alvo Leite é um laboratório de exames (cultura de bactérias do
          leite) para descobrir exatamente quais microrganismos estão causando a
          mastite nas vacas e, consequentemente, aumentando a contagem de
          células somáticas (CCS), contagem de bactérias total (CBT), gastos com
          antibióticos, descartes de leite, morte de tetos, descartes de vacas
          doentes e mortalidade de animais."
        meta={[
          {
            name: "keywords",
            content: "sanity milk, mastite, laboratório, qualidade do leite",
          },
          {
            name: "image",
            content: "https://sanitymilk.com.br/images/al-02.jpg",
          },
        ]}
      />
      <S.Logo src="/images/logo-alvo-leite.png" alt="" />

      <div>
        <S.P>
          O Alvo Leite é um laboratório de exames (cultura de bactérias do
          leite) para descobrir exatamente quais microrganismos estão causando a
          mastite nas vacas e, consequentemente, aumentando a contagem de
          células somáticas (CCS), contagem de bactérias total (CBT), gastos com
          antibióticos, descartes de leite, morte de tetos, descartes de vacas
          doentes e mortalidade de animais.
        </S.P>
        <br />
        <S.P>
          Os produtores que estão do Programa de Qualidade do Leite SanityMilk
          podem enviar suas amostras de leite das vacas doentes de mastite e
          terá o resultado e devidas orientações de tratamento em até 24 horas.
        </S.P>
        <br />
        <S.P>
          Através do suporte online, o produtor do PQLSM pode receber todas as
          orientações do Médico Veterinário de como proceder em cada situação.
        </S.P>
        <br />
        <S.P>
          Para produtores do PQLSM modalidade 5 estrelas, o Médico Veterinário
          pode fazer uma visita diretamente na sua fazenda para:
        </S.P>
        <br />
        <S.P>
          <b>
            &#8226; Identificação dos microrganismos causadores de mastite em
            cada fazenda;
          </b>
          <br />
          <br />
          <b>
            &#8226; Definir os melhores tratamentos para cada vaca de acordo com
            o resultado do exame;
          </b>
          <br />
          <br /> <b>&#8226; Definir estratégia de secagem de vacas;</b>
          <br />
          <br /> <b>&#8226; Definir estratégia de segregação;</b>
          <br />
          <br /> <b>&#8226; Definir estratégia de linha de ordenha;</b>
          <br />
          <br /> <b>&#8226; Definir estratégia de descarte de vacas;</b>
        </S.P>
      </div>

      <S.ImagesContainer>
        <S.ImageBlock>
          <S.Img src="/images/al-01.jpg" alt="" />
          <S.P>Identificação de microrganismos causadores de mastite.</S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/al-02.jpg" alt="" />
          <S.P>Médico veterinário especialista em controle de mastite.</S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/al-03.jpg" alt="" />
          <S.P>
            Laboratório equipado com capacidade para atender todo o Nordeste.
          </S.P>
        </S.ImageBlock>
      </S.ImagesContainer>
    </ServiceLayout>
  )
}
