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
import { setScr8 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";

const Scr8 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const scr6 = useSelector(state=>state.part3.information.scr6);
    const scr7 = useSelector(state=>state.part3.information.scr7);
    const scr8 = useSelector(state=>state.part3.information.scr8);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr8(v)));
    }

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,8)}/>
            <Box>
                <BlockBox title="상황" content={scr4}/>
                <BlockBox title="기분" content=""/>
                <BlockBox title="생각" content={scr6}/>
                <BlockBox title="이미지" content={scr7} fadein={true}/>
                <AnswerBox title="내가 어떤 사람이라는 생각이 들었나요?" index="5/7">
                    <TextArea height="100%" value={scr8} handleChange={(v)=>{handleChange(v)}}/>
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

export default Scr8;