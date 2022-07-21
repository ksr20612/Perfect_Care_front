import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Paper } from "../../styles/components/paper";
import Question from "../../components/question";

const questionList = [

]

const Scr4 = () => {

    const handleClick = (index, score) => {

    }

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,4)}/>
            <Box>
                <Info>
                    <div>나의 xx는</div>
                    <div>검사 시간은 10분 내외입니다.</div>
                </Info>
                {
                    questionList.map((question, i)=>{
                        return <Question content={question} handleClick={(score)=>handleClick(i, score)}/>
                    })
                }
            </Box>
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 5vh;
    font-size : 3.2rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    height : 75%;
    word-break : keep-all;
`
const Info = styled.div`

`

export default Scr4;