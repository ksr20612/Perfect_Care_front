import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { usePage } from "../../hooks/usePage";
import TypeResult from "../../components/typeResult";
import useCalculateTest from "hooks/useCalculateTest";
import Spinner from "../../components/spinner";

const Scr2 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    const result = useSelector(state=>state.part5.type);
    const [testResult, high] = useCalculateTest(result);

    useEffect(()=>{
        console.log({
            result,
            testResult,
            high
        })
    })

    return (
        <>
            <Title title={getPartTitle(0)} subTitle={getPageTitle(0,1)}/>
            {(testResult?.length && high?.type)? (
                <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                    <Subtitle>당신의 '완벽주의' 유형은?</Subtitle>
                    <TypeResult type={high?.type} data={testResult} maxValue={20}></TypeResult>
                </Box>
            ) : (
                <Spinner/>
            )}
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    padding : 5%;
    margin-top : 5%;
    display : flex;
    height : 80%;
    flex-direction : column;
    align-items : center;
    justify-content : flex-start;
`
const Subtitle = styled.div`
    text-align : center;
    width : 80%;
    height : 50px;
    max-width : 300px;
    margin-bottom : 5%;
    border-radius : 5px;
    font-size : 2.0rem;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : ${pallette.BLUISH};
`

export default Scr2;