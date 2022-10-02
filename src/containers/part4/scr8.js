import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import TextArea from "../../components/textArea";
import { usePage } from "../../hooks/usePage";
import { useSelector, useDispatch } from "react-redux";
import { setCircumstance, setReaction, setThought } from "../../features/parts/part4Slice";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";
import SingleTalk from "../../components/singleTalk";

const Scr8 = () => {

    const dispatch = useDispatch();
    const userIdx = useSelector(state=>state.state.userIdx);
    const circumstance = useSelector(state=>state.part4.mistake.circumstance);
    const thought = useSelector(state=>state.part4.mistake.thought);
    const reaction = useSelector(state=>state.part4.mistake.reaction);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part4/scr8", { userIdx, data : {thought, reaction} }, 
                (result) => {
                    if(result.data.message) {
                        toastError(result.data.message, {});
                        return false;
                    }else {
                        return true;
                    }
                }
            )
        }
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
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,8)}/>
            <Box>
                {/* <Card>{circumstance}</Card> */}
                <Wrapper>
                    <SingleTalk isMe={false} transitionDelay={0} texts={["너는 어떤 실수가 가장 기억에 남아?"]}/>
                    <SingleTalk as={motion.div} layoutId={"message_me"} isMe={true} transitionDelay={0} texts={[circumstance]}/>
                </Wrapper>
                <Question>Q. 그 당시 나는 어떤 생각이 들었나요?</Question>
                <TextArea value={thought} placeholder="예 : 스스로가 너무 한심하다는 생각이 들었다." handleChange={(v)=>dispatch(setThought(v))} customStyle={{padding : "20px"}}/>
                <Question>Q. 그 당시 나는 어떻게 대처하였나요?</Question>
                <TextArea value={reaction} placeholder="예 : 당황하여 아무 대처도 하지 못했다." handleChange={(v)=>dispatch(setReaction(v))} customStyle={{padding : "20px"}}/>
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
    max-height : 40%;
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

export default Scr8;