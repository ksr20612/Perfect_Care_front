import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";

const SpeechBubble = ({
    content = "타인에게 엄격하다",
    style = {},
    onCheck = f => f,
    checked = false,
    children,
    delay = 0,
}) => {

    return (
        <Bubble style={style} className={checked? "checked" : null} onClick={()=>onCheck()}>
            {children}
            <div>{content}</div>
        </Bubble>
    )
}
const Bubble = styled.div`
    width : 5%;
    height : 20%;
    position : absolute;
    font-size : 1.8rem;
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
    }
    & > div {
        position : absolute;
    }
    &.checked > svg {
        filter : brightness(90%) saturate(250%) drop-shadow(5px 5px #aaa);
    }

`

export default SpeechBubble;