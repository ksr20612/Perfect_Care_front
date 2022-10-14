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
import { setScr4, setScr5, setScr6, setScr7 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";
import { toString } from "../../utils/part3Converter";
import { setHistory } from "services/setHistory";
import ImgCard from "components/imgCard";
import img1 from "assets/imgCards/img1.jpg";
import img2 from "assets/imgCards/img2.jpg";
import img3 from "assets/imgCards/img3.jpg";
import img4 from "assets/imgCards/img4.jpg";

const Scr7 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const scr4 = useSelector(state=>state.part3.information.scr4);
    const scr5 = useSelector(state=>state.part3.information.scr5);
    const emotionString = toString(scr5);
    const scr6 = useSelector(state=>state.part3.information.scr6);
    const scr7 = useSelector(state=>state.part3.information.scr7);
    const dispatch = useDispatch();
    const handleChange = (v) => {
        dispatch(dispatch(setScr7(v)));
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part3/scr7", { userIdx, image : scr7 }, 
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
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,7)}/>
            <Box>
                <BlockBox title="상황" content={scr4}/>
                <BlockBox title="감정" content={emotionString}/>
                <BlockBox title="떠오른 생각들" content={scr6} fadein={true}/>
                <AnswerBox title="그때 자신이 어떤 이미지로 느껴졌나요?" index="4/7" styles={{height : "100%"}}>
                    <Wrapper>
                        <ImgCard img={img1} description={"누구와도 어울리지 못하는 내 모습"} style={{backgroundPosition : "11% center"}}/>
                        <ImgCard img={img2} description={"놀림받는 내 모습"}/>
                        <ImgCard img={img3} description={"도망가고 싶은 내 모습"}/>
                        <ImgCard img={img4} description={"실패한 내 모습"}/>
                    </Wrapper>
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
const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display : grid;
    grid-template-rows : 1fr;
    grid-template-columns : repeat(4, 1fr);
    gap : 2%;
`

export default Scr7;