import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const ServicesListStyled = styled.div`

    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    margin-top: 50px;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    border: none;
`;

const ServicesImageStyled = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${props => props.background});
    width: 100%;
  height: 100vh;

background-repeat: no-repeat; 
background-position: center;      
webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover; 
    
    
         display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
      &::after {
    content: '';
    background: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    }

    `;

const TextStyle = styled.p`
color: #FFFFFF;
text-align: center;
font-weight: light;
font-size: 20px;
margin: 30px;
z-index: 1;
`;

const SubjectStyled = styled.h2`
       
    font-size: 30px;
    color: #FFFFFF;
z-index: 1;
    `;

const ButtonStyle = styled.button`
margin: 15px;
height: 30px;
width 80%;
border-radius: 25px;
background-color: #1a1a1a;
border-color: #1a1a1a;
border: 3px solid;
cursor: pointer;
font-size: 15px;
color: #FFFFFF;
text-decoration: none;
z-index: 1;

display: flex;
align-items: center;
justify-content: center;

&:hover, &:focus {
outline: none;
background: #FFFFFF;
color: #1a1a1a;
}
`;


const ServicesList = ({items}) => (

    items.map(({image, id, name, description}) => {

        return (
            <ServicesListStyled key={id}>
                <ServicesImageStyled className='bg' background={image}>
                    <SubjectStyled>{name}</SubjectStyled>
                    <TextStyle>{description}</TextStyle>
                    <ButtonStyle as={Link} to='contact'>Zapytaj o wycenę</ButtonStyle>
                    </ServicesImageStyled>
            </ServicesListStyled>
        )
    })
);

ServicesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    })).isRequired
};

ServicesList.defaultProps = {
    items: []
}
export default ServicesList;