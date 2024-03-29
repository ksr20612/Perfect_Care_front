import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { getTo } from "../../assets/jsons/standards";
import Feedback from "../../components/feedback";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import PersonIcon from "../../assets/person-pouting-svgrepo-com.svg";
import { setHistory } from "services/setHistory";

const Scr4 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const checks = useSelector(state=>state.part2.scr2);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    const [status, setStatus] = useState(1);
    const [clicked, setClicked] = useState(null);
    const handleClick = (idx) => {
        setStatus(status? null : 1); // 1 : 전체, null : 전체 아님
        setClicked(clicked? null : idx);
    }

    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,4)}/>
            <Box>
                <div>
                    높고 비현실적인 기준은 나를 실패자로 만들기도 합니다.
                </div>
                <div>
                    나의 기준을 점검하고, 성장시키는 기준으로 바꾸어볼까요?
                </div>
                <Container>
                    <Person/>
                    <div>
                        <Bubble>
                            <Feedback index={1} isOn={status || (clicked===1)} standard={checks.std1.from} handleClick={()=>{handleClick(1)}}>
                                <div>{checks.std1.to[0]}</div> <br/>
                                <div><strong>{checks.std1.to[1]}</strong>는 목표로 바꾸는 것은 어떨까요?</div>
                            </Feedback>
                            <Feedback index={2} isOn={status || (clicked===2)} standard={checks.std2.from} handleClick={()=>{handleClick(2)}}>
                                <div>{checks.std2.to[0]}</div> <br/>
                                <div><strong>{checks.std2.to[1]}</strong>는 목표로 바꾸는 것은 어떨까요?</div>
                            </Feedback>
                            <Feedback index={3} isOn={status || (clicked===3)} standard={checks.std3.from} handleClick={()=>{handleClick(3)}}>
                                <div>{checks.std3.to[0]}</div> <br/>
                                <div><strong>{checks.std3.to[1]}</strong>는 목표로 바꾸는 것은 어떨까요?</div>
                            </Feedback>
                            <Feedback index={4} isOn={status || (clicked===4)} standard={checks.std4.from} handleClick={()=>{handleClick(4)}}>
                                <div>{checks.std4.to[0]}</div> <br/>
                                <div><strong>{checks.std4.to[1]}</strong>는 목표로 바꾸는 것은 어떨까요?</div>
                            </Feedback>
                        </Bubble>
                    </div>
                </Container>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Medium";
    padding : 0 1vw;
    padding-top : 5%;
    display : flex;
    flex-direction : column;

    & > div {
        font-size : 2.6rem;
    }
`
const Container = styled.div`
    margin-top : 5vh;
    display : flex;
    flex : 1;

    & > div:last-child {
        margin-left : 3%;
    }
`
const Person = styled.div`
    width : 25%;
    height : 25%;
    background : url(${PersonIcon});
    background-position : center;
    background-size : contain;
    background-repeat : no-repeat;
`
const Bubble = styled.div`
    background-color : ${pallette.GREY};
    width : 98%;
    margin-top : 3vh;
    height : 50vh;
    border-radius : 5vmin;
    padding : 2%;
    overflow-y : hidden;
`

export default Scr4;