import React from 'react';
import styled from 'styled-components';

import Hero from "../assets/HeroImage-service.jpg";

const PageNotFindStyled = styled.div`
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

padding: 10px;
z-index: 2;
color: #FFFFFF;
font-weight: 500;
font-size: 30px;
margin: 0;

`;

const PageNotFind = () => {
    return(
        <PageNotFindStyled>
            <SubjectStyled>404 - Page not found <br/>
            Please use Navigation bar to select page</SubjectStyled>
        </PageNotFindStyled>
    )
}
export default PageNotFind;