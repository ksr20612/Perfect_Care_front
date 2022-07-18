import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import DataBox from "../../components/dataBox";

const Scr1 = () => {

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,1)}/>
            <Box>
                <DataBox title="나의 실수 피드백">
                    <div></div>
                </DataBox>
                <Direction>
                    그동안 실수 피드백을 꾸준히 작성해보았나요? <br/>
                    실패에 대한 인식이 바뀌고 있나요?
                </Direction>
                <Direction>
                    나를 괴롭게 하던 완벽주의를 조절해보니 어떠셨나요? <br/>
                    한번에 끝내기보다 앞에서 배운 내용들을 꾸준히 복습해보세요. <br/>
                    어느새 변해있는 나의 모습을 마주할 수 있습니다.
                </Direction>
            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    position : relative;
    width : 100%;
    height : auto;
    margin-top : 5vh;
`
const Direction = styled.div`
    text-align : center;
    font-family : "SemiBold";
    font-size : 3.2rem;
    margin-top : 5vh;
`

export default Scr1;