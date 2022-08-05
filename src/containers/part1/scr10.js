import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import Image from "../../assets/sample.jpg";
import TextArea from "../../components/textArea";
import { setBefore, setAfter } from "../../features/parts/part1Slice";
import { useSelector, useDispatch } from "react-redux";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";

const Scr10 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const before = useSelector(state=>state.part1.goal.before);
    const after = useSelector(state=>state.part1.goal.after);
    const dispatch = useDispatch();
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part1/scr10", { userIdx, before, after, }, 
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
    });
    useFetchREST(`/part1/scr10/${userIdx}`, 
        (result)=>{
            console.log(result);
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                dispatch(setBefore(result.data.goal.changeable));
                dispatch(setAfter(result.data.goal.sustainable));
            }
        }
    )


    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,10)}/>
            <Box>
                <Img src={Image} alt="이미지"/>
                <Content>
                    <Card>
                        <div>바꾸고 싶은 내 완벽주의 모습</div>
                        <TextArea value={before} handleChange={(v)=>{dispatch(setBefore(v))}}/>
                    </Card>
                    <Card>
                        <div>그대로 두고 싶은 내 완벽주의 모습</div>
                        <TextArea value={after} handleChange={(v)=>{dispatch(setAfter(v))}}/>
                    </Card>
                </Content>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 5vh;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    height : 75%;
`
const Img = styled.img`
    width : 60%;
    height : 60%;
`
const Content = styled.div`
    display : flex;
    justify-content : space-around;
    align-items : center;
    width : 100%;
    margin-top : 5%;
    font-size : 2.4rem;
`
const Card = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    width : 40%;

    & > div { 
        margin-bottom : 5%; 
        text-align : center;
        word-break : keep-all;
    }
`

export default Scr10;