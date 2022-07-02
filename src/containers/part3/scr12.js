import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import MovieClip from "../../components/movieClip";
import TextArea from "../../components/textArea";
import GuruBox from "../../containers/guruBox";

const Scr2 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라! - 자동사고 기록지"/>
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

export default Scr2;