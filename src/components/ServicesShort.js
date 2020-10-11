import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const ServicesShort = () => {

    const ServicesDivStyled = styled.div`
    
    width: 100%;
    height: 100vh; 
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    `;

    const SubjectStyled = styled.h2`
       
    font-size: 30px;
    color: #000000;
    `;

    const StyledLink = styled(Link)`
    
    text-decoration: none;
    
`;

    const TextStyle = styled.p`
    
    color: #000000;
    font-size: 25px;
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    font-weight: 500;
`;
    return (
        <StyledLink to='/services'>
        <ServicesDivStyled>
            <SubjectStyled>NASZE USŁUGI</SubjectStyled>
            <TextStyle>Sieci światłowodowe</TextStyle>
            <TextStyle>Monitoring</TextStyle>
            <TextStyle>PPOŻ.</TextStyle>
            <TextStyle>Domofony</TextStyle>
            <TextStyle underline>Zobacz więcej</TextStyle>
        </ServicesDivStyled>
        </StyledLink>
)
}
export default ServicesShort;