import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";

const Scr7 = () => {

    return (
        <>
            <Title title="Part2 가혹한 기준의 덫" subTitle="요점 정리"/>
            <Box>
                <Summary>
                    <First>나에게 덫을 놓는 가혹한 기준.</First>
                    <Second>내가 하는 일들이 버겁게 느껴진다면 기준을 점검해보자.</Second>
                    <Third>구체적인 기준을 설정한다면 내가 할 수 있는 일이 더 많아질 것입니다.</Third>
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
const First = styled.div`

`
const Second = styled.div`

`
const Third = styled.div`

`

export default Scr7;