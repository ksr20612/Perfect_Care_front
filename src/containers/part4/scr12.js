import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";

const Scr12 = () => {

    return (
        <>
            <Title title="Part4 실수가 너무 두려워요" subTitle="요점 정리"/>
            <Box>
                <Summary>
                    <First>두려움은 실수를 만드는 재료!</First>
                    <Second>꾸준한 실수 피드백으로 실수를 마주해보아요.</Second>
                    <Third>실패는 곧 새로운 도전의 증거,</Third>
                    <Fourth>실수에 대한 인식을 바꾼다면 더 많은 일을 시도할 수 있어요.</Fourth>
                </Summary>
            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    width : 95%;
    margin : 0 auto;
    margin-top : 4vh;
    position : relative;
`

export default Scr12;