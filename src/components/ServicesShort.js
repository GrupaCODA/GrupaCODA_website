import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServicesShort = () => {
  const ServicesDivStyled = styled.div`
    width: 100%;
    height: 100vh;
    border-top: 1px solid;
    border-color: #a5a5a5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const SubjectStyled = styled.h2`
    font-size: 30px;
    color: #1a1a1a;

    @media (min-width: 768px) {
      font-size: 50px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  const TextStyle = styled.p`
    width: 100%;
    height: 80px;
    border-top: 1px solid;
    border-color: #a5a5a5;
    padding: 25px;
    color: #1a1a1a;
    font-size: 25px;
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
    font-weight: 500;
    margin: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      height: 120px;
      font-size: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  `;

  return (
    <StyledLink to="/services">
      <ServicesDivStyled>
        <SubjectStyled>NASZE USŁUGI</SubjectStyled>
        <TextStyle>Inteligentne rozwiązania dla domu marki GRENTON</TextStyle>
        <TextStyle>Monitoring</TextStyle>
        <TextStyle>Domofony</TextStyle>
        <TextStyle>Sieci światłowodowe</TextStyle>
        <TextStyle>Projektowanie sieci telekomunikacynych</TextStyle>
        <TextStyle>Istalacje elektryczne i teletechniczne</TextStyle>
        <TextStyle underline>Zobacz więcej</TextStyle>
      </ServicesDivStyled>
    </StyledLink>
  );
};
export default ServicesShort;
