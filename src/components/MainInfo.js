import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {slideUpText} from "./animation";

import InfoImage from '../assets/infoImage.jpg'

const SectionStyled = styled.section`
width: 100%;
height: 100vh;
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 1024px) {
    
    flex-direction: row-reverse;
    
    }
`;

const TextStyle = styled.p`
z-index: 2;
color: #1a1a1a;
letter-spacing: 2px;
font-weight: light;
font-size: 30px;
margin: 30px;

@media (min-width: 768px) {
    font-size: 40px;
    margin: 50px;
}

@media (min-width: 1024px) {
    font-size: 30px;
    margin: 20px;
}
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



const SvgStyled = styled.svg`

width: 20%;
height: auto;
color: #1a1a1a;
margin-top: 50px;

@media (min-width: 768px) {

    width: 15%;
}

@media (min-width: 1024px) {

    display: none;
}

`;

const ImageStyled = styled.img`

width: 100%;
display: none;

@media (min-width: 1024px) {

    display: inline;
}

`;const ImageInnerDivStyled = styled.div`

width 50%;
opacity: 0;
padding: 30px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (min-width: 1024px) {

    opacity: 1;
}

`;

const TextInnerStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

@media (min-width: 1024px) {

width: 50%;

}

`;


const MainInfo = () => {

    let image = useRef(null)
    let subject = useRef(null)
    let textInner = useRef(null)

    useEffect(() => {
        slideUpText(image, subject, textInner)
    })

    return (
        <SectionStyled>
            <SvgStyled ref={el => (image = el)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </SvgStyled>
            <TextInnerStyled>
            <SubjectStyled ref={el => (subject = el)}>O NAS</SubjectStyled>
            <TextStyle ref={el => (textInner = el)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tellus at urna hendrerit aliquet. Proin vestibulum, sapien id pulvinar luctus
            </TextStyle>
            </TextInnerStyled>
            <ImageInnerDivStyled>
            <ImageStyled src={InfoImage}/>
            </ImageInnerDivStyled>
        </SectionStyled>
    )
}

export default MainInfo;