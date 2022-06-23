import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";

const Scr7 = () => {

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="요점 정리"/>
            <Box>
                <Summary>
                    <div>언제나 내 생각이 합리적이지만은 않다!</div>
                    <div>완벽주의를 강화시키는 주범, 인지오류를 밝혀내자</div>
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

export default Scr7;