import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";
import Spinner from "../../components/spinner";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";
import useCalculateTest from "hooks/useCalculateTest";
import Chart from "components/chart";

const Scr5 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });
    const result = useSelector(state=>state.part5.test);
    const [testResult, high] = useCalculateTest(result);

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,6)}/>
            {(testResult?.length && high?.type)? (
                <Wrapper>
                    <Box>
                        <Subtitle>나의 마음건강점수</Subtitle>
                        <Chart data={testResult} maxValue={40} isVertical={false} margin={{ top : 10, bottom : 30, left : 70, right : 20}}/>
                    </Box>
                    <Desc>
                        본 검사 결과는 프로그램의 실시 전후 비교를 위해 제시된 검사로, <br/> 점수가 높다고 하여 해당 증상에 대한 진단을 내릴 수 없습니다.
                    </Desc>
                </Wrapper>
            ) : (
                <Spinner/>
            )}
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    padding : 5%;
    display : flex;
    height : 80%;
    flex-direction : column;
    align-items : center;
    justify-content : flex-start;
`
const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    height : 87%;
`
const Subtitle = styled.div`
    text-align : center;
    width : 80%;
    height : 50px;
    max-width : 300px;
    margin-bottom : 5%;
    border-radius : 5px;
    font-size : 3.2rem;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : ${pallette.BLUISH};
    font-family : "Bold";
`
const Desc = styled.div`
    text-align : center;
    font-size : 2.4rem;
    word-break : keep-all;
    color : red;
    font-family : "Bold";
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : center;
`

export default Scr5;