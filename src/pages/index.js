import React, {useState, useEffect} from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import * as S from './styles';
import Icon from "../components/icons"

export default function Home({
  location,
  pageContext: {
    breadcrumb: { crumbs },
  },
}) {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    message: "",
  };
  const [mail, setMail] = useState(initialState);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);
  const isSSR = typeof window === "undefined";

  !isSSR &&
    (function setInputMessage() {
      const inputs = document.querySelectorAll(".form-control");

      inputs.forEach((input) => {
        const msg = input.title;
        const { value } = input;

        input.setCustomValidity("");
        if (!input.validity.valid) input.setCustomValidity(msg);
        if (!value) input.setCustomValidity("Campo obrigatório");
      });
    })();

  useEffect(() => {
    if (states && mail.state) {
      const filteredState = states.filter((state) => state.nome === mail.state);

      setCities(filteredState[0].cidades);
    }
  }, [states, mail.state]);

  useEffect(() => {
    window.onscroll = function() {
      const animElements = document.querySelectorAll("#animated-element")

      animElements.forEach(element => {
        if (element.offsetTop  < window.pageYOffset+450) {
          element.classList.add(element.getAttribute('data-animate-class'))
          element.style = 'opacity: 1'
        }
      })
    }
  }, [])



  useEffect(() => {
    async function fetchStates() {
      const data = await fetch(
        "https://gist.githubusercontent.com/letanure/3012978/raw/2e43be5f86eef95b915c1c804ccc86dc9790a50a/estados-cidades.json"
      ).then((res) => res.json());

      setStates(data.estados);
    }
    fetchStates();
  }, []);

  function handleChange(e, v) {
    const { id, value } = e.target;

    if (typeof v === "string") {
      setMail({ ...mail, [id]: v });
      e.preventDefault();
      return;
    }

    setMail({ ...mail, [id]: value });
    e.preventDefault();
  }

  function handleSubmit(event) {
    const options = {
      method: "POST",
      body: JSON.stringify(mail),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://sanitymilk-mailer.now.sh/send-mail", options)
      .then(() => setMail(initialState))
      .then(showDialog);

    event.preventDefault();
  }

  function showDialog() {
    const dialog = document.querySelector(".dialog");
    const closeButton = document.querySelector(".close-button");

    dialog.style.display = "flex";

    setTimeout(() => {
      dialog.style.display = "none";
    }, 30000);

    dialog.addEventListener("click", (e) => {
      dialog.style.display = "none";
      e.preventDefault();
    });

    closeButton.addEventListener("click", (e) => {
      dialog.style.display = "none";
      e.preventDefault();
    });
  }

  function formatPhone(phone) {
    if (phone.length === 2) {
      return phone.replace(/\D/g, "").replace(/(\d{1,2})$/, "($1) ");
    } else if (phone.length > 10) {
      return phone
        .replace(/\D/g, "")
        .replace(/(\d{1,2})(\d{1,5})(\d{1,4})$/, "($1) $2-$3");
    } else {
      return phone.replace(/\D/g, "").replace(/(\d{1,2})(\d{1,5})$/, "($1) $2");
    }
  }


  return (
    <Layout pathData={{ location, crumbs }}>
      <SEO
        title="Terra Viva Mais"
        description="A SANITY MILK ajuda os produtores nos desafios de produzir leite com qualidade,
          preservar a saúde do úbere das vacas e ter eficiência nos custos de mão de obra para
          ordenhar. Somos a primeira fábrica nordestina de equipamentos de ordenha e produtos
          de higiene. Nossos produtos reúnem a robustez nordestina aliada às inovações
          tecnológicas mundiais."
        meta={[
          {
            name: 'keywords',
            content:
              'sanity milk, ordenhadeiras, ordenhadeira móvel, ordenhadeira de carrinho, ordenha de carrinho,  ordenha móvel, ordenhadeira balde ao pé, ordenha balde ao pé, ordenhadeira canalizada, ordenha canalizada, lavar ordenha, lavar ordenhadeira, produtos, higiene, sanitizantes ordenha, ácido, pré dipping, pós dipping, pos dip, pre dip ',
          },
          {
            name: 'image',
            content: 'https://terravivamais.com.br/images.logo.png',
          },
        ]}
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </SEO>

      <S.Hero url="/images/banner1.png" id="inicio">
        <S.HeroContent>
          <S.BlockContainer>
            <S.H1 color="#fff" style={{ marginBottom: 20 }}>
              Terra Viva+: Mais vida para sua fazenda.
            </S.H1>
            <S.P color="#fff">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              dicta nisi, autem architecto provident vero odit dolore,
              repellendus enim quis et dolorem ullam ratione sed reprehenderit
              sequi, magnam fuga? Possimus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ducimus dicta nisi, autem architecto
              provident vero odit dolore, repellendus enim quis et dolorem ullam
              ratione sed reprehenderit sequi, magnam fuga? Possimus.
            </S.P>
          </S.BlockContainer>
        </S.HeroContent>
      </S.Hero>
      <S.Section pad="30px 0" id="servicos">
        <S.CenteredContainer pad="60px 0">
          <img src="/images/Group 16.png" alt=""
            className="service-content-image animate__animated"
            data-animate-class="animate__slideInLeft"
            id="animated-element"
          />
          <S.ServiceContent>
            <S.H2 color="#fe7d0b">
              Lorem ipsum dolor sit, amet consectetur elit.
            </S.H2>
            <S.P style={{ marginTop: 20, marginBottom: 30 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              dicta nisi, autem architecto provident vero odit dolore,
              repellendus enim quis et dolorem ullam ratione sed reprehenderit
              sequi, magnam fuga? Possimus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ducimus dicta nisi, autem architecto
              provident vero odit dolore, repellendus enim quis et dolorem ullam
              ratione sed reprehenderit sequi, magnam fuga? Possimus.
            </S.P>
            {/* <S.KnowMoreButton>Saiba Mais</S.KnowMoreButton> */}
          </S.ServiceContent>
        </S.CenteredContainer>

        <S.CenteredContainer pad="60px 0">
          <S.ServiceContent>
            <S.H2 color="#fe7d0b">
              Lorem ipsum dolor sit, amet consectetur elit.
            </S.H2>
            <S.P style={{ marginTop: 20, marginBottom: 30 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              dicta nisi, autem architecto provident vero odit dolore,
              repellendus enim quis et dolorem ullam ratione sed reprehenderit
              sequi, magnam fuga? Possimus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ducimus dicta nisi, autem architecto
              provident vero odit dolore, repellendus enim quis et dolorem ullam
              ratione sed reprehenderit sequi, magnam fuga? Possimus.
            </S.P>

            <S.P style={{ marginTop: 20, marginBottom: 30 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              dicta nisi, autem architecto provident vero odit dolore,
              repellendus enim quis et dolorem ullam ratione sed reprehenderit
              sequi, magnam fuga? Possimus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ducimus dicta nisi, autem architecto
              provident vero odit dolore, repellendus enim quis et dolorem ullam
              ratione sed reprehenderit sequi, magnam fuga? Possimus.
            </S.P>
          </S.ServiceContent>
          <img src="/images/Group 16.png" alt=""
            className="service-content-image animate__animated"
            data-animate-class="animate__slideInRight"
            id="animated-element"
          />
        </S.CenteredContainer>
      </S.Section>

      <S.PartnerContainer>
        <S.BlockContainer row>
          <S.BlockContainer width="450px">
            <S.H2 color="#fe7d0b">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </S.H2>
            <S.P>
              orem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              dicta nisi
            </S.P>
          </S.BlockContainer>
          <S.BlockContainer
            row
            style={{ justifyContent: 'space-around', alignItems: 'center' }}
          >
            <img
              src="/images/logo_sanitymilk.png"
              alt="logo sanity milk"
              height="100"
            />
            <img src="/images/logo_trouw.png" alt="logo trouw" height="60" />
            <img src="/images/logo_crvlagoa.png" alt="logo crv lagoa" />
          </S.BlockContainer>
        </S.BlockContainer>
      </S.PartnerContainer>

      <S.Section id="produtos">
        <S.BlockContainer style={{paddingBottom: 50, paddingTop: 70}}>
          <S.H2 color="#fe7d0b">Nossos Produtos</S.H2>
          <S.Divider width={50}/>
          <S.P style={{margin: 0}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aliquam ab ducimus sint quod expedita cum iste maxime beatae atque
            accusantium perferendis! Est vero nam error earum quas.
            Alias, dolores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aliquam ab ducimus sint quod expedita cum iste maxime beatae atque
            accusantium perferendis! Est vero nam error earum quas.
            Alias, dolores.
          </S.P>
          <S.CenteredContainer>
            <S.Card>
              <S.CardImage image="/images/canalizada-02.jpg"/>
              <div className="card-content">
                  <S.H2 tt="normal" hover="#fe7d0b" size="22px" color="#222931">
                    Ordenhadeiras
                  </S.H2>
                  <S.P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias voluptatibus quod repudiandae ex et modi facere,
                    dolorem tempore esse. Dolor cupiditate error tempora labore.
                  </S.P>
              </div>
            </S.Card>
            <S.Card>
              <S.CardImage image="/images/product3.jpg"/>
              <div className="card-content">
                  <S.H2 tt="normal" hover="#fe7d0b" size="22px" color="#222931">
                    Sêmen
                  </S.H2>
                  <S.P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias voluptatibus quod repudiandae ex et modi facere,
                    dolorem tempore esse. Dolor cupiditate error tempora labore.
                  </S.P>
              </div>
            </S.Card>
            <S.Card>
              <S.CardImage image="/images/product3.jpg"/>
              <div className="card-content">
                  <S.H2 tt="normal" hover="#fe7d0b" size="22px" color="#222931">
                    Sal mineral
                  </S.H2>
                  <S.P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias voluptatibus quod repudiandae ex et modi facere,
                    dolorem tempore esse. Dolor cupiditate error tempora labore.
                  </S.P>
              </div>
            </S.Card>
            <S.Card>
              <S.CardImage image="/images/product3.jpg"/>
              <div className="card-content">
                  <S.H2 tt="normal" hover="#fe7d0b" size="22px" color="#222931">
                    Medicamentos
                  </S.H2>
                  <S.P>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias voluptatibus quod repudiandae ex et modi facere,
                    dolorem tempore esse. Dolor cupiditate error tempora labore.
                  </S.P>
              </div>
            </S.Card>
          </S.CenteredContainer>
        </S.BlockContainer>
      </S.Section>

      <div id="contato" style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <S.BlockContainer style={{padding: 0, paddingTop: 50, paddingBottom: 50}} row>
          <S.BlockContainer width="100%">
            <S.FormContainer>
              <S.H2 color="#fe7d0b">Fale conosco</S.H2>
              <S.Divider width={50} style={{marginBottom: 30}}/>
              <S.Form onSubmit={handleSubmit} autoComplete="off">
                <S.InputContainer>
                  <label htmlFor="name">
                    <S.InputP>Seu nome*</S.InputP>
                    <S.Input
                      className="form-control"
                      id="name"
                      type="text"
                      title="Preencha corretamente o campo Nome"
                      name="your-name"
                      value={mail.name}
                      size="40"
                      autoComplete="off"
                      required
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor="phone">
                    <S.InputP>Seu Telefone*</S.InputP>
                    <S.Input
                      className="form-control"
                      id="phone"
                      type="tel"
                      title="Preencha corretamente o campo Telefone"
                      name="telephone"
                      value={mail.phone}
                      maxLength="15"
                      pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
                      placeholder="00 12345 6789"
                      size="40"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        const phone = formatPhone(e.target.value);
                        handleChange(e, phone);
                      }}
                    />
                  </label>
                  <label htmlFor="mail">
                    <S.InputP>Seu E-mail*</S.InputP>
                    <S.Input
                      className="form-control"
                      id="email"
                      type="email"
                      title="Preencha corretamente o campo E-mail"
                      name="your-email"
                      value={mail.email}
                      size="40"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor="state">
                    <S.InputP>Selecione seu estado*</S.InputP>
                    <S.Select
                      className="form-control"
                      id="state"
                      title="Escolha um Estado"
                      name="state"
                      value={mail.state}
                      required
                      autoComplete="off"
                      onChange={handleChange}
                    >
                      <option disabled></option>
                      <option value="Pernambuco">Pernambuco</option>
                      <option value="Alagoas">Alagoas</option>
                      <option value="Bahia">Bahia</option>
                      <option value="Maranhão">Maranhão</option>
                      <option value="Piauí">Piauí</option>
                      <option value="Rio Grande do Norte">
                        Rio Grande do Norte
                      </option>
                      <option value="Sergipe">Sergipe</option>
                      <option value="Paraíba">Paraíba</option>
                      <option value="Ceará">Ceará</option>
                    </S.Select>
                  </label>
                  <label htmlFor="city">
                    <S.InputP>Selecione sua cidade*</S.InputP>
                    {!cities ? (
                      <S.Select
                        disabled
                        className="form-control"
                        title="Escolha uma cidade"
                      ></S.Select>
                    ) : (
                      <S.Select
                        className="form-control"
                        id="city"
                        title="Escolha uma cidade"
                        name="city"
                        value={mail.city}
                        required
                        autoComplete="off"
                        onChange={handleChange}
                      >
                        <option disabled></option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </S.Select>
                    )}
                  </label>
                </S.InputContainer>
                <label htmlFor="message">
                  <S.InputP>Sua Mensagem*</S.InputP>
                  <S.TextArea
                    className="form-control"
                    id="message"
                    value={mail.message}
                    title="Preencha corretamente o campo Mensagem"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                  ></S.TextArea>
                </label>
                <S.SubmitButton type="submit" value="Enviar" />
              </S.Form>
            </S.FormContainer>
          </S.BlockContainer>
          <S.BlockContainer width="100%" style={{justifyContent: 'flex-start'}}>
            <S.H2 color="#fe7d0b">Contato</S.H2>
            <S.Divider width={50} style={{marginBottom: 30}}/>
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
            <S.MapContainer>
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.2879540771246!2d-37.42195397249182!3d-8.944986611180601!2m3!1f90!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x7087b593e0e73c3%3A0x50fbc7bbb1050357!2sTerra%20Viva%20%2B%20%7C%20Mais%20vida%20para%20sua%20fazenda!5e1!3m2!1spt-BR!2sbr!4v1602791602997!5m2!1spt-BR!2sbr"
                style={{ border: 0, width: "100%", height: "100%" }}
                aria-hidden="false"
              />
            </S.MapContainer>
          </S.BlockContainer>
        </S.BlockContainer>
      </div>
      <S.DialogContainer className="dialog">
        <S.DialogBox className="dialog-box">
          <S.H2>Mensagem enviada com sucesso!</S.H2>
          <S.P>Obrigado pelo contato, o responderemos o mais breve.</S.P>
          <S.CloseButton className="close-button" src="/images/close.png" />
        </S.DialogBox>
      </S.DialogContainer>
    </Layout>
  );
}
