import React from "react"
import ProductLayout from "../../../../components/productLayout"
import * as S from "./styles"
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
        title="Ordenhadeira Canalizada"
        description="As Ordenhadeiras Canalizadas SANITY MILK são equipamentos
        indicados especialmente para médios e grandes rebanhos leiteiros por se
        tratar de um equipamento que otimize o trabalho de retirada do leite,
        com maior eficiência, praticidade e alto desempenho, facilitando o
        trabalho dos ordenhadores e aumentando o conforto animal."
        meta={[
          {
            name: "keywords",
            content:
              "sanity milk, ordenhadeiras, ordenhadeira canalizada, ordenha canalizada, sistema de ordenha canalizada",
          },
          {
            name: "image",
            content: "https://sanitymilk.com.br/images/service3.jpg",
          },
          {
            property: "og:image",
            content: "https://sanitymilk.com.br/images/service3.jpg",
          },
          {
            property: "twitter:image",
            content: "https://sanitymilk.com.br/images/service3.jpg",
          },
        ]}
      />
      <S.H1>Ordenhadeira Canalizada</S.H1>

      <S.P>
        As Ordenhadeiras Canalizadas <b>SANITY MILK</b> são equipamentos
        indicados especialmente para médios e grandes rebanhos leiteiros por se
        tratar de um equipamento que otimize o trabalho de retirada do leite,
        com maior eficiência, praticidade e alto desempenho, facilitando o
        trabalho dos ordenhadores e aumentando o conforto animal. O leite
        retirado é destinado diretamente ao resfriador ao passo que a lavagem
        posterior do equipamento ocorre de forma “automática”
      </S.P>

      <S.ImagesContainer>
        <S.ImageBlock>
          <S.Img src="/images/canalizada-01.jpg" alt="" />
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/canalizada-02.jpg" alt="" />
        </S.ImageBlock>
        {/* <S.ImageBlock>
          <S.Img src="/images/al-03.jpg" alt="" />
          <S.P>
            Laboratório equipado com capacidade para atender todo o Nordeste.
          </S.P>
        </S.ImageBlock> */}
      </S.ImagesContainer>
      <S.H3>Características:</S.H3>
      <S.P>
        Respaldada sob o lema “Inovação e Confiabilidade”, as ordenhadeiras
        canalizadas SANITY MILK são desenvolvidas com padrões de qualidade
        superior, alocando no seu desenho os melhores componentes e sistema
        disponíveis no mercado mundial. Abaixo alguns desses itens:
      </S.P>
      <br />
      <br />
      <S.P>
        <b>GRUPO DE VÁCUO:</b>
        <br />
        Depósito de segurança aéreo 40L ou 100L em aço inox AISI 304, borda
        flangeada e tampas móveis; Sapata em aço com pés antivibratórios;
        Esticador e protetor de correias; Silencioso com válvula contragolpe;
        Regulador de vácuo servo assistido com capacidade para regular 3500L
        vácuo/ minuto; Lubrificador de óleo individual de nível e sucção;
        Tubulações de vácuo 75mm
      </S.P>
      <br />
      <S.P>
        <b>UNIDADES DE ORDENHA:</b>
        <br />
        Coletor tipo orbiter em inox AISI 304 com tampa em polisulfona; Capas de
        Inox AISI 304 2mm pesadas; Jogo de teteiras Ultraliner; Mangueira do
        leite atóxica 5/8”; Mangueira dupla de pulsação; Mangueira curta de
        vácuo.
      </S.P>
      <br />
      <S.P>
        <b>LINHA DE LEITE E LAVAGEM:</b>
        <br />
        Tubulação de leite em aço inox AISI 304 PI/ PE 51mm ou 63mm; Tubulação
        de lavagem em aço inox AISI 304 PI/ PE 38mm ou 51mm; Sistema de Lavagem
        CIP retrátil ou tipo duchas com bandejas.
      </S.P>
      <br />
      <S.P>
        <b>TRANSFERÊNCIA DO LEITE:</b>
        <br />
        Mangueira Atóxica Espiral de 1.1/4”; Bomba de transferência fabricada em
        aço inox AISI 304 3/4CV ou 1CV; Filtro leite em Inox AISI 304 com
        portinhola para filtro.
      </S.P>
      <br />
      <S.P>
        <b>UNIDADE FINAL:</b>
        <br />
        Unidade final em aço inox AISI 304, com capacidades de 55, 75 e 110
        litros PI/ PE; Aerador 12L; Sistema de retrolavagem com drenagem para
        unidade final e aerador; Quadro de comando; Sistema eletromagnético do
        nível para acionamento da bomba de transferência do leite; Base de
        suportação em aço 5mm para todos os componentes com pintura epóxi.
      </S.P>
      <br />
      <S.P>
        <b>ACESSÓRIOS DIVERSOS (OPCIONAIS):</b>
        <br />
        Poderão ser adquiridos junto com equipamento canalizado alguns
        periféricos de forma opcional ao produtor:
        <li>Programador de Limpeza;</li>
        <li>Boiller térmico de várias capacidades;</li>
        <li>Contenções de diversos modelos;</li>
        <li>Resfriadores de Leite entre outros.</li>
      </S.P>
    </ProductLayout>
  )
}
