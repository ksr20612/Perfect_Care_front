import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr12 = () => {

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,12)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Summary>
                    <Line>두려움은 실수를 만드는 재료!</Line>
                    <Line>꾸준한 실수 피드백으로 실수를 마주해보아요.</Line>
                    <Line>실패는 곧 새로운 도전의 증거,</Line>
                    <Line>실수에 대한 인식을 바꾼다면 더 많은 일을 시도할 수 있어요.</Line>
                </Summary>
            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    width : 95%;
    margin : 0 auto;
    margin-top : 4vh;
    position : relative;
`
const Line = styled.div`
    width : 100%;
    margin : 0 auto;
    padding : 2vmin;
    font-size : 4.0rem;
    padding-left : 4vmin;

    &:first-of-type {
        margin-top : 5vh;
    }
`

export default Scr12;