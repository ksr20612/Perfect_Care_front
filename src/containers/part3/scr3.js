import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Card from "../../components/card";
import SamplePic from "../../assets/sample.jpg";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import NoteImg from "../../assets/ic_memo_y_02.png";
import { Paper } from "../../styles/components/paper";
import { usePage } from "../../hooks/usePage";
import DetectiveIcon from "../../assets/detective.svg";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr3 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,3)}/>
            <Box>
                <Note>
                    <Detective/>
                    <div>내가 당황스러워했던 사건 뒤에는 <br/> 나의 자동사고가 숨어있습니다.</div>
                    <br/>
                    <div>형사가 되어 자동사고라는 용의자를 잡아봅시다.</div>
                </Note>
                <motion.div initial="hidden" animate="visible" variants={fadein} custom={1} style={{width : "45%"}}>
                    <div>이런 걸 작성할 거예요!</div>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1.2}>1. 상황</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1.4}>2. 기분</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1.6}>3. 생각</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={1.8}>4. 이미지</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={2.0}>5. 나는 어떤 사람?</Block>
                    <Block as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={2.2}>6. 최악의 경우</Block>
                </motion.div>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`

    margin-top : 5%;
    height : 70%;
    position : relative;
    display : flex;
    justify-content : space-between;

    & > div {
        font-size : 2.6rem;
        display : flex;
        flex-direction : column;
        align-items : center;
        word-break : keep-all;
        text-align : center;

        &:first-of-type {
            width : 50%;
        }
        &:last-of-type {
            width : 50%;
            justify-content : space-between;
        }
    }
`
const Note = styled.div`
    width : 45%;
    background-color : #eee;
    display : flex;
    align-items : center;
    justify-content : center;
`
const Block = styled.div`
    scroll-snap-align: center;
    background-color : ${lighten(0.5, pallette.BLUE)};
    width : 100%;
    height : auto;
    padding : 2%;
    border-radius : 1vmin;
    font-size : 2.0rem;
    font-family : "Noto_Black";
    font-weight : 700;
    color : #333;
    box-shadow : 0px 3px 6px #00000029;
`
const Detective = styled.div`
    width : 40%;
    aspect-ratio : 1;
    background-image : url(${DetectiveIcon});
    background-size : contain;
    background-position : center;
    background-repeat : no-repeat;
    margin-bottom : 5%;
    opacity : 0.8;
`

export default Scr3;