import React, { useEffect } from "react"

import Icon from "../icons"
import * as S from "./styles"

export default function Header() {

  useEffect(() => {
    const links = document.querySelectorAll(".navigation ul a");

    links.forEach(link => {
      link.addEventListener('click', function(e) {

        if(location.pathname !== '/') {
          return location.replace(location.origin);
        }

        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop-100;

        window.history.pushState(href, href, href)
        e.preventDefault();

        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      })
    })
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10,
        left: 0,
        right: 0,
        background: "#FFF",
        top: 0,
      }}
    >
      <S.Container className="header">
        <S.HeaderContainer>
          <a href="/" className="logo-link">
            <S.Logo src="/images/logo.png" alt="logomarca" />
          </a>

          <S.Nav className="navigation menu-position">
            <S.MenuList>
              <S.MenuItem>
                <a href="#inicio">
                  Inicio
                </a>
              </S.MenuItem>
              <S.MenuItem className="menu-item">
                <a href="#servicos">
                  Serviços
                </a>
              </S.MenuItem>
              <S.MenuItem className="menu-item">
                <a href="#produtos">
                  Produtos
                </a>
              </S.MenuItem>
              <S.MenuItem className="menu-item">
                <a href="#contato">
                  Contato
                </a>
              </S.MenuItem>
            </S.MenuList>
          </S.Nav>
          <S.Row>
            <S.SStyledLink
              href="https://bit.ly/3dOUiLG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/whatsapp.png" alt="" width="40px" />
            </S.SStyledLink>
            <S.SStyledLink
              href="https://facebook.com/terravivamais"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.png" alt="" width="40px" />
            </S.SStyledLink>
            <S.SStyledLink
              href="https://instagram.com/terravivamais"
              target="_blank"
            >
              <img src="/images/instagram.png" alt="" width="40px" />
            </S.SStyledLink>
            <S.SStyledLink
              target="_blank"
              rel="noopener noreferrer"
              href="tel:087 98154-5491"
              bg="#444"
            >
              <Icon name="phone" size="22px" />
            </S.SStyledLink>
            <S.PhoneNumber>087 98154-5491</S.PhoneNumber>
          </S.Row>
        </S.HeaderContainer>
      </S.Container>
    </div>
  )
}
