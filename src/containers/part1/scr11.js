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

const Scr11 = () => {

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,7)}/>
            <Box>
                <Summary>
                    <Line>나에게 덫을 놓는 가혹한 기준.</Line>
                    <Line>내가 하는 일들이 버겁게 느껴진다면 기준을 점검해보자.</Line>
                    <Line>구체적인 기준을 설정한다면 내가 할 수 있는 일이 더 많아질 것입니다.</Line>
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

export default Scr11;