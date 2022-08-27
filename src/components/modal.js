import { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished"
import { useSelector, useDispatch } from "react-redux";
import { setOpendedModal, setIsModalOn, toggleModalOn } from "../features/modalSlice";
import pallette from "../styles/pallette.css";
import { motion } from "framer-motion";
import fadein from "../styles/framer-motion/fadein";

const Modal = ({
    size = {width : "100%", height : "auto"},
    displayFlex = false,
    isOn = false,
    close = {on : true, handleClose : f => f},
    customStyle = {},
    children,
}) => {

    return (
        <>
            <Box className={isOn? "on" : null} size={size} style={customStyle} displayFlex={displayFlex}>
                {
                    close.on? <Exit className="close" onClick={(e)=>{close.handleClose(e)}}></Exit> : null
                }
                {children}
            </Box>
            {isOn? <Cover className="cover" onClick={(e)=>{close.handleClose()}}/> : null}
        </>
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
    background-color : rgba(0,0,0,0.2);
    z-index : 9998;
`
const Box = styled.div`
    position : fixed;
    top : 50vh;
    left : 50vw;
    transform : translate(-50%, -50%);
    padding : 1.5vmin;
    width : ${props => props.size.width};
    height : ${props => props.size.height};
    background-color : ${pallette.WHITE};
    display : none;
    z-index : 9999;
    padding : 3%;

    &.on {
        display : ${props=>props.displayFlex? "flex" : "unset"};
    }
`
const Exit = styled.div`
    width : 20px;
    height : 20px;
    background-color : ${pallette.RED};
    border-radius : 50%;
    position : absolute;
    right : 10px;
    top : 10px;

    &:hover::after {
        content : "x";
        position : absolute;
        color : ${pallette.WHITE};
        font-size : 5px;
        opacity : 0.6;
        width : 100%;
        height : 100%;
        display : flex;
        align-items : center;
        justify-content : center;
        top : -1px;
    }
`

export default Modal;
