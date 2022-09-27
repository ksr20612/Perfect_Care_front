import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { usePage } from "../../hooks/usePage";
import Score from "../../containers/ScoreBox.js";
import Lottie from "react-lottie";
import * as running from "../../assets/lottie/run.json";
import * as running2 from "../../assets/lottie/run2.json";

const Scr5 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    const [num, setNum] = useState(0);
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const addScore = useCallback((isGood=true)=>{
        isGood? setGood(good+1) : setBad(bad+1);
        return setNum(num+1);
    }, [num, good, bad]);
    const renderQuiz = useCallback(()=>{
        const order = Math.random();
        if(num>=quizList.length) {
            return (
                <QuizResult>  
                    <LottieWrapper score={good} as={motion.div} layout>
                        <Lottie options={getOption(running2)} />
                    </LottieWrapper>
                    내 안의 건강한 완벽주의자는 이만큼 달려왔어요. <br/>
                    건강한 완벽주의자의 모습과 {Math.floor(good/quizList.length*100)}% 일치합니다.
                </QuizResult>
            )
        }
        return (
            <>
                <Sentence>{quizList[num]?.sentence}</Sentence>
                {
                    (order>=0.5)
                    ?(
                        <>
                            <Answer index="1" onClick={()=>addScore(false)}>{quizList[num]?.ans1}</Answer>
                            <Answer index="2" onClick={()=>addScore(true)}>{quizList[num]?.ans2}</Answer>
                        </>
                    )
                    :(
                        <>
                            <Answer index="1" onClick={()=>addScore(true)}>{quizList[num]?.ans2}</Answer>
                            <Answer index="2" onClick={()=>addScore(false)}>{quizList[num]?.ans1}</Answer>
                        </>
                    )
                }
            </>
        );
    }, [num, setGood]);

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,5)}/>
            <Box>
                <Subtitle>지금 내 모습은 어떤가요?</Subtitle>
                <Instruction>지금 내 모습과 더 잘 어울리는 문구 혹은 단어를 클릭해주세요.</Instruction>
                <Quiz>{renderQuiz()}</Quiz>
                <Score good={good} bad={bad} isDone={num>=quizList.length}></Score>
            </Box>
            {renderArrow()}
        </>
    )
}

const quizList = [
    {
        sentence : "일이 주어졌을 때",
        ans1 : "스스로를 의심한다",
        ans2 : "자신감이 있다"
    },
    {
        sentence : "도전해야할 때",
        ans1 : "두렵다",
        ans2 : "위험을 감수한다"
    },
    {
        sentence : "실패와 실수는?",
        ans1 : "하면 끝이야",
        ans2 : "해도 괜찮아"
    },
    {
        sentence : "타인에 대해",
        ans1 : "판단한다",
        ans2 : "받아들인다"
    },
    {
        sentence : "나 자신을",
        ans1 : "통제하려 한다",
        ans2 : "자연스럽게 한다"
    },
    {
        sentence : "세운 기준은",
        ans1 : "불가능한 것",
        ans2 : "가능한 것"
    },
    {
        sentence : "동기를 부여하는 것은",
        ans1 : "실패하는 것에 대한 두려움과 부정적인 평가의 회피",
        ans2 : "성공과 긍정적인 것들"
    },
    {
        sentence : "집중하는 것은",
        ans1 : "결과",
        ans2 : "과정"
    },
    {
        sentence : "삶의 모든 순간은",
        ans1 : "위협적이야",
        ans2 : "도전이야"
    },
    {
        sentence : "비판은",
        ans1 : "싫습니다",
        ans2 : "환영합니다"
    },
    {
        sentence : "나의 가치를",
        ans1 : "무엇을 하는가에서 찾는다",
        ans2 : "내가 누구인가에서 찾는다"
    },
]

const Box = styled.div`
    margin-top : 5vh;
    display : flex;
    flex-direction : column;
    align-items : center;
    height : 80%;
    max-height : 80%;

    & > table {
        border : 2px solid ${pallette.GREY};
        border-collapse : collapse;
        width : 100%;
        font-size : 1.6rem;

        & > thead {
            font-weight : bold;
        }

        & td {
            border : 2px solid ${pallette.GREY};
            border-collapse : collapse;
            width : 35%;
            padding : 1%;

            &:nth-child(1) {
                width : 30%;
                background-color : ${lighten(0.7, pallette.BLUE)};
                height : 5%;
            }
        }

        & tr {
            border : 2px solid ${pallette.GREY};
            border-collapse : collapse;
        }
    }
`
const Quiz = styled(Paper)`
    width : 100%;
    height : 50%;
    margin-top : 3%;
    font-size : 2.4rem;
    display : flex;
    align-items : center;
    justify-content : center;
`
const Subtitle = styled.div`
    font-size : 2.4rem;
    font-family : "Bold";
    text-align : center;
`
const Instruction = styled.div`
    font-size : 2.0rem;
    text-align : center;
    margin-top : 1%;
`
const Sentence = styled.div`
    width : 30%;
`
const Answer = styled.div`
    padding : 3%;
    width : 20%;
    height : 100%;
    background-color : ${pallette.GREY};
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    transition : all 0.1s ease-in-out;
    position : relative;
    & + & { margin-left : 5%; }
    &:hover { 
        background-color : ${darken(0.1, pallette.GREY)}
    }
    /* &:before {
        content : "${props=>props?.index}";
        position : absolute;
        width : 25%;
        aspect-ratio : 1;
        border : 2px solid black;
        display : flex;
        align-items : center;
        justify-content : center;
        border-radius : 50%;
        top : 5%;
        opacity : 0.4;
    } */
`
const QuizResult = styled.div`
    line-height : 1.5;
    text-align : center;
    display : flex;
    align-items : center;
    flex-direction : column;
    transform : translateY(-15%);
`
const LottieWrapper = styled.div`
    width : 15%;
    min-width : 80px;
    aspect-ratio : 1;
`
const getOption = (data) => ({
    loop : true,
    autoplay : true,
    animationData: data,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
    isStopped : false,
});

export default Scr5;