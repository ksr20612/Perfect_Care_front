import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import BlockBox from "../../components/blockBox";
import AnswerBox from "../../components/answerBox";
import TextArea from "../../components/textArea";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { useSelector, useDispatch } from "react-redux";
import { setScr4, setScr5, setScr6 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";
import { toString } from "../../utils/part3Converter";
import { setHistory } from "services/setHistory";

const Scr6 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const emotionString = toString(scr5);
    const scr6 = useSelector(state=>state.part3.information.scr6);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr6(v)));
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            if(!emotionString) {
                toastError("어떤 생각이 떠올랐는지 적어주세요");
                return false;
            }
            POST("/part3/scr6", { userIdx, thought : scr6 }, 
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
    useFetchREST(`/part3/illustration/${userIdx}`, 
        (result)=>{
            console.log(result);
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                dispatch(setScr4(result.data.illustration.scr4));
                dispatch(setScr5(result.data.illustration.scr5));
                dispatch(setScr6(result.data.illustration.scr6));
            }
        }
    )


    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,6)}/>
            <Box>
                <BlockBox title="상황" content={scr4} />
                <BlockBox title="감정" content={emotionString} fadein={true}/>
                <AnswerBox title="어떤 생각이 떠올랐나요? (떠오르는대로 적어보세요)" index="3/7" styles={{height : "100%"}}>
                    <TextArea height="100%" value={scr6} handleChange={(v)=>{handleChange(v)}} placeholder="예: 왜 그런 실수를 하는지 이해가 되지 않았고, 다른 팀원들도 실수할 바에야 그냥 혼자 하는 것이 낫다는 생각이 들었다."/>
                </AnswerBox>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Medium";
    padding : 0 1vw;
    padding-top : 5%;
    height : 60%;
    position : relative;
`

export default Scr6;