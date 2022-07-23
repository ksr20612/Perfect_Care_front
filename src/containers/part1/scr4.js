import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { motion, useScroll } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Paper } from "../../styles/components/paper";
import Question from "../../components/question";
import { useSelector, useDispatch } from "react-redux";
import questionList from "../../app/questionList";
import { setScores } from "../../features/parts/part1Slice";

const Scr4 = () => {

    const testName = useSelector(state=>state.part1.test.name);
    const scores = useSelector(state=>state.part1.test.scores);
    const dispatch = useDispatch();
    const handleClick = (index, score) => {
        const temp = [...scores];
        temp[index] = score;
        dispatch(setScores([...temp]));
    }
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({ container : cardRef });

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,4)}/>
            <Box ref={cardRef}>
                <Progress>
                    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="indicator"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                </Progress>
                <Info>
                    <div>검사 시간은 10분 내외입니다.</div>
                    <div>솔직하게 답해주세요.</div>
                </Info>
                {
                    questionList[testName].map((question, i)=>{
                        return <Question content={question} handleChange={(score)=>handleClick(i, score)} value={scores[i]}/>
                    })
                }
            </Box>
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 5vh;
    font-size : 3.2rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    height : 75%;
    word-break : keep-all;
    overflow-y : scroll;
    position : relative;
`
const Info = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
    font-size : 2.4rem;

    & > div {
        border-radius : 10px;
        box-shadow : 3px 3px 10px #00000029;
        width : 30%;
        height : 200px;
        padding : 1%;
        display : flex;
        align-items : center;
        justify-content : center;
        text-align : center;

        & + div { margin-left : 5%; }
    }
`
const Progress = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100px;
    height : 100px;

    & > #progress {
        position : fixed;
        transform: rotate(-90deg);
    }

    & circle {
        stroke-dashoffset: 0;
        stroke-width: 15%;
        fill: none;
    }

    & .bg {
        stroke: ${pallette.YELLOW};
        opacity: 0.2;
    }

    & #progress .indicator {
        stroke: ${pallette.YELLOW};
        opacity : 0.6;
    }
`

export default Scr4;