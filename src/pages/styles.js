import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  background: ${props => (props.bg ? props.bg : '#FFF')};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.pad};
  width: 100%;
  background-color: #f8f9f9;
  background-image: url('/images/bgpattern3.png');
  background-position: bottom center;
  background-repeat: repeat-x;
  box-sizing: border-box;

  #servicos {
    ${media.lessThan('770px')`
      padding-left: 15px;
      padding-right: 15px;
    `}
  }
`;

export const CenteredContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 10px;
  max-width: 1140px;
  margin: 0 auto;
  padding: 50px 0;
  justify-items: center;
  box-sizing: border-box;

  .service-content-image {
    width: 100%;
    max-width: 450px;
  }

  ${media.lessThan('770px')`
    padding-left: 15px;
    padding-right: 15px;
  `}
`;

export const H1 = styled.h1`
  font-size: ${props => (props.size ? props.size : '34px')};
  font-family: 'Hind', sans-serif;
  font-weight: 600;
  color: ${props => (props.color ? props.color : '#fe7d0b')};
  letter-spacing: 0;
  transition: all 0.3s;
  text-transform: ${props => props.transform};
  :hover {
    color: ${props => props.hover};
  }
`;

export const H2 = styled.h2`
  font-family: 'Hind', sans-serif;
  font-size: ${props => (props.size ? props.size : '24px')};
  font-weight: 600;
  text-transform: ${props => (props.tt ? props.tt : 'uppercase')};
  line-height: 1.44em;
  letter-spacing: 0px;
  color: ${props => (props.color ? props.color : '#FFF')};
`;

export const P = styled.p`
  color: ${props => (props.color ? props.color : '#5f656d')};
  font-family: 'Open Sans', Sans-serif;
  font-size: ${props => (props.size ? props.size : '15px')};
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1.643em;
  margin-bottom: 20px;
  letter-spacing: 0;
`;

export const Divider = styled.hr`
  display: block;
  height: 1px;
  width: ${props => props.width ? props.width : '18'}px;
  border: 0;
  border-top: 3px solid #fe7d0b;
  margin: 1em 0;
  padding: 0;
  margin-top: 10px;
`;

export const Hero = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 550px;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 100px;
  box-sizing: border-box;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 230px;
  background: #fe7d0bdb;
  padding: 50px;
  box-sizing: border-box;

  ${media.lessThan('770px')`
    max-height: 400px;
    padding: 0;
    padding-top: 50px;
    padding-bottom: 50px;
  `}
`;

export const ServiceContent = styled.div`
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;

export const KnowMoreButton = styled.button`
  width: 350px;
  background-color: #31c952;
  border: none;
  padding: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

export const BlockContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => (props.width ? props.width : '1140px')};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  box-sizing: border-box;

  ${media.lessThan('770px')`
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
  `}
`;

export const PartnerContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 70px 0;
  justify-content: center;
  align-items: center;

  ${media.lessThan('770px')`
    &:first-child {
      flex-direction: column;
    }
  `}
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 260px;
  height: 450px ;
  align-items: flex-end;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: relative;
  top: 0;
  transition: all .1s ease-in;

  &:hover {
    top: -5px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
  }

  .card-content {
    display: flex;
    width: 100%;
    background: #fff;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
  }
`;

export const CardImage = styled.div`
    width: 100%;
    height: 260px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px 5px 0 0;
    box-sizing: border-box;
`;

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
`;

export const WrapIcon = styled.div`
  width: 30px;
  min-width: 30px;
  height: auto;
`;

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
`;

export const LineSpace = styled.div`
  margin-bottom: 10px;
`;

export const Block = styled.div`
  ${media.lessThan("1140px")`
    padding: 0 30px;
  `}
`;

export const FormContainer = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
`;

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
  padding: 10px 19px 8px 19px;
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
`;

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
  padding: 10px 19px 8px 19px;
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
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
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
`;

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
`;

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
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 250px;
  background: #ccc;
  margin-top: 10px;
`;

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
`;

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
`;

export const CloseButton = styled.img`
  width: 30px;
  position: absolute;
  top: -10px;
  right: -10px;
`;

