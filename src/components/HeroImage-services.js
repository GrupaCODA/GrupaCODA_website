import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {DisplayBlock, staggerText} from "./animation";


import Hero from './../assets/HeroImage-service.jpg';


const HeroImageStyled = styled.div`
width: 100%;
height: 100vh;
top: 0;
margin: 0;
padding: 0;
background-image: url('${Hero}');
background-size: cover;
background-position: 100% 50%;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1;
  &::after {
    content: '';
    background: rgba(0, 0, 0, .3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
`;

const SubjectStyled = styled.h2`
display: none;
width: 60%;
padding: 10px;
z-index: 2;
color: ${props => props.color};
font-weight: 500;
font-size: 30px;
background-color: ${props => props.backgroundColor};
margin: 0;

@media (min-width: 768px) {

    font-size: 40px;
}
`;

const HeroImageService = () => {

    let TextSub = useRef(null);

    useEffect(() => {

        staggerText(TextSub)
        DisplayBlock(TextSub)
    })



    return (
        <HeroImageStyled>
            <SubjectStyled ref={el => (TextSub = el)} color='#FFFFFF' backgroundColor='#1a1a1a'>
                NASZE USŁUGI
            </SubjectStyled>
        </HeroImageStyled>
    )
}

export default HeroImageService;