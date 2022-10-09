import { useState, useEffect } from "react";
import styled from "styled-components";
import lightbulb from "../assets/lightbulb.svg";
import { motion } from "framer-motion";
import fadein from "../styles/framer-motion/fadein";

const Tip = ({
    styleOverrides = {},
    content = "",
}) => {

    return (
        <Box style={styleOverrides} as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1.5}>
            <div></div>
            <div>{content}</div>
        </Box>
    )
}

const Box = styled.div`
    width : 100%;
    min-height : 100px;
    background-color : #ddd;
    display : flex;
    align-items : center;
    justify-content : center;
    padding : 5%;
    font-size : 2.0rem;
    margin-top : 5%;
    border-radius : 0.5em;
    word-break : keep-all;

    & > div:first-child {
        background : url(${lightbulb});
        width : 80px;
        height : 80px;
        background-size : contain;
        background-repeat : no-repeat;
        background-position : center;
        margin-right : 10px;
    }
    & > div:last-child {
        word-break : keep-all;
    }

`

export default Tip;