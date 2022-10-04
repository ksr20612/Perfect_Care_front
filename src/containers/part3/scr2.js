import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import TextArea from "../../components/textArea";
import GuruBox from "../../containers/guruBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import BoardImg from "../../assets/board.png";
import { usePage } from "../../hooks/usePage";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr2 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,2)}/>
            <Subtitle>완벽주의의 주범, 자동사고를 찾아봅시다.</Subtitle>
            <Board></Board>
            {renderArrow()}
        </>
    )
}

const Board = styled.div`
    background : url(${BoardImg});
    width : 100%;
    height : 70%;
    background-position : center center;
    background-repeat : no-repeat;
    background-size : contain;
    margin-top : 3%;
`
const Subtitle = styled.div`
    text-align : center;
    font-size : 3.6rem;
    margin-top : 3%;
    font-weight : 800;
`

export default Scr2;