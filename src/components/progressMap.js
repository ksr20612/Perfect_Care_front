import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { motion } from "framer-motion";

const ProgressMap = () => {

    return (
        <Box as={motion.div} >
            <Bulge></Bulge>
        </Box>
    )
}

const Bulge = styled.div`
    width : 0;
    height : 0;
    border : 50px solid transparent;
    border-bottom : 50px solid black;
    position : absolute;
`
const Box = styled.div`
    position : relative;
    width : 80vw;
    height : 80vh;
    background-color : ${pallette.WHITE};
    position : fixed;
    top : 8vh;
    right : 2vw;
    box-shadow : 20px 20px 20px #aaa;
`

export default ProgressMap;