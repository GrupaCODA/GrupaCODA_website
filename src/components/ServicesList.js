import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';



const ServicesListStyled = styled.div`
    z-index: 1;
    width: 100%;
    height: auto;
    margin-top: 50px;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    border: none;
    
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`;

const ServicesImageStyled = styled.img`
    width: 100%;
    height: auto;
    margin: 20px;
    `;

const TextStyle = styled.p`
color: #1a1a1a;
font-weight: light;
font-size: 15px;
margin: 30px
`;

const SubjectStyled = styled.h2`
       
    font-size: 30px;
    color: #1a1a1a;
    `;

const ServicesList = ({items}) => (

    items.map(({image, id, name, description}) => {
        return (
            <ServicesListStyled key={id}>
                <SubjectStyled>{name}</SubjectStyled>
                <ServicesImageStyled src={image}/>
                <TextStyle>{description}</TextStyle>
            </ServicesListStyled>
        )
    })
)

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