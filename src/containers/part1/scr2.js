import { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import HeadImg from "../../assets/img_per.png";
import Brain from "../../components/brain";
import Pattern1 from "../../assets/diagram.png";
import Pattern2 from "../../assets/greengram.png";
import Dots from "../../assets/dots.png";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";
import GirlImg from "../../assets/img_girl.png";
import SpeechBubble from "../../components/speechBubble";
import { ReactComponent as Bubble1 } from "../../assets/ic_bub_def.svg";
import { ReactComponent as Bubble2 } from '../../assets/ic_bub_def-1.svg';
import { ReactComponent as Bubble3 } from '../../assets/ic_bub_def-2.svg';
import { ReactComponent as Bubble4 } from '../../assets/ic_bub_def-3.svg';
import { ReactComponent as Bubble5 } from '../../assets/ic_bub_def-4.svg';
import { ReactComponent as Bubble6 } from '../../assets/ic_bub_def-5.svg';
import { ReactComponent as Bubble7 } from '../../assets/ic_bub_def-6.svg';
import { ReactComponent as Bubble8 } from '../../assets/ic_bub_def-7.svg';
import { ReactComponent as Bubble9 } from '../../assets/ic_bub_def-8.svg';
import { ReactComponent as Bubble10 } from '../../assets/ic_bub_def-9.svg';
import { useSelector, useDispatch } from "react-redux";
import { setMyself } from "../../features/parts/part1Slice";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";

const list = [
    { content : "섬세하다", image : Bubble1, style : { top : "67%", left : "17%" }},
    { content : "거만하다", image : Bubble2, style : { top : "40%", left : "0%" }},
    { content : "눈치가 빠르다", image : Bubble3, style : { top : "45%", left : "23%" }},
    { content : "자주 화가난다", image : Bubble4, style : { top : "20%", left : "17%" }},
    { content : "실수를 하면 부끄럽다", image : Bubble5, style : { top : "30%" }},
    { content : "타인에게 엄격하다", image : Bubble6, style : { top : "6%" }},
    { content : "쉽게 상처받는다", image : Bubble7, style : { top : "45%", right : "23%" }},
    { content : "자주 자책한다", image : Bubble8, style : { top : "20%", right : "17%" }},
    { content : "최악의 시나리오를 자주 상상한다", image : Bubble9, style : { top : "67%", right : "17%" }},
    { content : "우울할 때가 많다", image : Bubble10, style : { top : "40%", right : "0%" }},
];

const Scr2 = () => {

    const dispatch = useDispatch();
    const userIdx = useSelector(state=>state.state.userIdx);
    const myself = useSelector(state=>state.part1.myself);
    const handleCheck = (v) => {
        if(myself.length > 7) return;
        if(myself.includes(v)){
            dispatch(setMyself(myself.filter((item)=>item!==v)));
        }else {
            dispatch(setMyself([...myself, v]));
        }
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            if(myself.length === 0) {
                toastError("문장을 한 개 이상 선택해주세요");
                return false;
            };
            POST("/part1/scr2", { userIdx, descriptions : myself }, 
                (result) => {
                    if(result.data.message) {
                        toastError(result.data.message, {});
                        return false;
                    }else {
                        return true;
                    }
                }
            )
        },
    });
    useFetchREST(`/part1/scr2/${userIdx}`, 
        (result)=>{
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                dispatch(setMyself(result.data.myself));
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,2)}/>
            <Question>Q. '나'는 어떤 사람일까?</Question>
            <Inst>다음 중 나에게 해당한다고 생각되는 문장을 선택해주세요.</Inst>
            <Options>
                <Girl></Girl>
                {
                    list.map((bubble, i)=>{
                        return <SpeechBubble checked={myself.includes(bubble.content)} delay={(i+1)*0.2} content={bubble.content} style={bubble.style} onCheck={()=>handleCheck(bubble.content)}><bubble.image /></SpeechBubble>
                    })
                }
            </Options>
            <Box>
                <Head>
                    <Brain emotions={myself}></Brain>
                </Head>
                <Shadow/>
                <PatternPurple/>
                <PatternGreen/>
                <DotGroup/>
                <Circle1/>
                <Circle2/>
            </Box>
            {renderArrow()}
        </>
    )
}
const Question = styled.div`
    margin-top : 5%;
    font-size : 3.2rem;
    color : #3C3C3C;
    font-family : "SemiBold";
    text-align : center;
`
const Inst = styled.div`
    font-size : 2.8rem;
    color : #3c3c3c;
    font-family : "Regular";
    text-align : center;
`
const Options = styled.div`
    position : relative;
    width : 100%;
    height : 70%;
    margin-top : 3%;
    display : flex;
    justify-content : center;
`
const Girl = styled.div`
    width : 30%;
    height : 50%;
    background : url(${GirlImg});
    position : absolute;
    bottom : 0;
`
const Box = styled(Paper)`
    position : absolute;
    width : 691px;
    height : 524px;
    display : flex;
    justify-content : center;
    align-items : center;
    bottom : 0;
    /* bottom : -440px; */
    right : min(15vw, 110px);
`
const Head = styled.div`
    width : 100%;
    height : 100%;
    background : url(${HeadImg});
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center center;
    position : relative;
    z-index : 3;
`
const Shadow = styled.div`
    background-color : #DDDBD7;
    width : 80%;
    height : 8%;
    border-radius : 50%;
    position : absolute;
    z-index : 1;
    bottom : 4%;
    left : 10%;
`
const PatternPurple = styled.div`
    width : 13%;
    height : 13%;
    background : url(${Pattern1});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 10%;
    left : 20%;
`
const PatternGreen = styled.div`
    width : 30%;
    height : 30%;
    background : url(${Pattern2});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 5%;
    left : 58%;
`
const DotGroup = styled.div`
    width : 9%;
    height : 30%;
    background : url(${Dots});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 5%;
    left : 77%;
`
const Circle1 = styled.div`
    width : 5%;
    background-color : #D7CCDD;
    border-radius : 50%;
    position : absolute;
    top : 23%;
    left : 16%;
    aspect-ratio : 1 / 1;
    opacity : 0.2;
`
const Circle2 = styled.div`
    width : 2.8%;
    background-color : #D7CCDD;
    border-radius : 50%;
    position : absolute;
    top : 26.5%;
    left : 18.5%;
    aspect-ratio : 1 / 1;
    opacity : 0.3;
`

export default Scr2;