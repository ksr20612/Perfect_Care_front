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
            }
        }
    )


    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,6)}/>
            <Box>
                <BlockBox title="상황" content={scr4} />
                <BlockBox title="기분" content={emotionString} fadein={true}/>
                <AnswerBox title="어떤 생각이 떠올랐나요?" index="3/7">
                    <TextArea height="100%" value={scr6} handleChange={(v)=>{handleChange(v)}}/>
                </AnswerBox>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;
`

export default Scr6;