import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { motion } from "framer-motion";
import fadein from "../styles/framer-motion/fadein";

const AnswerBox = ({
    title = "",
    index = "",
    styles = {},
    children
}) => {

    return (
        <Box style={styles} as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1.2}>
            <Question>{title}<span>{index}</span></Question>
            {children}
        </Box>
    )
}

const Box = styled.div`
    display : flex;
    margin : 0 auto;
    font-size : 2.6rem;
    width : 100%;
    flex-direction : column;
    align-items : unset !important;

    & > div:first-of-type {
        margin : 2vh 0;
    }

`
const Question = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;

    & > span {
        font-size : 1.6rem;
    }
`

export default AnswerBox;