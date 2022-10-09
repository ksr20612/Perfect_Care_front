import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Guru from "../../components/guru";
import Bubble from "../../components/bubble";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import NoteImg from "../../assets/ic_memo_filled.png";
import { usePage } from "../../hooks/usePage";
import Icon1 from "../../assets/ic_brin_blu.png"; 
import Icon2 from "../../assets/ic_puzzle.png";
import Icon3 from "../../assets/ic_bal.png";
import Icon4 from "../../assets/vision-svgrepo-com.png";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";
import blackNwhite from "assets/blackNwhite.svg";
import disaster from "assets/disaster.svg";
import yesno from "assets/yesno.svg";
import thinking from "assets/thinking.svg";

const Scr11 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,11)}/>
            <Box>
                <Subtitle>
                        사실 이말들이 범인! 왜곡된 생각인 <span>인지오류</span>들입니다. <br/>
                        어떤 특징이 있는지 살펴볼까요?
                </Subtitle>
                <div>
                    <Note></Note>
                    <Bubbles>
                        <Bubble title="재앙화 사고" icon={Icon1} content={`이번 시험도 망치다니, \n 내 대학 입시는 망했어.`}>
                            <Icon icon={disaster}></Icon>
                            <Desc>미래에 대한 예상을 현실적 고려 없이 파국적이고, <br/> 부정적으로 생각하는 오류입니다.</Desc>
                        </Bubble>
                        <Bubble title="흑백논리" icon={Icon2} content={`1등이 아니면 의미없지.`}>
                            <Icon icon={blackNwhite}></Icon>
                            <Desc>전부 혹은 전무의 사고(All or Nothing)라고 불리는 흑백논리는 선택지 사이에 다수의 연속적 개념이 있다고 생각하기보다 흑과 백처럼 '이것' 아니면 '저것', 두개의 범주로 나누어 상황을 봅니다.</Desc>
                        </Bubble>
                        <Bubble title="당위 진술" icon={Icon3} content={`아무리 바빠도 \n 운동은 매일 해야해.`}>
                            <Icon icon={yesno}></Icon>
                            <Desc>행동에 대한 확실하고 고정된 사고를 가지고 있으며, 충족되지 못할 때 얼마나 나쁜지 과대평가합니다.</Desc>
                        </Bubble>
                        <Bubble title="지나친 일반화" icon={Icon4} content={`지난번 발표때 실수했으니까 \n 오늘도 분명 실수할거야.`}>
                            <Icon icon={thinking}></Icon>
                            <Desc>우연히 일어난 사건을 일반화시켜 <br/>부정적인 결론을 내려버립니다.</Desc>
                        </Bubble>
                    </Bubbles>
                </div>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 100%;
    height : 70%;
    margin-top : 5%;

    & > div:first-child {
        width : 100%;
        height : auto;

        /* & > div:last-child {
            display : flex;
            width : 100%;
            justify-content : center;
            
            & > div:first-child { margin-right : 1vw; }
        } */
    }
    & > div:last-child {
        display : flex;
        width : 100%;
        flex : 1;
        align-items : center;
        justify-content : center;
        margin-top : 3%;
    }
`
const Subtitle = styled.div`
    font-size : 3.0rem;
    width : 100%;
    text-align : center;

    & > span {
        font-size : 4.0rem;
        font-weight : bolder;
    }
`
const Note = styled.div`
    background : url(${NoteImg});
    font-size : 2.4rem;
    word-break : keep-all;
    text-align : center;
    padding-top : 30%;
    padding-bottom : 10%;
    padding-left : 10%;
    padding-right : 10%;
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    width : 30%;
    height : 100%;
`
const Bubbles = styled.div`
    display : grid;
    grid-template-rows : 1fr 1fr;
    grid-template-columns : 1fr 1fr;
    width : 100%;
    height : 100%;
    font-size : 2.4rem;

    /* & > div {
        margin : 5%;
        padding : 5%;
        word-break : keep-all;
        display : flex;
        align-items : center;
        justify-content : center;
        text-align : center;
        background-color : ${pallette.GREY};
        border-radius : 10%;
    } */
`
const Icon = styled.div`
    background : url(${props=>props?.icon});
    background-repeat : no-repeat;
    background-size : contain;
    background-position : center;
    width : 35%;
    height : 35%;
    margin-bottom : 5%;
`
const Desc = styled.div`
    font-size : 2.4rem;
    word-break : keep-all;
`

export default Scr11;