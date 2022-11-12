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
import { setCircumstance, setThought, setReaction, setFutureReaction } from "../../features/parts/part4Slice";
// import { validateSchema } from "graphql";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";
import SingleTalk from "../../components/singleTalk";
import { setHistory } from "services/setHistory";

const Scr9 = () => {

    const dispatch = useDispatch();
    const userIdx = useSelector(state=>state.state.userIdx);
    const circumstance = useSelector(state=>state.part4.mistake.circumstance);
    const thought = useSelector(state=>state.part4.mistake.thought);
    const reaction = useSelector(state=>state.part4.mistake.reaction);
    const futureReaction = useSelector(state=>state.part4.mistake.futureReaction);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            if(!futureReaction) {
                toastError("어떻게 대처할 수 있을지 적어주세요");
                return false;
            }
            POST("/part4/scr9", { userIdx, futureReaction }, 
                (result) => {
                    if(result.data.message) {
                        toastError(result.data.message, {});
                        return false;
                    }else {
                        return true;
                    }
                }
            )
        },
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });
    useFetchREST(`/part4/mistake/${userIdx}`, 
        (result)=>{
            console.log(result);
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                dispatch(setCircumstance(result.data.mistake.description));
                dispatch(setThought(result.data.mistake.thought));
                dispatch(setReaction(result.data.mistake.reaction));
                dispatch(setFutureReaction(result.data.mistake.futureReaction));
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,9)}/>
            <Box>
                <Wrapper>
                    <SingleTalk isMe={false} transitionDelay={0} texts={["너는 어떤 실수가 가장 기억에 남아?"]}/>
                    <SingleTalk as={motion.div} layoutId={"message_me"} isMe={true} transitionDelay={0} texts={[circumstance]}/>
                    <SingleTalk as={motion.div} layoutId={"message_thought"} isMe={true} transitionDelay={0.3} texts={[thought]}/>
                    <SingleTalk as={motion.div} layoutId={"message_reaction"} isMe={true} transitionDelay={0.6} texts={[reaction]}/>
                </Wrapper>
                <Question>Q. 만약 다음번에 동일한 실수를 하게 된다면 어떻게 대처할 수 있을까?</Question>
                <TextArea value={futureReaction} handleChange={(v)=>dispatch(setFutureReaction(v))} customStyle={{padding : "20px"}} placeholder="예: 자책하지 않고, 실수를 만회할 수 있는 방법을 침착하게 생각해 본다."/>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    margin-top : 8vh;
`
const Wrapper = styled.div`
    width : 100%;
    max-height : 80%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    overflow-y : auto;
`
const Question = styled.div`
    color : ${pallette.NEWBLACK};
    font-size : 2.8rem;
    font-family : "Medium";
    margin-bottom : 1vh;
    margin-top : 5vh;
`

export default Scr9;