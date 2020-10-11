import React from 'react';
import styled from "styled-components";

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
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TextStyle = styled.p`
z-index: 2;
color: #353535;
letter-spacing: 2px;
font-weight: light;
font-size: 30px;
margin: 30px
`;

const SubjectStyled = styled.h2`
       
    font-size: 30px;
    color: #000000;
    `;


const MainInfo = () => {

    return (
        <SectionStyled>
            <SubjectStyled>O NAS</SubjectStyled>
            <TextStyle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tellus at urna hendrerit aliquet. Proin vestibulum, sapien id pulvinar luctus
            </TextStyle>
        </SectionStyled>
    )
}

export default MainInfo;