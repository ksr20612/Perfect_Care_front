import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import MovieClip from "../../components/movieClip";

const Scr2 = () => {

    return (
        <>
            <Title title={getPartTitle(0)} subTitle={getPageTitle(0,1)}/>
            <Ask>디지털 인지행동치료란?</Ask>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Subtitle>어디서나, 손쉽고 간편하게</Subtitle>
                <Content>
                    <div>
                        <div>icon1</div>
                        <div>1전문적입니다</div>
                    </div>
                    <div>
                        <div>icon2</div>
                        <div>2합리적입니다</div>
                    </div>
                    <div>
                        <div>icon3</div>
                        <div>3편리합니다</div>
                    </div>
                    <div>
                        <div>icon4</div>
                        <div>4효과적입니다</div>
                    </div>
                </Content>
            </Box>
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 5%;
    display : flex;
    flex-direction : column;
    align-items : center;
    height : 65%;
`
const Ask = styled.div`
    font-size : 3.6rem;
    width : 100%;
    text-align : center;
    margin-top : 5%;
`
const Subtitle = styled.div`
    font-size : 3.6rem;

    &:first-letter { font-size : 150% }
`
const Content = styled.div`
    width : 100%;
    height : 100%;
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    grid-template-rows : repeat(2, 1fr);

    & > div {
        padding : 5%;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        font-size : 2.0rem;

        & > div:first-child {
            width : 100%;
            height : 100%;
            padding-bottom : 3%;
            display : flex;
            align-items : center;
            justify-content : center;
        }

        & > div:last-child {
            &:first-letter { font-size : 150%; }
        }

    }
`

export default Scr2;