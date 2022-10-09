import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr7 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,9)}/>
            <Box>
                <Summary>
                    <Line>이론적으로는 가능하지만, 현실적으로는 불가능한 가혹한 기준.</Line>
                    <Line>늘 만족스럽지 못하고 하는 일들이 버겁게 느껴진다면 기준을 점검해보자.</Line>
                    <Line>기준을 구체적이고 현실적으로 조정해봅시다.</Line>
                </Summary>
            </Box>
            {renderArrow()}
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
    word-break : keep-all;

    &:first-of-type {
        margin-top : 5vh;
    }
`

export default Scr7;