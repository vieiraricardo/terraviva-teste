import React from "react"
import Helmet from "react-helmet"
import Header from "../header"
import Footer from "../footer"
import Button from "../../components/button"
import BreadCrumb from "../../components/breadcrumb"
import Icon from "../../components/icons"

import * as S from "./styles"

export default function ServiceLayout({ children, pathData }) {
  const { location, crumbs } = pathData

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/css/global.css" />
      </Helmet>
      <Header />
      {location.pathname !== "/" && <BreadCrumb crumbs={crumbs} />}

      <S.Container>
        <S.Sidebar>
          <S.LinkItem
            to="/servicos/programa-qualidade-do-leite"
            activeStyle={{ background: "#3b3d42", color: "#FFF" }}
          >
            Programa qualidade do leite
          </S.LinkItem>
          <S.LinkItem
            to="/servicos/manutencao"
            activeStyle={{ background: "#3b3d42", color: "#FFF" }}
          >
            Manutenção
          </S.LinkItem>
          <S.LinkItem
            to="/servicos/laboratorio-alvo-leite"
            activeStyle={{ background: "#3b3d42", color: "#FFF" }}
          >
            Laboratório Alvo Leite
          </S.LinkItem>
          <S.CallToContact>
            <S.H2>Tem alguma pergunta?</S.H2>
            <S.P>Envie sua dúvida online ou agende uma visita.</S.P>
            <Button
              text="contate nos"
              icon={["far", "envelope"]}
              url="/contato"
              bg="#FFF"
              color="#000"
            />
          </S.CallToContact>
          <S.H2 color="#000">Expediente</S.H2>
          <S.Divider />
          <S.P color="#5f656d" mb="20px">
            Nosso suporte esta disponivel para ajudar voce todos os dias da
            semana de segunda a sabado.
          </S.P>
          <S.WtContainer>
            <S.WrapIcon>
              <Icon name={["far", "clock"]} color="#fe7d0b" />
            </S.WrapIcon>
            <S.P color="#5f656d">Seg–Sex: 08:00–18:00</S.P>
          </S.WtContainer>
          <S.WtContainer>
            <S.WrapIcon>
              <Icon name={["far", "clock"]} color="#fe7d0b" />
            </S.WrapIcon>
            <S.P color="#5f656d">Sab: 08:00–14:00</S.P>
          </S.WtContainer>
          <S.WtContainer>
            <S.WrapIcon>
              <Icon name={["far", "clock"]} color="#fe7d0b" />
            </S.WrapIcon>
            <S.P color="#5f656d">Dom: Fechado</S.P>
          </S.WtContainer>
        </S.Sidebar>
        <S.MainContent>{children}</S.MainContent>
      </S.Container>
      <Footer />
    </>
  )
}
