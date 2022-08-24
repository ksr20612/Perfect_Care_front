import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Paper } from "../../styles/components/paper";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";

const Scr6 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,6)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Name>P&G의 "용감한 실패" 어워드</Name>
                <Content>
                    <div></div>
                    <div>
                        도전과 실험정신을 장려하고 실패에 대한 두려움을 없애기 위해 P&G는 매년 ‘용감한 실패 어워드’를 열어 위험을 감수한 가장 "똑똑한" 팀이나 개인을 시상합니다. <br/><br/>
                        이 실패 어워드에는 '실수는 해도 괜찮아. 숨기지만 말자.'라는 의미가 담겨있다고 해요.   
                    </div>
                </Content>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    margin-top : 8vh;
    padding-left : min(95px, 5vw);
    text-align : center;
`
const Name = styled.div`
    font-size : 3.6rem;
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
        background-repeat : no-repeat;
    }

    & > div:last-of-type {
        width : 381px;
        height : auto;
        text-align : left;
        padding-top : 5vh;
        word-break : keep-all;
    }
`

export default Scr6;