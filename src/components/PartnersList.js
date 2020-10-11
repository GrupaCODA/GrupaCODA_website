import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';



const PartnersListStyled = styled.section`
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

const PartnersLogoStyled = styled.img`
    width: 50%;
    height: auto;
    margin: 20px;
    `;


const PartnersList = ({items}) => (


    items.map(({image, id}) => {
        return (
            <PartnersListStyled key={id}>
                <PartnersLogoStyled className='image' src={image}/>
            </PartnersListStyled>
        )
    })
)

PartnersList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string
    })).isRequired
};

PartnersList.defaultProps = {
    items: []
}
export default PartnersList;