import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import MovieClip from "../../components/movieClip";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr4 = () => {

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,4)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <MovieClip width="100%" height="100%"/>
            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    display : flex;
    align-items : center;
    justify-content : center;

    & > div {
        margin-top : 5vh;
        font-size : 2.6rem;
        width : 80%;
        height : 60vh;
    }
`

export default Scr4;