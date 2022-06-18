import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";

const Scr1 = () => {

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

export default Scr1;