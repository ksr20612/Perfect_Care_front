import { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished"
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOn, toggleModalOn } from "../features/modalSlice";
import pallette from "../styles/pallette.css";

const Modal = ({
    size = {width : "100%", height : "auto"},
    close = {on : true, callback : f => f},
    children,
}) => {

    const isOn = useSelector(state => state.modal.isModalOn);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setIsModalOn(false));
        if(typeof close.callback === "function") { close.callback() }
    }

    return (
        <>
            <Box className={isOn? "on" : null} size={size}>
                {
                    close.on? <Exit className="close" onClick={(e)=>{handleClose()}}></Exit> : null
                }
                {children}
            </Box>
            {isOn? <Cover className="cover" onClick={(e)=>{handleClose()}}/> : null}
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

    &.on {
        display : unset;
    }
`
const Exit = styled.div`
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
