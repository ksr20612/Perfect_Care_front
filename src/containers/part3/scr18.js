import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr18 = () => {

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,18)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Summary>
                    <First>언제나 내 생각이 합리적이지만은 않다!</First>
                    <Second>완벽주의를 강화시키는 주범, 인지오류를 밝혀내자.</Second>
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
const First = styled.div`
    position : absolute;
    top : 15%;
    left : 10%;
    font-size : 4.0rem;
`
const Second = styled.div`
    position : absolute;
    top : 30%;
    left : 10%;
    font-size : 4.0rem;
`

export default Scr18;