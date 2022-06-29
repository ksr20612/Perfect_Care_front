import { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished"
import pallette from "../styles/pallette.css";

const Modal = ({
    size = {width : "100%", height : "auto"},
    handleClose,
    children,
}) => {

    const [isOn, setIsOn] = useState(false);
    const handleClick = (e) => {

    }

    return (
        <Cover className={isOn? "on" : null}>
            <Box size={size}>
                {
                    handleClose? <Close onClick={(e)=>{}}></Close> : null
                }
                {children}
            </Box>
        </Cover>
    )
}

const Cover = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : rgba(0,0,0,0.3);
    display : none;
    pointer-events : none;
`
const Box = styled.div`
    position : relative;
    padding : 1.5vmin;
    width : ${props => props.size.width};
    height : ${props => props.size.height};
`
const Close = styled.div`
    width : 50px;
    height : 50px;
    background-color : ${pallette.RED};
    border-radius : 50%;
    position : relative;

    &:hover::after {
        content : "x";
        position : absolute;
        color : #666;
        font-size : 10px;
    }
`

export default Modal;
