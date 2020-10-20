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

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.pad};
  width: 100%;
  background-color: #f8f9f9;
  background-image: url(/images/bgpattern3.png);
  background-position: bottom center;
  background-repeat: repeat-x;
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

  ${media.lessThan('770px')`
    background-position: 75%;
  `}
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 120px;
  background: #f18725;
  padding: 50px;
`;

export const ServiceContent = styled.div`
  width: 100%;
  max-width: 500px;
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
  max-width: ${props => (props.width ? props.width : '1140')}px;
  justify-content: center;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  padding: 10px;
`;

export const PartnerContainer = styled.div`
  display: flex;
  width: 100%;
  background: #f8f9f9;
  margin: 50px 0;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 280px;
  height: 450px;
  align-items: flex-end;
  flex-direction: column;
  box-sizing: border-box;

  .image-container {
    width: 100%;
    height: 280px;
    padding: 0;
    background: red;

    img {
      border-radius: 5px 5px 0 0;
      object-fit: cover;
    }
  }

  div {
    display: flex;
    width: 100%;
    background: #fff;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;

  }
`
