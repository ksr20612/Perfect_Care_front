import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import CheckBlue from "../../assets/check_blue.png";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr1 = () => {

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,1)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>나에게 이런 기준이 있었어요.</div>
                <Data></Data>
                <div>이전 기준을 이렇게 변경해 보았어요.</div>
                <Data></Data>
                <motion.span initial="hidden" animate="visible" variants={fadein} custom={2}>나의 가혹한 기준을 변경했다면, 이제 근본적인 원인을 바꾸러 가볼까요?</motion.span>
            </Box>
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
        display : relative;

        &:not(:last-of-type){
            margin-top : 4vh;
        }

        &:before {
            content : "";
            display : absolute;
            width : 12vmin;
            height : 12vmin;
            background-image : url(${CheckBlue});
            background-size : contain;
            background-repeat: no-repeat;
            background-position: center center;
            margin-right : 1vw;
        }
    }

    & > span:last-of-type {
        font-size : 3.2rem;
        display : inline-block;
        width : 100%;
        text-align : center;
        padding-top : 4vh;
    }
`
const Data = styled.span`
    width : calc(100% - 8vmax);
    height : 16vh;
    display : inline-block;
    background-color : ${pallette.BLUISH};
    border-radius : 1.5vmin;
    margin-left : 8vmax;
`

export default Scr1;