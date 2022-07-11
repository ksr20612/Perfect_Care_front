import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SamplePic from "../assets/sample.jpg";
import pallette from "../styles/pallette.css";
import { darken, lighten } from "polished";
import { motion } from "framer-motion";
import spring from "../styles/framer-motion/spring";

const CardResult = ({
    content = "",
    handleClick = f=>f,
}) => {

    const [isOn, setIsOn] = useState(false);

    return (
        <Emotion as={motion.div} animate={isOn? "on" : "off"} variants={spring} custom={0.3} onMouseEnter={()=>{setIsOn(true)}} onMouseLeave={()=>{setIsOn(false)}} onClick={()=>{handleClick(content)}}>
            {content}
            <Delete as={motion.div} initial="hidden" animate={isOn? "visible" : "hidden"} variants={spring} custom={0.3} onClick={(e)=>{handleClick()}}>지우기</Delete>
        </Emotion>
    )
}
const Emotion = styled.span`
    width : 100px;
    font-size : 1.6rem;
    border-radius : 10px; 
    background-color : transparent;
    border : 1px solid ${pallette.BLACK};
    display : flex;
    justify-content : center;
    align-items : center;
    position : relative;
    cursor : pointer;

    & + & {
        margin-left : 10px;
    }
`
const Delete = styled.div`
    font-size : 1.2rem;
    position : absolute;
    top : -20px;
    color : red;
`

export default CardResult;