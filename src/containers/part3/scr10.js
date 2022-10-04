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
import { setScr4, setScr5, setScr6, setScr7, setScr8, setScr9, setScr10 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";
import { toString } from "../../utils/part3Converter";
import Tip from "../../components/tip";
import { setHistory } from "services/setHistory";

const Scr10 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const emotionString = toString(scr5);
    const scr6 = useSelector(state=>state.part3.information.scr6);
    const scr7 = useSelector(state=>state.part3.information.scr7);
    const scr8 = useSelector(state=>state.part3.information.scr8);
    const scr9 = useSelector(state=>state.part3.information.scr9);
    const scr10 = useSelector(state=>state.part3.information.scr10);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr10(v)));
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part3/scr10", { userIdx, conclusion : scr10 }, 
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
                dispatch(setScr7(result.data.illustration.scr7));
                dispatch(setScr8(result.data.illustration.scr8));
                dispatch(setScr9(result.data.illustration.scr9));
                dispatch(setScr10(result.data.illustration.scr10));
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,10)}/>
            <Box>
                <div>
                    <BlockBox title="상황" content={scr4}/>
                    <BlockBox title="감정" content={emotionString}/>
                    <BlockBox title="떠오른 생각들" content={scr6}/>
                    <BlockBox title="이미지" content={scr7}/>
                    <BlockBox title="나는 어떤 사람?" content={scr8}/>
                    <BlockBox title="최악의 경우?" content={scr9} fadein={true}/>
                </div>
                <div>
                    <AnswerBox title="나의 자동사고는?" index="7/7" styles={{height : "70%"}}>
                        <TextArea height="100%" value={scr10} handleChange={(v)=>{handleChange(v)}}/>
                    </AnswerBox>
                    <Tip content="떠오른 생각, 이미지, 나는 어떤 사람, 최악의 경우를 종합했을 때 감정을 유발하는 핵심 생각을 한 문장으로 표현해보세요." styleOverrides={{flex : "1"}}/> 
                </div>
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
    display : flex;
    height : 80%;
    
    & > div:first-child {
        width : 50%;
        height : 100%;
        display : grid;
        grid-template-columns: repeat(6, repeat);
    }
    & > div:last-child {
        width : 50%;
        padding-left : 3vmin;
        height : 100%;
        display : flex;
        flex-direction : column;
    }
`
export default Scr10;