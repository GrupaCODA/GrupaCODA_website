import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {DisplayBlock, staggerText} from "./animation";


import Hero from './../assets/opticalFiber.jpg';


const HeroImageStyled = styled.div`
width: 100%;
height: 100vh;
top: 0;
margin: 0;
padding: 0;
background-image: url('${Hero}');
background-size: cover;
background-position: 50% 50%;
overflow: hidden;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: -1;

  &::after {
    content: '';
    background: rgba(0, 0, 0, .2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    }
`;

const TextStyle = styled.p`
text-align: center;
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
const SubjectStyled = styled.h1`

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

const HeroImageHome = () => {

    let TextSub1 = useRef(null);
    let TextSub2 = useRef(null);

    useEffect(() => {

        staggerText(TextSub1, TextSub2)
        DisplayBlock(TextSub1, TextSub2)
    })



    return (
        <HeroImageStyled>
            <TextStyle ref={el => (TextSub1 = el)} color='#FFFFFF' backgroundColor='transparent'>POZNAJ TECHNOLOGIE WRAZ Z</TextStyle>
            <SubjectStyled ref={el => (TextSub2 = el)} color='#FFFFFF' backgroundColor='#1a1a1a'>
                GRUPA CODA
            </SubjectStyled>
        </HeroImageStyled>
    )
}

export default HeroImageHome;