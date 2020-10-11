import React from 'react';
import styled from "styled-components";


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
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
`;

const TextStyle = styled.p`
width: 60%;
padding: 10px;
z-index: 2;
color: ${props => props.color};
font-weight: 500;
font-size: 30px;
background-color: ${props => props.backgroundColor};
margin: 0;
`;
const SubjectStyled = styled.h1`
width: 60%;
padding: 10px;
z-index: 2;
color: ${props => props.color};
font-weight: 500;
font-size: 30px;
background-color: ${props => props.backgroundColor};
margin: 0;
`;




const HeroImage = () => {

    return (
        <HeroImageStyled>
            <TextStyle color='#FFFFFF' backgroundColor='transparent'>POZNAJ TECHNOLOGIE WRAZ Z</TextStyle>
            <SubjectStyled color='#FFFFFF' backgroundColor='#000000'>
                GRUPA CODA
            </SubjectStyled>
        </HeroImageStyled>
    )
}

export default HeroImage;