import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { BsPerson as PersonIcon } from "react-icons/bs";

const Scr4 = () => {

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
`

export default Scr4;