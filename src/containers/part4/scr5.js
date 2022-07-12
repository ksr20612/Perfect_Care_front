import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import googlePic from "../../assets/google.png";

const Scr5 = () => {

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,5)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Name>GOOGLE X (구글의 혁신 연구실)</Name>
                <Content>
                    <div></div>
                    <div>In his new book Work Rules!, Google’s Head of People Operations Laszlo Bock states “it’s also important to reward failure” so as to encourage risk-taking. Bock gives the example of Google Wave, an online platform launched in 2010 and closed a year later. “They took a massive, calculated risk. And failed. So we rewarded them.”</div>
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
        background-image : url(${googlePic});
    }

    & > div:last-of-type {
        width : 381px;
        height : auto;
        text-align : left;
        padding-top : 5vh;
    }
`

export default Scr5;