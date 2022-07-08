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
import { setScr7 } from "../../features/parts/part3Slice";

const Scr7 = () => {

    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const scr6 = useSelector(state=>state.part3.information.scr6);
    const scr7 = useSelector(state=>state.part3.information.scr7);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr7(v)));
    }

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라! - 자동사고 기록지"/>
            <Box>
                <BlockBox title="상황" content={scr4}/>
                <BlockBox title="기분" content=""/>
                <BlockBox title="생각" content={scr6} fadein={true}/>
                <AnswerBox title="그때 떠오른 이미지는 무엇인가요?" index="4/7">
                    <TextArea height="100%" value={scr7} handleChange={(v)=>{handleChange(v)}}/>
                </AnswerBox>
            </Box>
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;
`

export default Scr7;