import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";
import warningIcon from "../../assets/warning.svg";
import { useSelector } from "react-redux";
import { setHistory } from "../../services/setHistory";

const Scr1 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        // page 이동시 완료된 페이지(현재) 저장
        /*
            { 
                userIdx : "",
                partIdx : "",
                pageIdx : "",
            }
        */
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });
    
    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,1)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Warning />
                <div>본 프로그램은</div>
                <div>사용자가 언제 어디서든 인지행동치료를 경험하여</div>
                <div>완벽을 조절하도록 만들어진 프로그램이며,</div>
                <div>완벽주의를 <strong>"없애기"</strong>위한 프로그램이 <strong>아닙니다</strong>.</div>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 10vh;
    font-size : 3.2rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    height : 60%;
    word-break : keep-all;
    text-align : center;
    & strong {
        color : ${pallette.RED};
    }
`
const Subtitle = styled.div`
    font-size : 4.0rem;
    margin-bottom : 5%;
`
const Warning = styled.div`
    width : 30%;
    height : 30%;
    background : url(${warningIcon});
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center;
    margin-bottom : 5%;
`

export default Scr1;