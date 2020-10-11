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
`;

    const HamburgerBoxStyled = styled.span`
    width: 35px;
    height: 35px;
    display: inline-block;
    position: relative;
    `;

    const HamburgerInnerStyled = styled.span`
    width: 100%;
    height: 3px;
    background-color: whitesmoke;
    position: absolute;
    right: 0;
    top: 50%;
    transition: background-color .1s .2s ease-in-out;
&::before {
        content: '';
        width: 50%;
        height: 3px;
        position: absolute;
        background-color: whitesmoke;
        right: 0;
        top: -10px;
        transition: transform .2s .1s ease-in-out;
    }
&::after {
        content: '';
        width: 50%;
        height: 3px;
        position: absolute;
        background-color: whitesmoke;
        left: 0;
        top: 10px;
        transition: transform .2s .1s ease-in-out;
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