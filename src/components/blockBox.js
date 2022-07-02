import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { lighten } from "polished";

const fadeStyles = {
    opacity : "0",
    transform : "translateY(5vh)",
    transition : "all .5s ease-out",
}

const BlockBox = ({
    title = "상황",
    content = "",
    fadein = false,
}) => {

    const [on, setOn] = useState(false);

    useEffect(()=>{
        if(fadein) {
            setTimeout(()=>{
                setOn(true);
            }, 300);
        }
    }, []);

    return (
        <Box className={on? "on" : null} style={fadein? fadeStyles : null}>
            <div>{title} :</div>
            <div>{content}</div>
        </Box>
    )
}

const Box = styled.div`
    background-color : ${lighten(0.7, pallette.BLUE)};
    width : 100%;
    padding : 1.5vmin;
    display : flex;
    font-size : 2.0rem;
    border-radius : 1vmin;
    align-items : center;

    &.on {
        opacity : 1 !important;
        transform : unset !important;
    }
    &:not(:first-of-type) {
        margin-top : 1vh;
    }
    & > div:first-of-type {
        font-size : 2.4rem;
        font-weight : bolder;
        margin-right : 1vmin;
    }
`

export default BlockBox;