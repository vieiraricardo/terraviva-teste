import React from "react"

import Header from "../header"
import Footer from "../footer"
import Button from "../../components/button"
import BreadCrumb from "../../components/breadcrumb"
import Icon from "../../components/icons"
import Helmet from "react-helmet"

import * as S from "./styles"

export default function ProductLayout({ children, pathData }) {
  const { location, crumbs } = pathData

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/css/global.css" />
      </Helmet>
      <Header />

      {location.pathname !== "/" && <BreadCrumb crumbs={crumbs} />}

      <S.Container>
        <S.Sidebar className="sidebar">
          <div>
            <S.LinkItem
              to="/produtos/ordenhadeiras/ordenhadeira-canalizada"
              activeStyle={{ background: "#3b3d42", color: "#FFF" }}
            >
              Ordenhadeira canalizadas
            </S.LinkItem>
            <S.LinkItem
              to="/produtos/ordenhadeiras/ordenhadeira-balde-ao-pe"
              activeStyle={{ background: "#3b3d42", color: "#FFF" }}
            >
              Ordenhadeira balde ao Pé
            </S.LinkItem>
            <S.LinkItem
              to="/produtos/ordenhadeiras/ordenhadeira-movel"
              activeStyle={{ background: "#3b3d42", color: "#FFF" }}
            >
              Ordenhadeira movel
            </S.LinkItem>
            <S.LinkItem
              to="/produtos/ordenhadeiras/produtos-de-higiene"
              activeStyle={{ background: "#3b3d42", color: "#FFF" }}
            >
              Higiene
            </S.LinkItem>
            <S.LinkItem
              to="/produtos/ordenhadeiras/pecas-e-acessorios"
              activeStyle={{ background: "#3b3d42", color: "#FFF" }}
            >
              Peças e acessórios
            </S.LinkItem>
            <S.LinkItem
              to="/produtos/ordenhadeiras/sistema-inteligente-de-ordenha"
              activeStyle={{ background: "#3b3d42", color: "#FFF" }}
            >
              Sistema inteligente
            </S.LinkItem>
          </div>
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
