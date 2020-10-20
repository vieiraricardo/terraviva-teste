import React, { useState } from "react"
import { Link } from "gatsby"
import MobileMenu from "../../components/mobileMenu"

import Icon from "../icons"
import * as S from "./styles"

export default function Header() {
  const [visible, setVisible] = useState(false)

  function onCapture() {
    setVisible(!visible)
  }

  // useEffect(() => {
  //   window.onscroll = function() {
  //     const header = document.querySelector(".header")
  //     const nav = document.querySelector(".navigation")

  //     const headerTop = header.offsetTop

  //     window.pageYOffset > headerTop
  //       ? nav.classList.add("menu-position")
  //       : nav.classList.remove("menu-position")
  //   }
  // }, [])

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10,
        left: 0,
        right: 0,
        background: "#FFF",
      }}
    >
      <S.Container className="header">
        <S.HeaderContainer>
          <Link to="/" className="logo-link">
            <S.Logo src="/images/logo.png" alt="logomarca" />
          </Link>
          <S.Menu id="mobile-menu" onGotPointerCapture={onCapture}>
            <Icon name="bars" color="#fff" />
          </S.Menu>
          <S.Nav className="navigation menu-position">
            <S.MenuList>
              <S.MenuItem>
                <Link to="/" activeClassName="active">
                  Inicio
                </Link>
              </S.MenuItem>
              <S.MenuItem>
                <Link to="/sobre" activeClassName="active">
                  Sobre
                </Link>
              </S.MenuItem>
              <S.MenuItem className="menu-item">
                <Link to="/servicos" activeClassName="active">
                  Serviços
                </Link>
                <S.DropDownMenu className="dropdown">
                  <S.MenuItem>
                    <Link
                      to="/servicos/programa-qualidade-do-leite"
                      activeClassName="active"
                    >
                      programa qualidade do leite
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem>
                    <Link
                      to="/servicos/laboratorio-alvo-leite"
                      activeClassName="active"
                    >
                      Laboratório alvo leite
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem>
                    <Link to="/servicos/manutencao" activeClassName="active">
                      manutenção
                    </Link>
                  </S.MenuItem>
                </S.DropDownMenu>
              </S.MenuItem>
              <S.MenuItem className="menu-item">
                <Link to="/produtos" activeClassName="active">
                  Produtos
                </Link>
                <S.DropDownMenu className="dropdown">
                  <S.MenuItem>
                    <Link
                      to="/ordenhadeiras/ordenhadeira-canalizada"
                      activeClassName="active"
                    >
                      Ordenhadeira canalizada
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem>
                    <Link
                      to="/ordenhadeiras/ordenhadeira-balde-ao-pe"
                      activeClassName="active"
                    >
                      Ordenhadeira Balde ao Pé
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem>
                    <Link
                      to="/ordenhadeiras/ordenhadeira-movel"
                      activeClassName="active"
                    >
                      Ordenhadeira Móvel
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem>
                    <Link
                      to="/ordenhadeiras/produtos-de-higiene"
                      activeClassName="active"
                    >
                      Produtos de Higiene
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem>
                    <Link
                      to="/ordenhadeiras/pecas-e-acessorios"
                      activeClassName="active"
                    >
                      Peças e acessórios
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem>
                    <Link
                      to="/ordenhadeiras/sistema-inteligente-de-ordenha"
                      activeClassName="active"
                    >
                      sistema inteligente
                    </Link>
                  </S.MenuItem>
                </S.DropDownMenu>
              </S.MenuItem>
              <S.MenuItem>
                <Link to="/contato" activeClassName="active">
                  Contato
                </Link>
              </S.MenuItem>
            </S.MenuList>
          </S.Nav>
          <S.Row>
            <S.SStyledLink
              href="https://bit.ly/3e4VUBa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/whatsapp.png" alt="" width="40px" />
            </S.SStyledLink>
            <S.SStyledLink
              href="https://facebook.com/sanitymilkoficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.png" alt="" width="40px" />
            </S.SStyledLink>
            <S.SStyledLink
              href="https://instagram.com/sanitymilk"
              target="_blank"
            >
              <img src="/images/instagram.png" alt="" width="40px" />
            </S.SStyledLink>
            <S.SStyledLink
              target="_blank"
              rel="noopener noreferrer"
              href="tel:075 3030-2198"
              bg="#444"
            >
              <Icon name="phone" size="22px" />
            </S.SStyledLink>
            <S.PhoneNumber>075 3030-2198</S.PhoneNumber>
          </S.Row>
        </S.HeaderContainer>
        <MobileMenu setVisible={setVisible} visible={visible} />
      </S.Container>
    </div>
  )
}
