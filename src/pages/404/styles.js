import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 253px);
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 100px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;

  img {
    width: 100%;
    max-width: 420px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-family: 'Hind', sans-serif;
  font-weight: 600;
  color: #444;
  letter-spacing: 0;
  transition: all 0.3s;
`;
