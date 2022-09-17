import { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import HeadImg from "../../assets/img_per.png";
import Brain from "../../components/brain";
import Pattern1 from "../../assets/diagram.png";
import Pattern2 from "../../assets/greengram.png";
import Dots from "../../assets/dots.png";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";
import GirlImg from "../../assets/img_girl.png";
import SpeechBubble from "../../components/speechBubble";
import BrainIcon from "../../assets/brain-svgrepo-com.svg";
import CloserIcon from "../../assets/close-svgrepo-com.svg";
import { ReactComponent as Bubble1 } from "../../assets/ic_bub_def.svg";
import { ReactComponent as Bubble2 } from '../../assets/ic_bub_def-1.svg';
import { ReactComponent as Bubble3 } from '../../assets/ic_bub_def-2.svg';
import { ReactComponent as Bubble4 } from '../../assets/ic_bub_def-3.svg';
import { ReactComponent as Bubble5 } from '../../assets/ic_bub_def-4.svg';
import { ReactComponent as Bubble6 } from '../../assets/ic_bub_def-5.svg';
import { ReactComponent as Bubble7 } from '../../assets/ic_bub_def-6.svg';
import { ReactComponent as Bubble8 } from '../../assets/ic_bub_def-7.svg';
import { ReactComponent as Bubble9 } from '../../assets/ic_bub_def-8.svg';
import { ReactComponent as Bubble10 } from '../../assets/ic_bub_def-9.svg';
import { useSelector, useDispatch } from "react-redux";
import { setMyself } from "../../features/parts/part1Slice";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";

const Scr3 = () => {

    const dispatch = useDispatch();
    const userIdx = useSelector(state=>state.state.userIdx);
    const myself = useSelector(state=>state.part1.myself);
    const handleCheck = (v) => {
        if(myself.length > 7) return;
        if(myself.includes(v)){
            dispatch(setMyself(myself.filter((item)=>item!==v)));
        }else {
            dispatch(setMyself([...myself, v]));
        }
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(1)} subTitle={getPageTitle(1,2)}/>
            <Inst>내가 보는 나, 이런 모습이었네요</Inst>
            <Box>
                <Head>
                    <Brain emotions={myself}></Brain>
                </Head>
                <Shadow/>
                <PatternPurple/>
                <PatternGreen/>
                <DotGroup/>
                <Circle1/>
                <Circle2/>
            </Box>
            {renderArrow()}
        </>
    )
}

const Inst = styled.div`
    font-size : 2.8rem;
    color : #3c3c3c;
    font-family : "Regular";
    text-align : center;
    margin : 3%;
`
const Box = styled(Paper)`
    position : absolute;
    width : 691px;
    height : 524px;
    display : flex;
    justify-content : center;
    align-items : center;
    left : 50%;
    bottom : 45%;
    transform : translate(-50%, 50%);
    box-shadow : none;
    background : transparent;
`
const Head = styled.div`
    width : 100%;
    height : 100%;
    background : url(${HeadImg});
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center center;
    position : relative;
    z-index : 3;
`
const Shadow = styled.div`
    background-color : #DDDBD7;
    width : 80%;
    height : 8%;
    border-radius : 50%;
    position : absolute;
    z-index : 1;
    bottom : 4%;
    left : 10%;
`
const PatternPurple = styled.div`
    width : 13%;
    height : 13%;
    background : url(${Pattern1});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 10%;
    left : 20%;
`
const PatternGreen = styled.div`
    width : 30%;
    height : 30%;
    background : url(${Pattern2});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 5%;
    left : 58%;
`
const DotGroup = styled.div`
    width : 9%;
    height : 30%;
    background : url(${Dots});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    position : absolute;
    top : 5%;
    left : 77%;
`
const Circle1 = styled.div`
    width : 5%;
    background-color : #D7CCDD;
    border-radius : 50%;
    position : absolute;
    top : 23%;
    left : 16%;
    aspect-ratio : 1 / 1;
    opacity : 0.2;
`
const Circle2 = styled.div`
    width : 2.8%;
    background-color : #D7CCDD;
    border-radius : 50%;
    position : absolute;
    top : 26.5%;
    left : 18.5%;
    aspect-ratio : 1 / 1;
    opacity : 0.3;
`

export default Scr3;