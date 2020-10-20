import React, { useEffect } from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Banner from "../../components/banner"
import Carousel from "../../components/carousel"

import * as S from "./styles"

export default function About({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  useEffect(() => {
    ;(function accordion() {
      const acc = document.querySelectorAll(".accordion")
      const panels = document.querySelectorAll(".panel")

      acc.forEach(btn =>
        btn.addEventListener("click", function() {
          panels.forEach(e => e.classList.remove("active-panel"))
          panels.forEach(p => (p.style.maxHeight = null))
          const panel = this.nextElementSibling
          acc.forEach(e => e.classList.remove("active-accordion"))
          this.classList.add("active-accordion")

          if (panel.style.maxHeight) {
            panel.style.maxHeight = null
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
          }
        })
      )
    })()
  }, [])

  return (
    <Layout pathData={{ location, crumbs }}>
      <SEO title="Sobre">
        <link rel="stylesheet" href="/css/global.css" />
        <link rel="stylesheet" href="/css/flickity.min.css" />
      </SEO>
      <S.Container>
        <div
          style={{ maxWidth: 800, alignSelf: "flex-start", padding: "0 20px" }}
        >
          <S.Divider />
          <S.H1 color="#000">QUEM SOMOS</S.H1>
          <S.P margin="10px 0">
            A <b>SANITY MILK</b> ajuda os produtores nos desafios de produzir
            leite com qualidade, preservar a saúde do úbere das vacas e ter
            eficiência nos custos de mão de obra para ordenhar.
          </S.P>
          <S.P margin="10px 0">
            Somos a primeira fábrica nordestina de equipamentos de ordenha e
            produtos de higiene. Nossos produtos reúnem a robustez nordestina
            aliada às inovações tecnológicas mundiais.
          </S.P>
          <S.P margin="10px 0">
            Além disso, conta com uma vasta linha de peças para qualquer marca
            de ordenhadeiras do mercado, serviços de assistência técnica e
            manutenção profissional, treinamentos para ordenhadores,
            consultorias em qualidade do leite e controle de mastite e um
            laboratório de identificação de microrganismos causadores de
            mastite.
          </S.P>
          <S.P margin="10px 0">
            Nossa linha exclusiva de produtos <b>SANITY MILK</b> para higiene
            das ordenhadeiras e produtos pré e pós dipping para assepsia dos
            tetos das vacas são de formulações modernas e inovadoras que
            garantem a qualidade do leite e saúde das vacas.
          </S.P>
        </div>
        <S.Divider />
        <S.CoreValues>
          <S.Column>
            <S.H2 size="28px">
              Em consonância com as necessidades do mercado brasileiro, se
              posiciona sob 3 princípios básicos:
            </S.H2>
            <S.Row>
              <S.RoundedIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path d="M608 384c0 89.6 70.4 160 160 160s160-70.4 160-160-70.4-160-160-160-160 70.4-160 160zM864 384c0 54.4-41.6 96-96 96s-96-41.6-96-96 41.6-96 96-96 96 41.6 96 96zM32 896h128c19.2 0 32-12.8 32-32v-9.6l182.4 92.8c22.4 12.8 51.2 19.2 76.8 19.2 22.4 0 41.6-3.2 64-12.8l457.6-185.6c12.8-6.4 22.4-19.2 19.2-35.2 0-3.2-19.2-89.6-160-89.6h-195.2c-28.8-38.4-76.8-64-124.8-64h-112c-44.8-57.6-131.2-96-208-96v-32c0-19.2-12.8-32-32-32h-128c-19.2 0-32 12.8-32 32v416c0 16 12.8 28.8 32 28.8zM358.4 627.2c6.4 9.6 16 12.8 25.6 12.8h128c35.2 0 73.6 28.8 89.6 64h-249.6c-19.2 0-32 12.8-32 32s12.8 32 32 32h288c19.2 0 32-12.8 32-32 0-9.6 0-22.4-3.2-32h163.2c41.6 0 64 9.6 76.8 19.2l-419.2 169.6c-28.8 9.6-60.8 9.6-86.4-3.2l-211.2-108.8v-236.8c64 0 134.4 35.2 166.4 83.2zM64 480h64v313.6c0 3.2 0 6.4 0 12.8v25.6h-64v-352zM224 192c0 89.6 70.4 160 160 160s160-70.4 160-160-70.4-160-160-160-160 70.4-160 160zM480 192c0 54.4-41.6 96-96 96s-96-41.6-96-96 41.6-96 96-96 96 41.6 96 96zM320 192c0 19.2 12.8 32 32 32h64c19.2 0 32-12.8 32-32s-12.8-32-32-32h-64c-19.2 0-32 12.8-32 32zM704 384c0 19.2 12.8 32 32 32h64c19.2 0 32-12.8 32-32s-12.8-32-32-32h-64c-19.2 0-32 12.8-32 32z"></path>
                </svg>
              </S.RoundedIcon>
              <S.Column margin="0 0 0 20px" padding="20px 0">
                <S.H3>1 - Atendimento Personalizado ao Cliente</S.H3>
                <S.P>
                  Entendemos que cada produtor tem sua realidade, suas
                  necessidades e desafios. A SANITY MILK identifica esses pontos
                  juntamente com o produtor e fornece consultoria, treinamentos
                  e serviços personalizados em:
                  <br />
                  <br />
                  <b>&#8226;</b> Escolha e dimensionamento do equipamento ideal
                  para a sua realidade;
                  <br />
                  <br />
                  <b>&#8226;</b> Definição do modelo de sala de ordenha que
                  melhor se adeque a realidade atual e futura;
                  <br />
                  <br />
                  <b>&#8226;</b> Implantação de rotinas de ordenha que garantem
                  qualidade do leite;
                  <br />
                  <br />
                  <b>&#8226;</b> Controle de mastite;
                  <br />
                  <br />
                  <b>&#8226;</b> Capacitação da mão de obra da fazenda;
                  <br />
                  <br />
                  <b>&#8226;</b> Identificação de microrganismos causadores de
                  mastite;
                </S.P>
                <S.P margin="10px 0">
                  Cada propriedade tem suas particularidades, por isso essas
                  consultorias, serviços e treinamentos são definidos em
                  alinhamento com a necessidade de cada fazenda.
                </S.P>
              </S.Column>
            </S.Row>
            <S.Row>
              <S.RoundedIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path d="M115.2 841.6c6.4 9.6 19.2 12.8 28.8 12.8l124.8-19.2 64 108.8c6.4 9.6 16 16 28.8 16 0 0 0 0 3.2 0 12.8 0 22.4-6.4 28.8-19.2l112-236.8c3.2 0 3.2 0 6.4 0s3.2 0 6.4 0l112 236.8c6.4 9.6 16 19.2 28.8 19.2 0 0 0 0 3.2 0 9.6 0 22.4-6.4 28.8-16l64-108.8 124.8 19.2c12.8 3.2 22.4-3.2 28.8-12.8s9.6-22.4 3.2-32l-118.4-246.4c44.8-57.6 70.4-131.2 70.4-208 0-195.2-156.8-352-352-352s-352 153.6-352 348.8c0 80 25.6 150.4 70.4 208l-118.4 246.4c-3.2 12.8-3.2 25.6 3.2 35.2zM739.2 768c-12.8-3.2-25.6 3.2-32 16l-44.8 76.8-76.8-163.2c60.8-12.8 118.4-41.6 163.2-83.2l80 169.6-89.6-16zM512 64c160 0 288 128 288 288 0 67.2-22.4 128-64 179.2-3.2 3.2-6.4 6.4-9.6 9.6-48 54.4-115.2 89.6-192 96 0 0 0 0-3.2 0-6.4 0-16 0-22.4 0s-12.8 0-19.2 0c-3.2 0-6.4 0-6.4 0-73.6-6.4-137.6-41.6-185.6-96-3.2-6.4-6.4-12.8-12.8-16-38.4-44.8-60.8-105.6-60.8-172.8 0-160 128-288 288-288zM275.2 611.2c44.8 41.6 102.4 70.4 163.2 83.2l-76.8 163.2-44.8-76.8c-6.4-9.6-19.2-16-32-16l-86.4 12.8 76.8-166.4zM396.8 403.2l-16 92.8c-3.2 12.8 3.2 25.6 12.8 32s22.4 9.6 35.2 3.2l83.2-44.8 83.2 44.8c3.2 3.2 9.6 3.2 16 3.2s12.8-3.2 19.2-6.4c9.6-6.4 16-19.2 12.8-32l-16-92.8 67.2-67.2c9.6-9.6 12.8-22.4 9.6-32-3.2-12.8-12.8-19.2-25.6-22.4l-92.8-12.8-41.6-86.4c-6.4-9.6-16-19.2-28.8-19.2s-22.4 6.4-28.8 19.2l-41.6 83.2-92.8 12.8c-12.8 3.2-22.4 9.6-25.6 22.4s0 25.6 6.4 32l64 70.4zM467.2 329.6c9.6 0 19.2-6.4 25.6-16l19.2-41.6 19.2 41.6c3.2 9.6 12.8 16 22.4 19.2l44.8 6.4-35.2 32c-6.4 6.4-9.6 19.2-9.6 28.8l6.4 44.8-41.6-22.4c-3.2-3.2-9.6-3.2-16-3.2s-9.6 0-16 3.2l-41.6 22.4 9.6-44.8c3.2-9.6 0-22.4-9.6-28.8l-32-32 54.4-9.6z"></path>
                </svg>
              </S.RoundedIcon>
              <S.Column margin="0 0 0 20px" padding="20px 0">
                <S.H3>2 - Qualidade do Produto</S.H3>
                <S.P margin="10px 0">
                  A <b>SANITY MILK</b> é a única empresa do Brasil a dar 2 anos
                  de garantia em seus equipamentos. Essa garantia chega ser 2 a
                  8 vezes maior que outras marcas que trabalham com garantias a
                  partir de 3 meses somente ou no máximo 1 ano.
                </S.P>
                <S.P margin="10px 0">
                  Assim, os equipamentos da <b>SANITY MILK</b> garantem, no
                  mínimo, 2 vezes mais qualidade, segurança e tranquilidade para
                  o produtor.
                </S.P>
                <S.P margin="10px 0">
                  Os fornecedores da <b>SANITY MILK</b> passam por rigorosas
                  inspeções de qualidade e provas de eficiência. Após as
                  aprovações, entrarão na linha de produção e são lançados no
                  mercado.
                </S.P>
                <S.P margin="10px 0">
                  Com mais de 10 anos de experiência, o corpo técnico da{" "}
                  <b>SANITY MILK</b> reúne conhecimentos das tecnologias de
                  ordenha, higiene e prevenção de mastites predominantes no
                  Brasil (principalmente região Sul, Norte e Nordeste) e
                  internacionais (principalmente Israel e Itália).
                </S.P>
                <S.P margin="10px 0">
                  Ou seja, a <b>SANITY MILK</b> oferece aos seus clientes e
                  parceiros o que há de melhor nesse mercado MUNDIAL de
                  ordenhadeiras e qualidade do leite e garantem isso de maneira
                  incomparável.
                </S.P>
              </S.Column>
            </S.Row>
            <S.Row>
              <S.RoundedIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <title></title>
                  <g id="icomoon-ignore"></g>
                  <path d="M980.672 113.632c-10.304-1.984-20.928 1.408-28.384 8.832l-88.288 88.288-50.752-50.752 88.288-88.288c7.424-7.424 10.752-18.016 8.832-28.384-1.888-10.336-8.704-19.104-18.304-23.392-29.28-13.216-60.256-19.936-92.064-19.936-123.488 0-224 100.512-224 224 0 11.168 0.896 22.496 2.72 33.952l-110.912 100.608-95.808-95.808-0.288-58.976c-0.032-8.448-3.392-16.512-9.376-22.464l-135.776-135.744c-12.512-12.512-32.736-12.512-45.248 0l-135.744 135.744c-12.512 12.512-12.512 32.736 0 45.248l135.744 135.776c5.984 5.984 14.016 9.344 22.464 9.376l58.976 0.288 90.464 90.464-310.72 281.824c-6.496 5.888-10.272 14.176-10.496 22.944s3.2 17.216 9.376 23.392l192 192c5.984 6.016 14.144 9.376 22.624 9.376 0.256 0 0.544 0 0.768 0 8.736-0.224 17.024-4 22.912-10.496l220.96-243.616 200.8 200.8c32.672 32.672 75.648 49.056 118.592 49.024 42.976 0 85.952-16.352 118.656-49.024 65.408-65.44 65.408-171.872 0-237.248l-212.352-212.352 39.744-43.808c137.952 21.792 257.92-86.624 257.92-221.28 0-31.808-6.72-62.784-19.936-92.064-4.32-9.6-13.056-16.448-23.392-18.304zM298.688 317.44c-5.984-5.984-14.016-9.344-22.464-9.376l-58.976-0.288-103.808-103.84 90.496-90.496 103.84 103.808 0.288 58.976c0.032 8.448 3.392 16.48 9.376 22.464l102.912 102.912-19.68 17.824-101.984-101.984zM893.44 746.688c40.448 40.448 40.448 106.272 0 146.752-40.544 40.448-106.336 40.416-146.752 0l-203.008-203.008 139.584-153.888 210.176 210.144zM762.112 379.264c-11.424-2.72-23.424 0.864-31.296 9.6l-70.624 77.856c-0.288 0.256-0.64 0.32-0.896 0.608-0.448 0.448-0.576 1.024-0.992 1.504l-403.424 444.8-144.512-144.512 309.76-280.96c0.768-0.64 1.696-0.896 2.432-1.6 0.448-0.448 0.576-1.024 0.992-1.472l211.616-191.936c8.672-7.872 12.384-19.872 9.6-31.296-3.168-12.864-4.768-25.6-4.768-37.856 0-88.224 71.776-160 160-160 5.984 0 11.872 0.352 17.76 0.992l-72.384 72.384c-12.512 12.512-12.512 32.736 0 45.248l96 96c12.512 12.512 32.736 12.512 45.248 0l72.384-72.384c0.64 5.888 0.992 11.776 0.992 17.76 0 100.48-92.32 181.056-197.888 155.264z"></path>
                </svg>
              </S.RoundedIcon>
              <S.Column margin="0 0 0 20px" padding="20px 0">
                <S.H3>3 - Inovação e Tecnologia</S.H3>
                <S.P margin="10px 0">
                  Estreitamente ligada à qualidade, esse pilar importante do
                  tripé que se apoia os desenvolvimentos de produtos da
                  <b> SANITY MILK</b>, é composto por uma equipe de engenheiros,
                  técnicos e veterinários que pesquisam e desenvolvem nossos
                  produtos e testam inovações de tecnologias de toda parte de
                  mundo para compor nossos produtos.
                </S.P>
                <S.P>
                  A <b>SANITY MILK</b> tem como norteador desses projetos a
                  necessidade de levar soluções práticas e de confiança para os
                  desafios de produção de leite com qualidade, manutenção da
                  saúde dos animais e mecanização das ordenhas na fazenda, assim
                  conseguimos criar produtos e equipamentos robustos,
                  diferenciados e personalizados para cada cliente mediante suas
                  necessidades e potencialidades.
                </S.P>
              </S.Column>
            </S.Row>
          </S.Column>
          <div>
            <S.AccordionButton className="accordion active-accordion">
              missão
            </S.AccordionButton>
            <S.AccordionPannel className="panel active-panel">
              <S.P margin="0" padding="30px">
                Ajudar os produtores nos desafios de produzir leite com
                qualidade, preservar a saúde do úbere das vacas e ter eficiência
                nos custos de mão de obra para ordenhar.
              </S.P>
            </S.AccordionPannel>
            <S.AccordionButton className="accordion ">visão</S.AccordionButton>
            <S.AccordionPannel className="panel">
              <div>
                <S.P margin="0" padding="30px">
                  Ser reconhecida em todo Nordeste até 2025, como referência em
                  equipamentos de ordenha, produtos de higiene de ordenha e
                  qualidade do leite e serviços de assistência técnica.
                </S.P>
                <S.P margin="0" padding="0 30px">
                  Cumprindo nosso papel social de transmitir tranquilidade e
                  segurança aos nossos clientes, colaboradores e parceiros.
                </S.P>
                <br />
              </div>
            </S.AccordionPannel>
            <S.AccordionButton className="accordion">valores</S.AccordionButton>
            <S.AccordionPannel className="panel">
              <Carousel
                height="150px"
                flickityRef={c => (window.flkty = c)}
                options={{
                  cellAlign: "left",
                  contain: true,
                  pageDots: false,
                  autoPlay: 2000,
                  lazyLoad: true,
                }}
              >
                <S.CellContainer>
                  <S.P>
                    Se nem tudo deu certo conforme planejado, não se chateie,
                    não questione: <b>GRATIDÃO</b>!
                  </S.P>
                </S.CellContainer>
                <S.CellContainer>
                  <S.P>
                    Ainda não atingiu suas metas, não desista:{" "}
                    <b>PERSEVERANÇA</b>!
                  </S.P>
                </S.CellContainer>
                <S.CellContainer>
                  <S.P>
                    Estou com dificuldades, as coisas não estão acontecendo como
                    gostaria ou planejei: <b>RESILIÊNCIA</b>!
                  </S.P>
                </S.CellContainer>
                <S.CellContainer>
                  <S.P>
                    Estou cansado e já não sei mais o que fazer para mudar isso:{" "}
                    <b>ENERGIA</b> e <b>PROATIVIDADE</b>!
                  </S.P>
                </S.CellContainer>
                <S.CellContainer>
                  <S.P>
                    Acho que sozinho não conseguirei, preciso de ajuda:{" "}
                    <b>HUMILDADE</b>!
                  </S.P>
                </S.CellContainer>
                <S.CellContainer>
                  <S.P>
                    As pessoas esperam muito de mim, não sei se consigo:{" "}
                    <b>ATENÇÃO</b> e <b>RESPEITO</b>!
                  </S.P>
                </S.CellContainer>
                <S.CellContainer>
                  <S.P>
                    A Sociedade cobra muito, meus clientes esperam muito de mim:{" "}
                    <b>ÉTICA</b> E <b>PROFISSIONALISMO</b>!
                  </S.P>
                </S.CellContainer>
                <S.CellContainer>
                  <S.P>
                    Atendo as expectativas dos meus clientes e amigos:{" "}
                    <b> GERAR SATISFAÇÃO</b>!
                  </S.P>
                </S.CellContainer>
                <S.CellContainer>
                  <S.P>
                    Minha família é minha base: <b>AMOR</b> e{" "}
                    <b>COMPROMETIMENTO</b>!
                  </S.P>
                </S.CellContainer>
              </Carousel>
            </S.AccordionPannel>
          </div>
        </S.CoreValues>
      </S.Container>
      <Banner
        bg="#fe7d0b"
        color="#FFF"
        pad="0 50px"
        buttonBg="#FFF"
        buttonColor="#000"
      />
    </Layout>
  )
}
