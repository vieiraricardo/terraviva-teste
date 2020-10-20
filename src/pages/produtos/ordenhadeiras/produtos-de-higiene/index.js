import React from "react"

import ProductLayout from "../../../../components/productLayout"
import * as S from "./styles"
// import Carousel from "../../../components/carousel"
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
        title="Produtos de Higiene"
        description="Os produtos SANITY MILK, desenvolvidos após anos de pesquisas e testes
        laboratoriais e a campo, são especificamente designados à Higienização
        de Sistemas de Ordenha e Saúde Animal (pré e pós dipping),
        comercializados em embalagens de 5L e 20L."
        meta={[
          {
            name: "keywords",
            content: "sanity milk, mastite, pré dipping, pós dipping",
          },
          {
            name: "image",
            content: "https://sanitymilk.com.br/images/Alcalino.jpg",
          },
          {
            property: "og:image",
            content: "https://sanitymilk.com.br/images/Alcalino.jpg",
          },
          {
            property: "twitter:image",
            content: "https://sanitymilk.com.br/images/Alcalino.jpg",
          },
        ]}
      />
      <S.H1>Produtos de Higiene</S.H1>

      <S.P>
        Os produtos SANITY MILK, desenvolvidos após anos de pesquisas e testes
        laboratoriais e a campo, são especificamente designados à Higienização
        de Sistemas de Ordenha e Saúde Animal (pré e pós dipping),
        comercializados em embalagens de 5L e 20L. Com formulações exclusivas e
        princípios ativos seguros, podemos oferecer ao produtor de leite um
        produto diferenciado, de superior qualidade e alto valor agregado,
        aumentando em muito seu custo x benefício, colaborando com o resultado
        do produtor. São eles:
      </S.P>

      <S.Column>
        <S.H3>Sanity Alcalino</S.H3>
        <S.ProductItem>
          <S.ProductImage src="/images/Alcalino.jpg" />
          <S.P>
            Detergente alcalino clorado de alta concentração que age diretamente
            em depósitos orgânicos e gordurosos removendo e higienizando
            equipamentos de ordenha, resfriadores de leite, utensílios e
            laticínios em geral. Com formulação robusta associada a
            coadjuvantes, potencializa o poder sanitizante do produto,
            especialmente quando diluído em proporções recomendadas e água morna
            (75ºC).
          </S.P>
        </S.ProductItem>
      </S.Column>
      <S.Column>
        <S.H3>Sanity Ácido</S.H3>
        <S.ProductItem>
          <S.ProductImage src="/images/acido.jpg" />
          <div>
            <S.P>
              Detergente ácido concentrado que ajuda a remover as incrustações
              deixadas pelos minerais (cálcio) encontrados no leite. Seu poder
              desincrustante remove as mais profundas sujidades sem agredir os
              componentes do equipamento. À base de ácidos fortes, o Sanity
              Ácido responde muito bem quando o assunto é higienização de
              equipamentos e utensílios impregnados de sujidades como minerais e
              demais incrustações de difícil remoção.
            </S.P>
          </div>
        </S.ProductItem>
      </S.Column>
      <S.Column>
        <S.H3>Sanity Pré</S.H3>
        <S.ProductItem>
          <S.ProductImage src="/images/pre.jpg" />
          <S.P>
            Produto pré dipping especialmente desenvolvido para limpeza e
            higienização dos tetos das vacas antes da ordenha. Sua formulação
            deve ser administrada em aplicador específico, formando uma espuma
            densa e duradoura o que proporcionará uma limpeza eficiente, além do
            condicionamento do teto da vaca. Traz em sua formulação um blend de
            tensoativos, aliado ao ácido lático, que atuam na eliminação de
            agentes patógenos, frequentemente encontrados nos tetos dos animais.
            A glicerina adicionada a fórmula, condiciona os tetos dos animais
            pela sua função emoliente e umectante, proporcionando tetos mais
            macios e saudáveis.
          </S.P>
        </S.ProductItem>
      </S.Column>
      <S.Column>
        <S.H3>Sanity Pós Ácido Lático</S.H3>
        <S.ProductItem>
          <S.ProductImage src="/images/pos.jpg" />
          <S.P>
            Sanity Pós Ácido Lático é aplicado no teto da vaca logo após a
            ordenha, de forma a imergir o teto por completo, formando uma
            “película” protetora, evitando através dessa barreira física criada,
            a penetração através do esfíncter, de microrganismos nocivos à saúde
            do úbere da vaca. Além disso, possui em sua formulação elementos
            emolientes e tensoativos, que ajudam no condicionamento dos tetos
            evitando ressecamentos, rachaduras e demais hematomas ocasionados na
            ordenha ou no trato dos animais no dia a dia.
          </S.P>
        </S.ProductItem>
      </S.Column>
      <S.Column>
        <S.H3>Sanity Neutro</S.H3>
        <S.ProductItem>
          <S.ProductImage src="/images/Neutro.jpg" />
          <S.P>
            Detergente neutro espumante recomendado para lavagens externas em
            estábulos, áreas de manipulação de alimentos, ordenhadeiras,
            resfriadores, utensílios em geral, entre outros. Grande poder de
            remoção de gorduras e sujidades, em virtude de sua formulação a base
            de tensoativos com alto poder espumante e higienizador.
          </S.P>
        </S.ProductItem>
      </S.Column>
      <S.Column>
        <S.H3>Sanity Sanitizante</S.H3>
        <S.ProductItem>
          <S.ProductImage src="/images/Ecotrex.jpg" />
          <S.P>
            Com fórmula concentrada e exclusiva, o Sanity Sanitizante é um
            produto que garante uma sanitização efetiva do seu equipamento de
            ordenha, resfriador e utensílios em geral de forma a reduzir
            drasticamente a contaminação do leite, seja por fungos, bactérias ou
            outros patógenos que possam estar presentes no momento da ordenha.
            Realizar um enxague da ordenhadeira logo antes do início da ordenha
            (30 minutos) garante que o leite não será contaminado de forma
            indesejada no processo. Sanitizar logo após a lavagem da
            ordenhadeira pode ajudar a limpar sujidades que porventura não
            tenham sido totalmente removidas na lavagem convencional da mesma. O
            mesmo processo se aplica para limpezas de resfriadores de leite,
            utensílios e instalações que possuem um alto desafio sanitário.
          </S.P>
        </S.ProductItem>
      </S.Column>
    </ProductLayout>
  )
}
