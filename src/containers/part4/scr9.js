import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Paper } from "../../styles/components/paper";
import TextArea from "../../components/textArea";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { useSelector, useDispatch } from "react-redux";
import { setFutureReaction } from "../../features/parts/part4Slice";
import { validateSchema } from "graphql";

const Scr9 = () => {

    const dispatch = useDispatch();
    const circumstance = useSelector(state=>state.part4.illustration.circumstance);
    const thought = useSelector(state=>state.part4.illustration.thought);
    const reaction = useSelector(state=>state.part4.illustration.reaction);
    const futureReaction = useSelector(state=>state.part4.illustration.futureReaction);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,9)}/>
            <Box>
                <Card>{circumstance}</Card>
                <Card as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={0.3}>{thought}</Card>
                <Card as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={0.4}>{reaction}</Card>
                <Question>Q. 만약 다음번에 동일한 실수를 하게 된다면 어떻게 대처할 수 있을까?</Question>
                <TextArea value={futureReaction} handleChange={(v)=>dispatch(setFutureReaction(v))} customStyle={{padding : "20px"}}/>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    margin-top : 8vh;
`
const Card = styled(Paper)`
    background-color : #F4F2F0;
    height : 20vh;

    &:not(:first-of-type) {
        height : 10vh;
        margin-top : 2vh;
    }
`
const Question = styled.div`
    color : ${pallette.NEWBLACK};
    font-size : 2.8rem;
    font-family : "Medium";
    margin-bottom : 1vh;
    margin-top : 5vh;
`

export default Scr9;