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
import { setScr10 } from "../../features/parts/part3Slice";

const Scr10 = () => {

    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const scr6 = useSelector(state=>state.part3.information.scr6);
    const scr7 = useSelector(state=>state.part3.information.scr7);
    const scr8 = useSelector(state=>state.part3.information.scr8);
    const scr9 = useSelector(state=>state.part3.information.scr9);
    const scr10 = useSelector(state=>state.part3.information.scr10);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr10(v)));
    }

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="생각을 수색하라! - 자동사고 기록지"/>
            <Box>
                <div>
                    <BlockBox title="상황" content={scr4}/>
                    <BlockBox title="기분" content=""/>
                    <BlockBox title="생각" content={scr6}/>
                    <BlockBox title="이미지" content={scr7}/>
                    <BlockBox title="나는 어떤 사람?" content={scr8}/>
                    <BlockBox title="최악의 경우?" content={scr9} fadein={true}/>
                </div>
                <div>
                    <AnswerBox title="나의 자동사고는?" index="7/7">
                        <TextArea height="100%" value={scr10} handleChange={(v)=>{handleChange(v)}}/>
                    </AnswerBox>
                </div>
            </Box>
        </>
    )
}

const Box = styled.div`
    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;
    position : relative;
    display : flex;
    
    & > div:first-child {
        width : 50%;
    }
    & > div:last-child {
        width : 50%;
        padding-left : 3vmin;
    }
`

export default Scr10;