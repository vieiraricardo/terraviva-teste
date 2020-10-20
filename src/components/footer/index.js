import React from "react"
import { Link } from "gatsby"

import Icon from "../icons"
import * as S from "./styles"

export default function Footer() {
  return (
    <S.Container>
      <S.FooterContainer>
        <S.Block>
          <S.H1>Nossa empresa</S.H1>
          <Link to="/" className="logo-link">
            <img src="/images/logo.png" alt="logomarca" width="200" />
          </Link>
          <S.P>
            A <b>SANITY MILK</b> ajuda os produtores nos desafios de produzir
            leite com qualidade, preservar a saúde do úbere das vacas e ter
            eficiência nos custos de mão de obra para ordenhar.
          </S.P>
          <br />
          <S.P>
            Somos a primeira fábrica nordestina de equipamentos de ordenha e
            produtos de higiene.
          </S.P>
          <br />
          <S.P>
            Nossos produtos reúnem a robustez nordestina aliada às inovações
            tecnológicas mundiais.
          </S.P>
        </S.Block>
        <S.Block>
          <S.H1 color="#fe7d0b">Links úteis</S.H1>
          <S.StyledLink to="/sobre">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Sobre
          </S.StyledLink>
          <S.StyledLink to="/servicos/manutencao">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Manutenção
          </S.StyledLink>
          <S.StyledLink to="/servicos/programa-qualidade-do-leite">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Programa de Qualidade do Leite
          </S.StyledLink>
          <S.StyledLink to="/servicos/laboratorio-alvo-leite">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Laboratório Alvo Leite
          </S.StyledLink>
          <S.StyledLink to="/ordenhadeiras/ordenhadeira-balde-ao-pe">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Ordenhadeiras Balde ao Pé
          </S.StyledLink>
          <S.StyledLink to="/ordenhadeiras/ordenhadeira-movel">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Ordenhadeiras Móvel
          </S.StyledLink>
          <S.StyledLink to="/ordenhadeiras/ordenhadeira-canalizada">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Ordenhadeira Canalizada
          </S.StyledLink>
          <S.StyledLink to="/ordenhadeiras/produtos-de-higiene">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Produtos de Higiene
          </S.StyledLink>
          <S.StyledLink to="/ordenhadeiras/pecas-e-acessorios">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Peças e Acessórios
          </S.StyledLink>
          <S.StyledLink to="/ordenhadeiras/sistema-inteligente-de-ordenha">
            <S.WrapIcon>
              <Icon name="chevron-right" size="12px" color="#aeb6be" />
            </S.WrapIcon>
            Sistema Inteligente
          </S.StyledLink>
        </S.Block>
        <S.Block>
          <S.H1 color="#fe7d0b">contato</S.H1>
          <S.WrapElement>
            <S.WrapIcon>
              <Icon name="map-marker-alt" color="#aeb6be" size="16px" />
            </S.WrapIcon>
            <div>
              <S.P>
                <span style={{ color: "#444", fontWeight: "bold" }}>
                  Endereço
                </span>
                <br />
                Rua Santa Cruz, 16-B, Centro - Itaíba-PE, CEP: 56550-000
              </S.P>
              <S.LineSpace />
              <S.P>
                <span style={{ color: "#444", fontWeight: "bold" }}>
                  Suporte & Vendas:
                </span>
              </S.P>
              <S.WrapElement bottom="0" center>
                <a
                  href="https://bit.ly/3dOUiLG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/whatsapp-logo-5.png" alt="" width="18px" />
                </a>
                <S.SStyledLink
                  target="_blank"
                  href="https://bit.ly/3dOUiLG"
                  size="15.5px"
                  color="#5f656d"
                >
                  87 98154-5491
                </S.SStyledLink>
              </S.WrapElement>
              <S.WrapElement bottom="0" center>
                <Icon name={["far", "envelope"]} color="#aeb6be" size="15px" />
                <S.SStyledLink
                  target="_blank"
                  href="mailto:contato.pe@sanitymilk.com.br"
                  size="15.5px"
                >
                  contato.pe@sanitymilk.com.br
                </S.SStyledLink>
              </S.WrapElement>
            </div>
          </S.WrapElement>
        </S.Block>
      </S.FooterContainer>
      <S.FooterHeader>
        <S.FooterMenuContainer>
          <S.MenuList>
            <S.MenuItem>
              <Link to="/" activeClassName="active-link-footer">
                Home
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/servicos" activeClassName="active-link-footer">
                Nossos Serviços
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/sobre" activeClassName="active-link-footer">
                Sobre nós
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/contato" activeClassName="active-link-footer">
                Contate nos
              </Link>
            </S.MenuItem>
          </S.MenuList>
          <S.CopyrightContainer>
            <S.Copyright>
              © {new Date().getUTCFullYear()} Sanity Milk. Todos os direitos
              Reservados.
            </S.Copyright>
            <S.Block style={{ display: "flex" }}>
              <S.SStyledLink href="https://bit.ly/3e4VUBa">
                <img src="/images/whatsapp.png" alt="" width="20px" />
              </S.SStyledLink>
              <S.SStyledLink href="https://facebook.com/sanitymilkoficial">
                <img src="/images/facebook.png" alt="" width="20px" />
              </S.SStyledLink>
              <S.SStyledLink href="https://instagram.com/sanitymilk">
                <img src="/images/instagram.png" alt="" width="20px" />
              </S.SStyledLink>
              <S.SStyledLink
                target="_blank"
                href="tel:075 3030-2198"
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50px",
                  background: "#444",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "10px",
                }}
              >
                <Icon name="phone" size="11px" />
              </S.SStyledLink>
            </S.Block>
          </S.CopyrightContainer>
        </S.FooterMenuContainer>
      </S.FooterHeader>
    </S.Container>
  )
}
