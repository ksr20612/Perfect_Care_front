import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion, useScroll } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { setHistory } from "services/setHistory";
import { useSelector, useDispatch } from "react-redux";
import { setTypeScores } from "features/parts/part5Slice";
import { useScrollTo } from "hooks/useScrollTo";
import ClipboardIcon from "../../assets/clipboard.svg";
import { Paper } from "../../styles/components/paper";
import typeQuestions from "../../app/typeQuestionList";
import Question from "../../components/question";
import typeList from "../../assets/jsons/typeList";

const Scr4 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });
    const [phase, setPhase] = useState(0);
    const scores = useSelector(state=>state.part5.type.scores);
    const [result, setResult] = useState({});
    const dispatch = useDispatch();
    const handleClick = (index, score) => {
        const temp = [...scores];
        temp[index] = score;
        dispatch(setTypeScores([...temp]));
        /*
            result : {
                "안정형" : 
                "게으른" :
                "자책형" :
            }
        */
        
        if(typeQuestions.length > index) {
            return next(index);
        }
        setPhase(1);
    }
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({ container : cardRef });
    const [next] = useScrollTo({ container : cardRef });

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,4)}/>
            <Box ref={cardRef}>
                {
                    (phase===0)
                    ? (
                        <>
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
                            <Name>완벽주의 유형 검사</Name>
                            <Info>
                                <div>검사 시간은 10분 내외입니다.</div>
                                <div>솔직하게 답해주세요.</div>
                            </Info>
                            <Content className="content">
                                {
                                    typeQuestions.map(({ sent, type }, i)=>{
                                        return <Question index={i+1} content={sent} handleChange={(score)=>handleClick(i, score, type)} value={scores[i]}/>
                                    })
                                }
                            </Content>
                            <Button className="submit" onClick={()=>handlePage(1)}>제출하기</Button>
                        </>
                    )
                    : (
                        <>
                            
                        </>
                    )
                }
            </Box>
            {renderArrow()}
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
const Name = styled.div`
    font-size : 4.8rem;
    margin-bottom : 5%;
    font-weight : bolder;
    text-decoration : underline;
    text-underline-offset : 5px;
`
const Info = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
    font-size : 2.4rem;

    & > div {
        border-radius : 10px;
        box-shadow : 3px 3px 10px #00000029;
        width : auto;
        min-width : 40%;
        height : 100px;
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
const Content = styled.div`
    width : 100%;
    flex : 1;
`
const Button = styled.button`
    margin-top : 50px;
    font-size : 3.0rem;
    width : 150px;
    height : 100px;
    padding : 2%;
    background-color : ${pallette.BLUISH};
    border-radius : 10px;
    display : flex;
    align-items : center;
    justify-content : center;
    border : none;
    box-shadow : #00000029 3px 3px 20px;
    transition : filter 0.2s ease-in;
    
    &:hover {
        filter : brightness(90%);
    }

    &:active {
        background-color : ${darken(0.1, pallette.BLUISH)};
        box-shadow : none;
        transform : translateY(1px);
    }

    &:before {
        content : "";
        width : 1em;
        height : 1em;
        margin-right : 0.3em;
        background : url(${ClipboardIcon});
        display : inline-block;
    }
`

export default Scr4;