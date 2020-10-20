import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: auto;
  max-width: 1140px;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  box-sizing: border-box;

  ${media.lessThan("1140px")`
    padding: 0 30px;
  `}
`
export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #ccc;
  margin: 60px 0;
`
export const ContactInfo = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 350px;
  flex-direction: column;
  box-sizing: border-box;
  /* background: papayawhip; */
  padding-right: 20px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`
export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;

  ${media.lessThan("783px")`
    flex-direction: column;
  `}
`
export const H2 = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Hind", sans-serif;
  font-weight: 600;
  color: #292929;
  font-style: normal;
  text-decoration: none;
  line-height: 1.334em;
  margin-bottom: 20px;
`
export const H3 = styled.h3`
  color: #292929;
  font-family: "Hind", Sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
`
export const P = styled.p`
  color: #5f656d;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.643em;
`
export const Divider = styled.hr`
  display: block;
  height: 1px;
  width: 18px;
  border: 0;
  border-top: 3px solid #fe7d0b;
  margin: 1em 0;
  padding: 0;
`
export const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  box-sizing: border-box;
  margin: 40px 10px 0;
`
export const WraperInfo = styled.div`
  flex-grow: 1;
`
export const Icon = styled.div`
  fill: ${props => (props.fill ? props.fill : "#cecfd0")};
  margin-right: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const Input = styled.input`
  width: 100%;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 22.5px;
  letter-spacing: 0px;
  padding: 11.5px 19px 16.5px 19px;
  background: #f5f6f6;
  color: #848a90;
  box-sizing: border-box;
  border: 1px solid #ebeced;
  border-radius: 4px;
  outline: none;

  :focus {
    background: #fff;
    box-shadow: 0 5px 32px rgba(103, 122, 141, 0.17);
  }

  ::placeholder {
    color: #e5e5e5;
  }
`
export const Select = styled.select`
  width: 100%;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 22.5px;
  letter-spacing: 0px;
  padding: 11.5px 19px 16.5px 19px;
  background: #f5f6f6;
  color: #848a90;
  box-sizing: border-box;
  border: 1px solid #ebeced;
  border-radius: 4px;
  outline: none;
  appearance: none;
  :focus {
    background: #fff;
    box-shadow: 0 5px 32px rgba(103, 122, 141, 0.17);
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  font-family: "Open Sans", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 22.5px;
  letter-spacing: 0px;
  padding: 11.5px 19px 16.5px 19px;
  background: #f5f6f6;
  color: #848a90;
  box-sizing: border-box;
  border: 1px solid #ebeced;
  border-radius: 4px;
  outline: none;
  resize: none;
  :focus {
    background: #fff;
    box-shadow: 0 5px 32px rgba(103, 122, 141, 0.17);
  }
`
export const InputP = styled.p`
  font-family: "Hind", Sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  font-style: normal;
  text-decoration: none;
  letter-spacing: 0px;
  text-align: inherit;
  color: #42474c;
  line-height: 1.2;
`
export const SubmitButton = styled.input`
  font-family: "Hind", Sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.32em;
  background: #fe7d0b;
  color: #ffffff;
  width: 120px;
  padding: 13.5px 29px 11.5px 29px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 20px;
  :hover {
    background-color: #292929;
    color: #ffffff;
  }
`
export const WrapElement = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: ${props => (props.center ? "center" : "none")};
  margin-bottom: ${props => (props.bottom ? props.bottom : "20px")};
  font-size: 15.5px;
  color: #5f656d;
  font-family: "Open Sans", Sans-serif;
  font-weight: 400;
  line-height: 1.643em;
`
export const WrapIcon = styled.div`
  width: 30px;
  min-width: 30px;
  height: auto;
`
export const SStyledLink = styled.a`
  color: #5f656d;
  text-decoration: none;
  font-weight: 300;
  outline: none;
  font-size: ${props => (props.size ? props.size + "px" : "13px")};
  transition: all 0.3s;
  margin-left: 10px;
  :hover {
    color: #fe7d0b;
  }
`
export const SocialLink = ({ icon, url, size }) => (
  <SStyledLink href={url} target="_blank" size={size}>
    <Icon name={icon} />
  </SStyledLink>
)

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
`
export const DialogContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding: 20px;
`

export const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 300px;
  border-radius: 3px;
  background: #fff;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
`

export const CloseButton = styled.img`
  width: 30px;
  position: absolute;
  top: -10px;
  right: -10px;
`
export const LineSpace = styled.div`
  margin-bottom: 10px;
`
