import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { getChecked } from "../../assets/jsons/standards";
import { BsPerson as PersonIcon } from "react-icons/bs";
import Feedback from "../../components/feedback";
import { useSelector } from "react-redux";

const Scr4 = () => {

    const checks = useSelector(state=>state.part2.scr2);

    const [status, setStatus] = useState(1);
    const [clicked, setClicked] = useState(null);
    const handleClick = (idx) => {
        setStatus(status? null : 1); // 1 : 전체, null : 전체 아님
        setClicked(clicked? null : idx);
    }

    return (
        <>
            <Title title="Part2 가혹한 기준의 덫" subTitle="나를 성장시키는 기준"/>
            <Box>
                <div>
                    높고 비현실적인 기준은 나를 실패자로 만들기도 합니다.
                </div>
                <div>
                    나의 기준을 점검하고, 성장시키는 기준으로 바꾸어볼까요?
                </div>
                <Container>
                    <Person size="8vw"/>
                    <div>
                        <div>나의 기준은...</div>
                        <Bubble>
                            <Feedback index={1} isOn={status || (clicked===1)} standard={checks.std1} handleClick={()=>{handleClick(1)}}>
                                <div>남들보다 잘한다는 것은 추상적인 목표야.</div>
                                <div><strong>{"이전에 내가 세웠던 기록보다 잘하고 싶다"}</strong>는 목표로 바꾸는 것은 어떨까?</div>
                            </Feedback>
                            <Feedback index={2} isOn={status || (clicked===2)} standard={checks.std2} handleClick={()=>{handleClick(2)}}>
                                <div>제언</div>
                                <div>조언</div>
                            </Feedback>
                            <Feedback index={3} isOn={status || (clicked===3)} standard={checks.std3} handleClick={()=>{handleClick(3)}}>
                                <div>제언</div>
                                <div>조언</div>
                            </Feedback>
                            <Feedback index={4} isOn={status || (clicked===4)} standard={checks.std4} handleClick={()=>{handleClick(4)}}>
                                <div>제언</div>
                                <div>조언</div>
                            </Feedback>
                        </Bubble>
                    </div>
                </Container>
            </Box>
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;

    & > div {
        font-size : 2.6rem;
    }
    font : {
            size : 2.5rem;
            weight : bold
    }
`
const Container = styled.div`
    margin-top : 5vh;
    display : flex;

    & > div { 
        margin-top : 1vh;
        width : 100% 
    }
`
const Person = styled(PersonIcon)`

`
const Bubble = styled.div`
    background-color : ${pallette.GREY};
    width : 98%;
    margin-top : 3vh;
    height : 50vh;
    border-radius : 5vmin;
    padding : 1.5%;
    overflow-y : hidden;
`

export default Scr4;