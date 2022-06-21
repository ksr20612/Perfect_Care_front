import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import MovieClip from "../../components/movieClip";

const Scr3 = () => {

    return (
        <>
            <Title title="Part2 가혹한 기준의 덫" subTitle="비현실적인 기준을 변경하는 방법"/>
            <Box>
                <MovieClip width="100%" height="100%"/>
            </Box>
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    display : flex;
    align-items : center;
    justify-content : center;

    & > div {
        margin-top : 5vh;
        font-size : 2.6rem;
        width : 80%;
        height : 60vh;
    }
`

export default Scr3;