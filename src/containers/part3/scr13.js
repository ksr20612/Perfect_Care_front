import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import TextArea from "../../components/textArea";
import GuruBox from "../guruBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import QuizBox from "../../components/quizBox";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr13 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,13)}/>
            <Box>
                <Inst>수없이 많은 생각(자동사고) 속에 숨어 <br/> 범인이 아닌 척하는 인지오류를 구분해낼 수 있도록, <br/> 인지오류를 찾는 연습을 해보아요!</Inst>
                <QuizBox style={{height : "50vh"}} answer={3} exp={"미애씨는 '약을 끊지 못하고 우울함이 지속되면 실패자이다.'라는 당위 진술의 오류를 범하고 있습니다. 당위 진술이라는 함정에 빠져있게 되면, 자신을 더욱 자책하게 되고 제대로 해내지 못하는 사람이라는 생각에 수치심이 들며, 자신을 더욱 압박하게 되기 때문에 우울감이 이전보다 심해질 수 있습니다."}>
                    <Question bullet={"01."} >
                        <div>미애씨는 우울증 진단을 받고 얼마전부터 약물 치료를 하는 중에 있습니다. 치료를 시작한지 이제 한달이 되었지만, 미애씨는 어서 약을 끊어야 한다는 마음에 초조하기만 합니다. 약을 끊지 못하면 평생 우울증 치료가 안될 것만 같고, 자신이 유난히 의지가 약한 사람 인 것만 같은 생각에 사로잡혀 있기 때문입니다. </div>
                        <div>미애씨가 가지고 있는 생각의 오류는 무엇인가요?</div>
                    </Question>
                </QuizBox>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;

    & > div {
        font-size : 2.6rem;
        display : flex;
        align-items : center;
    }

    & > .subQuestion {
        padding-bottom : 2vh;
    }
`
const Inst = styled.div`
    font-size : 2.4rem;
    text-align : center;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-bottom : 5%;
`
const Question = styled.div`
    position : relative;
    margin-left : 3ch;
    font-size : 2.5rem;
    line-height : 150%;
    word-break : keep-all;

    &:before {
        content : "${props=>props.bullet}";
        position : absolute;
        left : -3ch;
    }
`
// const Question = styled.div`
//     margin : 5vh auto;
//     background-color : ${lighten(0.4, pallette.YELLOW)};
//     width : 85%;
//     padding : 2.5vmax;
//     display : flex;
//     justify-content : center;
// `
// const Answer = styled.div`
//     margin : 0 auto;
//     width : 85%;
//     flex-direction : column;
//     align-items : unset !important;

//     & > div {
//         margin : 2vh 0;
//     }
// `


export default Scr13;