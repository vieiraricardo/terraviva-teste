import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "./icons"

const MenuContainer = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
  position: fixed;
  justify-content: flex-end;
  opacity: 0;
`

const Container = styled.div`
  max-width: 80%;
  width: 100%;
  height: 100%;
  background: #000;
  position: relative;
  /* right: -200px; */
`

const Menu = styled.div`
  padding: 13px;
  background: #fe7d0b;
  position: absolute;
  left: -50px;
  top: 10px;
  border-radius: 4px;
  cursor: pointer;
`
const Nav = styled.nav`
  width: 100%;
  padding: 0 15px;
  bottom: -55px;
  box-sizing: border-box;
  margin: 0 auto;
`

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`

const MenuItem = styled.li`
  height: 100%;
  font-family: "Hind", Sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  text-decoration: none;
  line-height: 23.002px;
  letter-spacing: 0.56px;
  padding: 14px 0;
  text-transform: uppercase;
  transition: all 0.3s;
  :hover {
    background: #000;
  }
  a {
    color: #fff;
    padding: 14px;
    text-decoration: none;
    font-weight: bold;
    outline: none;
  }
`

export default function MobileMenu({ setVisible, visible }) {
  function onCapture(evt) {
    setVisible(!visible)
    console.log("mobile menu")
  }

  return (
    <MenuContainer
      style={
        visible
          ? { display: "flex", opacity: 1, transition: "opacity 0.3s" }
          : {}
      }
    >
      <Container>
        <Menu onGotPointerCapture={onCapture}>
          <Icon name="times" color="#FFF" />
        </Menu>
        <Nav>
          <MenuList>
            <MenuItem>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/sobre" activeClassName="active">
                Sobre
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/servicos" activeClassName="active">
                Serviços
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/produtos" activeClassName="active">
                Produtos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contato" activeClassName="active">
                Contato
              </Link>
            </MenuItem>
          </MenuList>
        </Nav>
      </Container>
    </MenuContainer>
  )
}
