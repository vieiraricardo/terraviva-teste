import React from "react"
import { Link } from "gatsby"

import Icon from "../icons"
import * as S from "./styles"

export default function Footer() {
  return (
    <S.Container id="contato">
      <S.FooterHeader>
        <S.FooterMenuContainer>
          <S.CopyrightContainer>
            <S.Copyright>
              © {new Date().getUTCFullYear()} Terra Viva+. Todos os direitos
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
