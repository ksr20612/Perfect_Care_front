import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { motion } from "framer-motion";

const ProgressMap = () => {

    return (
        <Box as={motion.div} initial={{opacity : 0, y : -20}} animate={{opacity : 1, y : 0}} exit={{opacity : 0, y : -20}}>
            <Bulge></Bulge>
        </Box>
    )
}

const Bulge = styled.div`
    width : 0;
    height : 0;
    border-top : 30px solid transparent;
    border-left : 15px solid transparent;
    border-right : 15px solid transparent;
    border-bottom : 30px solid white;
    z-index : 1;
    position : absolute;
    top : calc(-30px - 3vh);
    right : calc(3vw - (8px / 2));
`
const Box = styled.div`
    position : relative;
    width : 80vw;
    height : 80vh;
    background-color : ${pallette.WHITE};
    position : fixed;
    top : 8vh;
    right : 2vw;
    border-radius : 1%;
    box-shadow : 10px 10px 20px #aaa;
`

export default ProgressMap;