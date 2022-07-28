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
import Board from "../../assets/box_blab.png";
import WantedImg from "../../assets/box_wanted_wh.png";
import MapImg from "../../assets/ic_map.png";
import Memo1 from "../../assets/ic_memo_wh.png";
import Memo2 from "../../assets/ic_memo_y.png";
import MemoBig from "../../assets/ic_memo_y_02.png"; 
import Band1 from "../../assets/ic_st_gry_01.png";
import Band2 from "../../assets/ic_st_gry_02.png";

const Scr2 = () => {

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,2)}/>
            {/* <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>본격적으로 완벽주의를 조절하기 위해서는 <br/> 머릿속에 있는 "자동사고"라는 용의자를 찾아야 합니다.</div>
                <div>내 행동을 만드는 핵심 생각이자, 남의 감정을 좌우하는 자동사고는 내가 완벽주의 성향으로 사고하도록 돕기도 하는데요,</div>
                <div>"자동사고"가 정말로 완벽주의 성향을 만드는 범인일지 한번 조사해볼까요?</div>
            </Box> */}
            <BoardBox as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Wanted></Wanted>
                <Map></Map>
                <MemoWhite></MemoWhite>
                <MemoYellow></MemoYellow>
                <MemoPost></MemoPost>
                <BandTop></BandTop>
                <BandBottom></BandBottom>
            </BoardBox>
        </>
    )
}

// const Box = styled.div`
//     font-family : "Noto_Medium";
//     padding : 0 1vw;
//     padding-top : 2vh;
//     position : relative;

//     & > div {
//         font-size : 2.6rem;
//         display : flex;
//         align-items : center;
//     }

//     & > .subQuestion {
//         padding-bottom : 2vh;
//     }
// `
const BoardBox = styled.div`
    width : 100%;
    max-width : 960px;
    height : 100%;
    max-height : 559px;
    background : url(${Board});
    background-size : contain;
    background-position : center center;
    margin-top : 5%;
    background-repeat : no-repeat;
    position : relative;
`
const Wanted = styled.div`
    width : 264px;
    height : 362px;
    background : url(${WantedImg});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
`
const Map = styled.div`
    width : 260px;
    height : 194px;
    background : url(${MapImg});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
`
const MemoWhite = styled.div`
    width : 110px;
    height : 106px;
    background : url(${Memo1});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
`
const MemoYellow = styled.div`
    width : 104px;
    height : 110px;
    background : url(${Memo2});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
`
const MemoPost = styled.div`
    width : 246px;
    height : 280px;
    background : url(${MemoBig});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
`
const BandTop = styled.div`
    width : 106px;
    height : 30px;
    background : url(${Band1});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : relative;
`
const BandBottom = styled.div`
    width : 82px;
    height : 21px;
    background : url(${Band2});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
`

export default Scr2;