import { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished"
import pallette from "../styles/pallette.css";
import Modal from "./modal";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalOn, toggleModalOn } from "../features/modalSlice";
import { motion } from "framer-motion";

const Color = ({
    item,
    isSelected = false,
    handleClick = f => f,
}) => {

    useEffect(()=>{
        console.log(item);
    })

    return (
        <>
            <Box onClick={()=>handleClick(item.name)} color={item.color}>
                {item.name}
                {isSelected && (
                    <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    animate={{ borderColor: item.color }}
                    transition={spring}
                    />
                )}
            </Box>
        </>
    )
}

const Box = styled.div`
    background-color : ${props=>props.color};
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px;
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
    font-size : 2.0rem;
    color : black;
    align-items : center;
    justify-content : center;

    & > div.outline {
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        border: 10px solid white;
        border-radius: 50%;
    }
`
const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};
const Bubble = styled.div`
    position : fixed;
    width : 50%;
    height : 10%;
    background-color : transparent;
    transform : translateY(170%);
    display : flex;
    justify-content: center;
    align-items : center;
    font-size : 3.2rem;
    word-break : keep-all;
    line-height : 150%;
    z-index : 10;
`  

export default Color;