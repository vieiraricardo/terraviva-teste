import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Card from "../../components/card"
import Button from "../../components/button"
import * as S from "./styles"
import SEO from "../../components/seo"

export default function Services({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  return (
    <Layout pathData={{ location, crumbs }}>
      <SEO title="Serviços" />
      <S.Container>
        <div
          style={{ maxWidth: 800, alignSelf: "flex-start", padding: "0 20px" }}
        >
          <S.Divider />
          <S.H2>Serviços Exclusivos</S.H2>
          <br />
          <S.P>
            Cada produtor tem sua realidade, suas necessidades e desafios. A
            SANITY MILK identifica esses pontos juntamente com o produtor e
            fornece consultoria, treinamentos e serviços personalizados em:
          </S.P>
          <S.P>
            <b>&#8226;</b> Manutenção de ordenhadeiras;
          </S.P>
          <S.P>
            <b>&#8226;</b> Escolha e dimensionamento do equipamento ideal para a
            sua realidade;
          </S.P>
          <S.P>
            <b>&#8226;</b> Definição do modelo de sala de ordenha que melhor se
            adeque a realidade atual e futura;
          </S.P>
          <S.P>
            <b>&#8226;</b> Implantação de rotinas de ordenha que garantem
            qualidade do leite;
          </S.P>
          <S.P>
            <b>&#8226;</b> Controle de mastite;
          </S.P>
          <S.P>
            <b>&#8226;</b> Capacitação da mão de obra da fazenda;
          </S.P>
          <S.P>
            <b>&#8226;</b> Identificação de microrganismos causadores de
            mastite;
          </S.P>
          <S.P>
            <b>&#8226;</b> Etc.
          </S.P>
          <S.P>
            Cada propriedade tem suas particularidades, por isso essas
            consultorias, serviços e treinamentos são definidos em alinhamento
            com a necessidade de cada fazenda.
          </S.P>
          <S.P>
            <b>
              <a href="https://bit.ly/3e4VUBa" target="_blank" rel="noreferrer">
                Ligue e solicite o seu serviço!
              </a>
            </b>
          </S.P>
        </div>
        <S.Cards>
          <Card
            img="/images/service3.jpg"
            link="/servicos/programa-qualidade-do-leite"
          >
            <Link to="/servicos/programa-qualidade-do-leite">
              <S.H1 size={"28px"} color="#222931">
                PROGRAMA QUALIDADE DO LEITE
              </S.H1>
              <S.Divider />
              <Button
                icon="chevron-right"
                iconr
                text="saiba mais"
                url="/servicos/programa-qualidade-do-leite"
              />
            </Link>
          </Card>
          <Card img="/images/manutencao-03.jpg" link="/servicos/manutencao">
            <Link to="/servicos/manutencao">
              <S.H1 size={"28px"} color="#222931">
                MANUTENÇÃO
              </S.H1>
              <S.Divider />
              <Button
                icon="chevron-right"
                iconr
                text="saiba mais"
                url="/servicos/manutencao"
              />
            </Link>
          </Card>
          <Card
            img="/images/service1.jpg"
            link="/servicos/laboratorio-alvo-leite"
          >
            <Link to="/servicos/laboratorio-alvo-leite">
              <S.H1 size={"28px"} color="#222931">
                LABORATÓRIO ALVO LEITE
              </S.H1>
              <S.Divider />
              <Button
                icon="chevron-right"
                iconr
                text="saiba mais"
                url="/servicos/laboratorio-alvo-leite"
              />
            </Link>
          </Card>
        </S.Cards>
      </S.Container>
    </Layout>
  )
}
