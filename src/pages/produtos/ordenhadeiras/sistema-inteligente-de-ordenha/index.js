import React from 'react';

import ProductLayout from '../../../../components/productLayout';
import Carousel from '../../../../components/carousel';
import * as S from './styles';
import SEO from '../../../../components/seo';

export default function Product({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  return (
    <ProductLayout pathData={{ location, crumbs }}>
      <SEO
        title="Sistemas de medição eletrônica"
        description="Sistemas modulares que proporcionam confiabilidade, alto desempenho,
        excepcional facilidade de uso e baixa manutenção."
        meta={[
          {
            name: 'keywords',
            content: 'sanity milk, sistema, inteligente, ordenha, ffs30, scr',
          },
          {
            name: 'image',
            content: 'https://sanitymilk.com.br/images/df1.jpg',
          },
          {
            property: 'og:image',
            content: 'https://sanitymilk.com.br/images/df1.jpg',
          },
          {
            property: 'twitter:image',
            content: 'https://sanitymilk.com.br/images/df1.jpg',
          },
        ]}
      >
        <link rel="stylesheet" href="/css/flickity.min.css" />
      </SEO>
      <S.H1>Sistemas de Ordenha Sanity Milk - SCR​</S.H1>
      <S.H2 style={{ textAlign: 'justify' }}>
        Sistemas modulares que proporcionam confiabilidade, alto desempenho,
        excepcional facilidade de uso e baixa manutenção.
      </S.H2>

      <S.Block>
        <div style={{ marginRight: '20px' }}>
          <S.H4>
            Dados precisos de produção de leite, com o sensor de leite SCR FFS30
          </S.H4>
          <S.UL>
            <S.LI>
              Obtenha dados precisos sobre a produção de leite e melhore a
              eficiência da ordenha, preservando o conforto da vaca
            </S.LI>
            <S.LI>
              Controle avançado da ordenha quej otimiza o tempo de ordenha,
              enquanto protege o bem-estar das vacas
            </S.LI>
            <S.LI>
              O sistema inteligente de pulsação promove a remoção do conjunto de
              ordenha no momento ideal.
            </S.LI>
          </S.UL>
          <S.H4>Cresça com um sistema modular, confiável e fácil de usar</S.H4>
          <S.UL>
            <S.LI>
              Sistema de ordenha modular que pode crescer com suas necessidades
            </S.LI>
            <S.LI>Configuração fácil e flexível e um botão de operação</S.LI>
            <S.LI>Ordenha confiável com pouca manutenção</S.LI>
          </S.UL>
        </div>
        <S.Gallery>
          <Carousel
            height="300px"
            flickityRef={(c) => {
              window.flkty = c;
            }}
            options={{
              cellAlign: 'left',
              contain: true,
              pageDots: false,
              autoPlay: 3000,
              lazyLoad: true,
            }}
          >
            <S.Img src="/images/image--001.png" alt="" />
            <S.Img src="/images/image--002.png" alt="" />
            <S.Img src="/images/image--003.png" alt="" />
          </Carousel>
        </S.Gallery>
      </S.Block>

      <S.H2>SM 700 Metter – Principais benefícios</S.H2>
      <S.Block>
        <img src="/images/sm700.png" alt="" />
        <S.UL>
          <S.LI>Medição de Leite</S.LI>
          <S.LI>Precisão (máximo 3% de erro)​</S.LI>
          <S.LI>Melhor qualidade de leite / mastite / CCS​</S.LI>
          <S.LI>Pulsação eletronica invididual​</S.LI>
          <S.LI>
            Ordenha completa e sem sobre ordenha (Puls. Inteligente)​​
          </S.LI>
          <S.LI>Facil limpeza (FFS30)​</S.LI>
          <S.LI>Aumento na velocidade de ordenha (ATÉ 15%)​</S.LI>
          <S.LI>Facilidade de Uso</S.LI>
          <S.LI>Funcionamento simples – 1 botão​​</S.LI>
          <S.LI>Alertas de fim de ordenha e queda de teteira​</S.LI>
          <S.LI>Baixa Manutenção</S.LI>
        </S.UL>
      </S.Block>

      <S.H2>SM 200 – Principais benefícios​</S.H2>
      <S.Block>
        <S.UL>
          <S.LI>Os mesmos do SM 700 + EXTRAÇÃO AUTOMÁTICA DE CONJUNTOS​</S.LI>
          <S.LI>Precisão (máximo 3% de erro)​</S.LI>
          <S.LI>Melhor qualidade de leite / mastite / CCS​​</S.LI>
          <S.LI>Pulsação eletronica invididual​​</S.LI>
          <S.LI>Ordenha completa e sem sobre ordenha (Puls. Inteligente)​</S.LI>
          <S.LI>Facil limpeza (FFS30)​​​</S.LI>
          <S.LI>Aumento na velocidade de ordenha (ATÉ 15%)​​​​</S.LI>
          <S.LI>Facilidade de Uso​​​​​</S.LI>
          <S.LI>Funcionamento simples – 1 botão​</S.LI>
          <S.LI>Alertas de fim de ordenha e queda de teteira​</S.LI>
          <S.LI>
            Redução de mão de obra (normalmente 1 pessoa a menos no fosso)​
          </S.LI>
          <S.LI>Eliminação de sobre ordenha​</S.LI>
          <S.LI>Melhor condição de trabalho​</S.LI>
        </S.UL>

        <img src="/images/sm200.png" alt="" height="300px" />
      </S.Block>

      <S.H2>Data Flow</S.H2>
      <S.P>
        Sistema de Gerenciamento completo para fazendas leiteiras (controle
        leiteiro, ​ identificação de cios, sanidade do rebanho, acompanhamento
        reprodutivo, etc)​
      </S.P>
      <S.Block direction="column">
        <div>
          <img src="/images/df1.jpg" alt="" width="400" />
          <img src="/images/df2.jpg" alt="" width="400" />
        </div>
      </S.Block>
    </ProductLayout>
  );
}
