import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";

const Scr1 = () => {

    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,3)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                본 프로그램은 <br/>
                사용자가 언제 어디서든 <br/>
                인지행동치료를 경험하여 <br/>
                완벽을 조절하도록 만들어진 프로그램이며, <br/>
                완벽주의를 <strong>"없애기"</strong>위한 프로그램이 <strong>아닙니다</strong>.
            </Box>
        </>
    )
}

const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 10vh;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 3.2rem;
`

export default Scr1;