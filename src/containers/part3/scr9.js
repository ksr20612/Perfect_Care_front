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
import { setScr4, setScr5, setScr6, setScr7, setScr8, setScr9 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";
import { toString } from "../../utils/part3Converter";

const Scr9 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const emotionString = toString(scr5);
    const scr6 = useSelector(state=>state.part3.information.scr6);
    const scr7 = useSelector(state=>state.part3.information.scr7);
    const scr8 = useSelector(state=>state.part3.information.scr8);
    const scr9 = useSelector(state=>state.part3.information.scr9);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr9(v)));
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part3/scr9", { userIdx, disaster : scr9 }, 
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
    useFetchREST(`/part3/illustration/${userIdx}`, 
        (result)=>{
            console.log(result);
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                dispatch(setScr4(result.data.illustration.scr4));
                dispatch(setScr5(result.data.illustration.scr5));
                dispatch(setScr6(result.data.illustration.scr6));
                dispatch(setScr7(result.data.illustration.scr7));
                dispatch(setScr8(result.data.illustration.scr8));
                dispatch(setScr9(result.data.illustration.scr9));
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,9)}/>
            <Box>
                <BlockBox title="상황" content={scr4}/>
                <BlockBox title="기분" content={emotionString}/>
                <BlockBox title="생각" content={scr6}/>
                <BlockBox title="이미지" content={scr7}/>
                <BlockBox title="나는 어떤 사람?" content={scr8} fadein={true}/>
                <AnswerBox title="최악의 경우 어떤 일이 일어날 것이라고 생각했나요?" index="6/7" styles={{height : "100%"}}>
                    <TextArea height="100%" value={scr9} handleChange={(v)=>{handleChange(v)}} />
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
    position : relative;
    height : 40%;
`

export default Scr9;