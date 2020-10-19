import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {slideUpText} from "./animation";

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
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    font-weight: 500;
    margin: 0;
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
`;

    let service1 = useRef(null)
    let service2 = useRef(null)
    let service3 = useRef(null)
    let service4 = useRef(null)
    let service5 = useRef(null)

    useEffect(() => {
        slideUpText(service1, service2, service3, service4, service5)
    })

    return (
        <StyledLink to='/services'>
        <ServicesDivStyled>
            <SubjectStyled>NASZE USŁUGI</SubjectStyled>
            <TextStyle ref={el => (service1 = el)}>Sieci światłowodowe</TextStyle>
            <TextStyle ref={el => (service2 = el)}>Monitoring</TextStyle>
            <TextStyle ref={el => (service3 = el)}>PPOŻ.</TextStyle>
            <TextStyle ref={el => (service4 = el)}>Domofony</TextStyle>
            <TextStyle ref={el => (service5 = el)} underline>Zobacz więcej</TextStyle>
        </ServicesDivStyled>
        </StyledLink>
)
}
export default ServicesShort;