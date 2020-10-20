import React, { useState, useEffect } from "react";

import Layout from "../../components/layout";
import * as S from "./styles";
import SEO from "../../components/seo";
import Icon from "../../components/icons";

export default function Contact({
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
    async function fetchStates(stateId) {
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
      .then((_) => setMail(initialState))
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
        title="Contato"
        description="Contato Sanity Milk"
        meta={[
          {
            name: "keywords",
            content: "sanity milk, contato",
          },
        ]}
      />
      <S.Container>
        <S.InfoContainer>
          <S.ContactInfo>
            <S.Divider />
            <S.H2>Informações de contato</S.H2>
            <S.WrapElement>
              <S.WrapIcon>
                <Icon name="map-marker-alt" size="24px" color="#aeb6be" />
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
                    <img
                      src="/images/whatsapp-logo-5.png"
                      alt=""
                      width="18px"
                    />
                  </a>
                  <S.SStyledLink
                    target="_blank"
                    href="https://bit.ly/3dOUiLG"
                    size="15.5px"
                  >
                    87 98154-5491
                  </S.SStyledLink>
                </S.WrapElement>
                <S.WrapElement bottom="0" center>
                  <Icon
                    name={["far", "envelope"]}
                    color="#aeb6be"
                    size="15px"
                  />
                  <S.SStyledLink
                    target="_blank"
                    href="mailto:contato@terravivamais.com.br"
                    size="15.5px"
                  >
                    contato@terravivamais.com.br
                  </S.SStyledLink>
                </S.WrapElement>
              </div>
            </S.WrapElement>
          </S.ContactInfo>
          <S.FormContainer>
            <S.Divider />
            <S.H2>Formulário para contato</S.H2>
            <S.P>
              Se você deseja uma consulta gratuita, comece preenchendo o
              formulário:
            </S.P>
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
        </S.InfoContainer>

        <S.MapContainer>
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.2879540771246!2d-37.42195397249182!3d-8.944986611180601!2m3!1f90!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x7087b593e0e73c3%3A0x50fbc7bbb1050357!2sTerra%20Viva%20%2B%20%7C%20Mais%20vida%20para%20sua%20fazenda!5e1!3m2!1spt-BR!2sbr!4v1602791602997!5m2!1spt-BR!2sbr"
            style={{ border: 0, width: "100%", height: "100%" }}
            aria-hidden="false"
          />
        </S.MapContainer>
      </S.Container>

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
