import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import TextArea from "../../components/textArea";
import GuruBox from "../guruBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";

const Scr13 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,13)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                문제 / 정답 1
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;

    & > div {
        font-size : 2.6rem;
        display : flex;
        align-items : center;
    }

    & > .subQuestion {
        padding-bottom : 2vh;
    }
`
const Question = styled.div`
    margin : 5vh auto;
    background-color : ${lighten(0.4, pallette.YELLOW)};
    width : 85%;
    padding : 2.5vmax;
    display : flex;
    justify-content : center;
`
const Answer = styled.div`
    margin : 0 auto;
    width : 85%;
    flex-direction : column;
    align-items : unset !important;

    & > div {
        margin : 2vh 0;
    }
`


export default Scr13;