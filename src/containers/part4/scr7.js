import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Paper } from "../../styles/components/paper";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const Scr7 = () => {

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,7)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Name>타 기업 사례3</Name>
                <Content>
                    <div></div>
                    <div></div>
                </Content>
            </Box>
        </>
    )
}
const Box = styled(Paper)`
    margin-top : 8vh;
    padding-left : min(95px, 5vw);
    text-align : center;
`
const Name = styled.div`
    font-size : 4.0rem;
    font-family : "Medium";
    margin-bottom : 3vh;
    width : 100%;
`
const Content = styled.div`
    font-size : 2.0rem;
    font-family : "Regular";
    color : ${pallette.NEWBLACK};
    display : flex;
    justify-content : space-between;

    & > div:first-of-type {
        width : 303px;
        height : 316px;
        background-size : contain;
        background-position : center center;
    }

    & > div:last-of-type {
        width : 381px;
        height : auto;
        text-align : left;
        padding-top : 5vh;
    }
`

export default Scr7;