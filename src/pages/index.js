import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import * as S from './styles';

export default function Home({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  return (
    <Layout pathData={{ location, crumbs }}>
      <SEO
        title="Terra Viva Mais"
        description="A SANITY MILK ajuda os produtores nos desafios de produzir leite com qualidade,
          preservar a saúde do úbere das vacas e ter eficiência nos custos de mão de obra para
          ordenhar. Somos a primeira fábrica nordestina de equipamentos de ordenha e produtos
          de higiene. Nossos produtos reúnem a robustez nordestina aliada às inovações
          tecnológicas mundiais."
        meta={[
          {
            name: 'keywords',
            content:
              'sanity milk, ordenhadeiras, ordenhadeira móvel, ordenhadeira de carrinho, ordenha de carrinho,  ordenha móvel, ordenhadeira balde ao pé, ordenha balde ao pé, ordenhadeira canalizada, ordenha canalizada, lavar ordenha, lavar ordenhadeira, produtos, higiene, sanitizantes ordenha, ácido, pré dipping, pós dipping, pos dip, pre dip ',
          },
          {
            name: 'image',
            content: 'https://terravivamais.com.br/images.logo.png',
          },
        ]}
      />
      <div style={{ height: '100px' }} />

      <S.Hero url="/images/banner1.png">
        <S.HeroContent>
          <S.BlockContainer>
            <S.H1 color="#fff" style={{ marginBottom: 20 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </S.H1>
            <S.P color="#fff">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              dicta nisi, autem architecto provident vero odit dolore,
              repellendus enim quis et dolorem ullam ratione sed reprehenderit
              sequi, magnam fuga? Possimus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ducimus dicta nisi, autem architecto
              provident vero odit dolore, repellendus enim quis et dolorem ullam
              ratione sed reprehenderit sequi, magnam fuga? Possimus.
            </S.P>
          </S.BlockContainer>
        </S.HeroContent>
      </S.Hero>

      <S.ServicesContainer pad="30px 0">
        <S.CenteredContainer pad="60px 0">
          <img src="/images/Group 16.png" width="450px" alt="" />
          <S.ServiceContent>
            <S.H2 color="#F18725">
              Lorem ipsum dolor sit, amet consectetur elit.
            </S.H2>
            <S.P style={{ marginTop: 20, marginBottom: 30 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              dicta nisi, autem architecto provident vero odit dolore,
              repellendus enim quis et dolorem ullam ratione sed reprehenderit
              sequi, magnam fuga? Possimus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ducimus dicta nisi, autem architecto
              provident vero odit dolore, repellendus enim quis et dolorem ullam
              ratione sed reprehenderit sequi, magnam fuga? Possimus.
            </S.P>
            <S.KnowMoreButton>Saiba Mais</S.KnowMoreButton>
          </S.ServiceContent>
        </S.CenteredContainer>
      </S.ServicesContainer>

      <S.PartnerContainer>
        <S.BlockContainer row>
          <S.BlockContainer width={350}>
            <S.H2 color="#F18725">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </S.H2>
            <S.P>
              orem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              dicta nisi
            </S.P>
          </S.BlockContainer>
          <S.BlockContainer
            row
            style={{ justifyContent: 'space-around', alignItems: 'center' }}
          >
            <img
              src="/images/logo_sanitymilk.png"
              alt="logo sanity milk"
              height="100"
            />
            <img src="/images/logo_trouw.png" alt="logo trouw" height="60" />
            <img src="/images/logo_crvlagoa.png" alt="logo crv lagoa" />
          </S.BlockContainer>
        </S.BlockContainer>
      </S.PartnerContainer>

      <S.ServicesContainer>
        <S.BlockContainer style={{paddingBottom: 100}}>
        <S.H2 color="#fe7d0b">Nossos Produtos</S.H2>
        <S.Divider width={50}/>
        <S.P style={{margin: 0}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          aliquam ab ducimus sint quod expedita cum iste maxime beatae atque
          accusantium perferendis! Est vero nam error earum quas.
          Alias, dolores.
        </S.P>
        <S.CenteredContainer>
          <S.Card>
            <div className="image-container">
              <img src="/images/product3.jpg" alt=""/>
            </div>
           <div>
              <S.H1 hover="#fe7d0b" size="28px" color="#222931">
                ORDENHADEIRAS
              </S.H1>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias voluptatibus quod repudiandae ex et modi facere,
                dolorem tempore esse. Dolor cupiditate error pariatur velit
                nulla voluptates asperiores dignissimos tempora labore.
              </S.P>
           </div>
          </S.Card>
          <S.Card>
            <div className="image-container">
              <img src="/images/product3.jpg" alt=""/>
            </div>
           <div>
              <S.H1 hover="#fe7d0b" size="28px" color="#222931">
                ORDENHADEIRAS
              </S.H1>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias voluptatibus quod repudiandae ex et modi facere,
                dolorem tempore esse. Dolor cupiditate error pariatur velit
                nulla voluptates asperiores dignissimos tempora labore.
              </S.P>
           </div>
          </S.Card>
          <S.Card>
            <div className="image-container">
              <img src="/images/product3.jpg" alt=""/>
            </div>
           <div>
              <S.H1 hover="#fe7d0b" size="28px" color="#222931">
                ORDENHADEIRAS
              </S.H1>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias voluptatibus quod repudiandae ex et modi facere,
                dolorem tempore esse. Dolor cupiditate error pariatur velit
                nulla voluptates asperiores dignissimos tempora labore.
              </S.P>
           </div>
          </S.Card>
          <S.Card>
            <div className="image-container">
              <img src="/images/product3.jpg" alt=""/>
            </div>
           <div>
              <S.H1 hover="#fe7d0b" size="28px" color="#222931">
                ORDENHADEIRAS
              </S.H1>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias voluptatibus quod repudiandae ex et modi facere,
                dolorem tempore esse. Dolor cupiditate error pariatur velit
                nulla voluptates asperiores dignissimos tempora labore.
              </S.P>
           </div>
          </S.Card>
        </S.CenteredContainer>
        </S.BlockContainer>
      </S.ServicesContainer>
    </Layout>
  );
}
