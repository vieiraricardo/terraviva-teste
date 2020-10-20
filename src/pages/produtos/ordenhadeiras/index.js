import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../../components/layout';
import Card from '../../../components/card';
import * as S from './styles';
import SEO from '../../../components/seo';

export default function Products() {
  return (
    <Layout>
      <SEO title="Serviços" />
      <S.Container>
        <div
          style={{ maxWidth: 800, alignSelf: 'flex-start', padding: '0 20px' }}
        >
          <S.Divider />
          <S.H2>Nossos Produtos</S.H2>
          <br />
          <S.P>
            A SANITY MILK oferece aos seus clientes e parceiros o que há de
            melhor nesse mercado MUNDIAL de ordenhadeiras e qualidade do leite e
            garantem isso de maneira incomparável.
          </S.P>
          <S.P>
            Os equipamentos da SANITY MILKgarantem, no mínimo, 2 vezes mais
            qualidade, segurança e tranquilidade para o produtor.
          </S.P>
          <S.P>
            A SANITY MILK reúne conhecimentos das tecnologias de ordenha,
            higiene e prevenção de mastites predominantes no Brasil
            (principalmente região Sul, Norte e Nordeste) e internacionais
            (principalmente Israel e Itália).
          </S.P>
          <S.P>
            Além disso, contamos com uma vasta linha de peças para qualquer
            marca de ordenhadeiras do mercado.
          </S.P>
          <S.P>
            <b>
              <a href="https://bit.ly/3e4VUBa" target="_blank" rel="noreferrer">
                Ligue e solicite o seu produto!
              </a>
            </b>
          </S.P>
        </div>
        <S.Cards>
          <Card
            img="/images/product2.jpg"
            link="/ordenhadeiras/ordenhadeira-balde-ao-pe"
          >
            <Link to="/ordenhadeiras/ordenhadeira-balde-ao-pe">
              <S.H1 size="28px" color="#222931">
                ORDENHADEIRA BALDE AO PÉ
              </S.H1>
              <S.Divider />
            </Link>
          </Card>
          <Card
            img="/images/product6.jpg"
            link="/ordenhadeiras/ordenhadeira-movel"
          >
            <Link to="/ordenhadeiras/ordenhadeira-movel">
              <S.H1 size="28px" color="#222931">
                ORDENHADEIRA MÓVEL
              </S.H1>
              <S.Divider />
            </Link>
          </Card>
          <Card
            img="/images/product3.jpg"
            link="/ordenhadeiras/ordenhadeira-canalizada"
          >
            <Link to="/ordenhadeiras/ordenhadeira-canalizada">
              <S.H1 size="28px" color="#222931">
                ORDENHADEIRA CANALIZADA
              </S.H1>
              <S.Divider />
            </Link>
          </Card>
          <Card
            img="/images/product1.jpg"
            link="/ordenhadeiras/produtos-de-higiene"
          >
            <Link to="/ordenhadeiras/produtos-de-higiene">
              <S.H1 size="28px" color="#222931">
                HIGIENIZAÇÃO
              </S.H1>
              <S.Divider />
            </Link>
          </Card>
          <Card
            img="/images/product7.jpg"
            link="/ordenhadeiras/sistemas-de-medicao-eletronica"
          >
            <Link to="/ordenhadeiras/sistema-inteligente-de-ordenha">
              <S.H1 size="28px" color="#222931">
                SISTEMA INTELIGENTE DE ORDENHA
              </S.H1>
              <S.Divider />
            </Link>
          </Card>
          <Card
            img="/images/product8.jpg"
            link="/ordenhadeiras/pecas-e-acessorios"
          >
            <Link to="/ordenhadeiras/pecas-e-acessorios">
              <S.H1 size="28px" color="#222931">
                PEÇAS E ACESSÓRIOS
              </S.H1>
              <S.Divider />
            </Link>
          </Card>
        </S.Cards>
      </S.Container>
    </Layout>
  );
}
