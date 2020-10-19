import React, {useState} from "react";
import styled from "styled-components";

import RouterNav from "./RouterNav";


const Hamburger = () => {

    const HamburgerStyled = styled.button`
    padding: 10px;
    z-index: 99;
    display: inline;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin-right: 0;
    
    @media(min-width: 1024px) {
    
    display: none;
    
    }
`;

    const HamburgerBoxStyled = styled.span`
    width: 35px;
    height: 35px;
    display: inline-block;
    position: relative;
    
    @media(min-width: 768px) {
   
    width: 50px;
    height: 50px;
        
    }
    `;

    const HamburgerInnerStyled = styled.span`
    width: 100%;
    height: 3px;
    background-color: #1a1a1a;
    position: absolute;
    right: 0;
    top: 50%;
    
        @media(min-width: 768px) {
   
    
    height: 4px;
        
    }
    
&::before {
        content: '';
        width: 50%;
        height: 3px;
        position: absolute;
        background-color: #1a1a1a;
        right: 0;
        top: -10px;
    
    @media(min-width: 768px) {
    
        height: 4px;
        top: -15px;
        
    }
    }
    
&::after {
        content: '';
        width: 50%;
        height: 3px;
        position: absolute;
        background-color: #1a1a1a;
        left: 0;
        top: 10px;
    
    @media(min-width: 768px) {
   
        top: 15px;
        height: 4px;
        
    }
    }
`;
    const [isVisible, setIsVisible] = useState({
        initial: false,
        clicked: null,
    })

    const handleVisibility = () => {
        if(isVisible.initial === false) {
            setIsVisible({
                initial: null,
                clicked: true,
            })
        } else if(isVisible.clicked === true) {
            setIsVisible({
                clicked: !isVisible.clicked
            })
        } else if(isVisible.clicked === false) {
            setIsVisible({
                clicked: !isVisible.clicked
            })
        }
    };

    return (
        <div>
            <HamburgerStyled onClick={handleVisibility}>
                <HamburgerBoxStyled>
                    <HamburgerInnerStyled class="hamburger__inner" />
                </HamburgerBoxStyled>
            </HamburgerStyled>
            <RouterNav visibility={isVisible} unActive={handleVisibility}/>
        </div>
    )
}
export default Hamburger;