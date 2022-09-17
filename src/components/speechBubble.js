import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import pallette from "../styles/pallette.css";
import fadein from "../styles/framer-motion/fadein";

const SpeechBubble = ({
    content = "타인에게 엄격하다",
    style = {},
    onCheck = f => f,
    checked = false,
    children,
    delay = 0,
}) => {

    useEffect(()=>{
        console.log(delay);
    })

    return (
        <Bubble style={style} className={checked? "checked" : null} onClick={()=>onCheck()}>
            {children}
            <div>{content}</div>
        </Bubble>
    )
}
const Bubble = styled(motion.div)`
    width : 5%;
    height : 20%;
    position : absolute;
    font-size : 5%;
    font-family : "SemiBold";
    color : #292724;
    background-size : contain;
    background-position : center center;
    display : flex;
    align-items : center;
    justify-content : center;
    cursor : pointer;
    text-align : center;
    padding : 0 10%;
    word-break : keep-all;

    & > svg {
        position : absolute;
        filter : grayscale(0.8);
    }
    & > div {
        position : absolute;
        padding : 12%;
    }
    &.checked > svg {
        filter : brightness(90%) saturate(250%) drop-shadow(5px 5px #aaa);
    }

`

export default SpeechBubble;