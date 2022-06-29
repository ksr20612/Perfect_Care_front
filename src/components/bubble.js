import { useState, useEffect } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished"
import pallette from "../styles/pallette.css";
import Modal from "./modal";

const Bubble = ({
    title = `재앙화 사고`,
    children
}) => {

    // 0 : default, 1 : flipped, 2 : popup
    const [status, setStatus] = useState(0);

    return (
        <Box className={status===1? "clicked" : null} onClick={(e)=>{setStatus(1)}}>
            <Title>{title}</Title>
            <Speech>{children}</Speech>
            <Modal>

            </Modal>
        </Box>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    margin : 1vmin;
    padding : 1.5vmin;
    word-break : keep-all;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    background-color : ${pallette.GREY};
    border-radius : 10%;

    &.clicked > div:first-child {
        opacity : 1;
    }

    &.clicked > div:nth-child(2) {
        font-size : 1.6rem;
        transform : translateY(0);
    }

`
const Title = styled.div`
    opacity : 0;
    transition : all .3s ease-in;
`
const Speech = styled.div`
    font-size : 2.4rem;
    font-family : "Noto_medium";
    transform : translateY(-2vh);
    transition : all .3s ease-in;
`

export default Bubble;