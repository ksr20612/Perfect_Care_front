import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";

const Scr7 = () => {

    return (
        <>
            <Title title="Part2 가혹한 기준의 덫" subTitle="요점 정리"/>
            <Box>
                요점정리
            </Box>
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    font-size : 2.6rem;
`

export default Scr7;