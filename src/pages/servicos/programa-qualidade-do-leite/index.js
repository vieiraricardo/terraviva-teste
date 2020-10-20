import React from "react";

import ServiceLayout from "../../../components/serviceLayout";
import * as S from "./styles";
import SEO from "../../../components/seo";

export default function Services({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  return (
    <ServiceLayout pathData={{ location, crumbs }}>
      <SEO
        title="Programa de qualidade do leite Sanity Milk"
        description="O Programa de Qualidade do Leite da SANITY MILK (PSMQL) ajuda os
        produtores a produzir leite de qualidade e preservar a saúde do úbere
        dos animais."
        meta={[
          {
            name: "keywords",
            content:
              "sanity milk, ordenhadeiras, qualidade do leite, produtor de leite, higiene de ordenha, melhorar qualidade do leite, fazenda",
          },
          {
            name: "image",
            content: "https://sanitymilk.com.br/images/service3.jpg",
          },
        ]}
      />
      <S.H1>Programa de Qualidade do Leite Sanity Milk</S.H1>
      <S.P>
        O Programa de Qualidade do Leite da SANITY MILK (PSMQL) ajuda os
        produtores a produzir leite de qualidade e preservar a saúde do úbere
        dos animais.
      </S.P>
      <br />
      <S.P>
        Os produtores do PSMQL recebem <b>cheque-up gratuitos</b> nas
        ordenhadeiras a cada 3 meses identificando os pontos críticos de
        higiene, regulagem e funcionamento adequado da ordenhadeira.
      </S.P>
      <br />
      <S.P>
        As peças desgastadas são trocadas preventivamente evitando paradas,
        falhas de funcionamento, comprometimento da qualidade do leite ou
        transmissão de doenças.
      </S.P>
      <br />
      <S.P>
        Todos os produtos de higiene de ordenha e prevenção de mastite chegam em
        suas fazendas sem nenhuma despesa adicional de entrega. E os pagamentos
        dos produtos ocorrem sempre no final de cada mês pagando somente o que
        foi utilizado nesse período.
      </S.P>
      <br />
      <S.P>
        As fazendas do PSMQL recebem treinamentos a cada 3 meses na fazenda e
        consultoria gratuita do médico veterinário especializada em controle da
        qualidade do leite e mastite.
      </S.P>
      <br />
      <S.P>
        A <b>SANITY MILK</b> possui um laboratório (<b>ALVO LEITE</b>) equipado
        para atender todos os produtores de leite do Nordeste que desejarem
        identificar qual microrganismo está causando a mastite das vacas de sua
        fazenda e ajudar no controle da CCS – Contagem de Células Somáticas.
      </S.P>
      <br />
      <S.P>
        Existem 3 planos de atendimento{" "}
        <b>no Programa de Qualidade do Leite da SANITY MILK</b>, conforme podem
        ver abaixo.
      </S.P>
      <br />
      <S.P>
        As particularidades de cada região são discutidas individualmente entre
        o produtor e o técnico de sua região.
      </S.P>
      <br />
      <S.P>
        <b>
          <a href="https://bit.ly/3e4VUBa" target="_blank" rel="noreferrer">
            Ligue e solicite seu atendimento com os técnicos de sua região.
          </a>
        </b>
      </S.P>
      <S.ImagesContainer>
        <S.ImageBlock>
          <S.Img src="/images/al-01.jpg" alt="" /> <br />
          <S.P>Identificação de microrganismos causadores de mastite.</S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/al-02.jpg" alt="" />
          <br />
          <S.P>Médico veterinário especialista em controle de mastite.</S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/al-03.jpg" alt="" />
          <br />
          <S.P>
            Laboratório equipado com capacidade para atender todo o Nordeste.
          </S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/Treinamentos.jpg" alt="" />
          <br />
          <S.P>Treinamentos de qualificação da mão de obra da fazenda.</S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/Procedimentos de Limpeza.jpg" alt="" />
          <br />
          <S.P>Procedimentos Operacionais Padrão para qualidade do leite.</S.P>
        </S.ImageBlock>
        <S.ImageBlock>
          <S.Img src="/images/manutencao-01.jpg" alt="" />
          <br />
          <S.P>Check-up periódico de todos os componentes da ordenhadeira.</S.P>
        </S.ImageBlock>
      </S.ImagesContainer>
      <S.Table>
        <S.H1 color="#5f656d">Planos</S.H1>
        <S.TableRow>
          <S.Row bg="#FFF"></S.Row>
          <S.Row bg="#cae676" br="5px">
            <S.H3 color="#FFF">3 estrelas</S.H3>
          </S.Row>

          <S.Row bg="#9fc5e2" br="5px">
            <S.H3 color="#FFF">4 estrelas</S.H3>
          </S.Row>

          <S.Row bg="#ef872b" br="5px">
            <S.H3 color="#FFF">5 estrelas</S.H3>
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#FFF"></S.Row>
          <S.Row bg="#cae676">
            <S.Img src="/images/selo-3-stars.png" alt="" />
          </S.Row>

          <S.Row bg="#9fc5e2">
            <S.Img src="/images/selo-4-stars.png" alt="" />
          </S.Row>

          <S.Row bg="#ef872b">
            <S.Img src="/images/selo-5-stars.png" alt="" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#ececec">
            <S.P>
              <b>
                Entrega dos produtos de higiene de ordenha diretamente na
                fazenda
              </b>
              <br />
              Sanity Alcalino, Sanity Ácido, Sanity Sanitizante, Sanity Pré,
              Sanity Pós, Sanity Lub, filtros de leite e papel toalha.
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#fff">
            <S.P>
              <b>Visita gratuita do assistente técnico, a cada 3 meses</b>
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#ececec">
            <S.P>
              <b>Regulagem, limpeza e calibração gratuita</b>
              <br /> - Pulsadores
              <br /> - Regulador de vácuo
              <br /> - Vacuômetro
              <br /> - Correias
              <br /> - Lubrificadores
              <br /> - Painéis eletrônicos
              <br /> - Boias de nível magnético
              <br /> - Coletores de leite
              <br /> - Tubulação de vácuo
              <br /> - Tubulação de leite
              <br /> - Pontos críticos de higiene
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#fff">
            <S.P>
              <b>Inspeção de qualidade de higiene dos equipamentos</b>
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#ececec">
            <S.P>
              <b>Treinamento de mão de obra para higiene de ordenha</b>
              <br />- Prevenção de mastite
              <br /> - Tratamentos de mastite
              <br /> - CBT
              <br /> - CCS
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#fff">
            <S.P>
              <b>Laboratório Alvo Leite</b>
              <br />
              Exames de cultura de bactéria do leite.
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#ececec">
            <S.P>
              <b>Suporte online 24 horas</b>
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#FFF">
            <S.P>
              <b>Manutenção Preventiva Programada</b>
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Negativo.png" alt="" width="25" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#ececec">
            <S.P>
              <b>Laboratório Alvo Leite</b>
              <br />
              50% de desconto nos custos de exames de cultura de bactéria do
              leite.
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Negativo.png" alt="" width="25" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Negativo.png" alt="" width="25" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>

        <S.TableRow>
          <S.Row bg="#FFF">
            <S.P>
              <b>Consultoria em Controle de Mastite na Fazenda</b>
              <br />
              Personalizada para as necessidades de cada fazenda.
              <br />
              - Identificação dos microrganismos causadores de mastite em cada
              fazenda
              <br />- Definir os melhores tratamentos para cada vaca de acordo
              com o resultado do exame - Definir estratégia de secagem de vacas
              <br />
              - Definir estratégia de segregação
              <br /> - Definir estratégia de linha de ordenha
              <br /> - Definir estratégia de descarte de vacas
              <br /> - Etc.
            </S.P>
          </S.Row>
          <S.Row bg="#cae676">
            <img src="/images/Negativo.png" alt="" width="25" />
          </S.Row>
          <S.Row bg="#9fc5e2">
            <img src="/images/Negativo.png" alt="" width="25" />
          </S.Row>
          <S.Row bg="#ef872b">
            <img src="/images/Positivo..png" alt="" width="30" />
          </S.Row>
        </S.TableRow>
      </S.Table>
    </ServiceLayout>
  );
}
