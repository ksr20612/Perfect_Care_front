import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import TextArea from "../../components/textArea";
import GuruBox from "../guruBox";
import BlockBox from "../../components/blockBox";
import AnswerBox from "../../components/answerBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { useSelector, useDispatch } from "react-redux";
import { setScr10, setScr16 } from "../../features/parts/part3Slice";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";

const Scr16 = () => {

    const dispatch = useDispatch();
    const userIdx = useSelector(state=>state.state.userIdx);
    const scr10 = useSelector(state=>state.part3.information.scr10);
    const scr16 = useSelector(state=>state.part3.information.scr16);
    const [active, setActive] = useState(new Array(4));
    const handleClick = (target, text) => {
        const newArr = [...active].map((__,i)=>i===target? true : false);
        setActive([...active].map((__,i)=>i===target? true : false));
        dispatch(setScr16(text));
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part3/scr16", { userIdx, autoThought : scr16 }, 
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
                dispatch(setScr10(result.data.illustration.scr10));
                dispatch(setScr16(result.data.illustration.scr16));
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(3)} subTitle={getPageTitle(3,16)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <BlockBox title="나의 자동사고" content={scr10} fadein={true}/>
                <AnswerBox title="내 자동사고의 오류는?">
                    <Options>
                        <Option color="" className={active[0]? "on" : null} onClick={(e)=>{handleClick(0, e.currentTarget.innerText)}}>재앙화 사고</Option>
                        <Option color="" className={active[1]? "on" : null} onClick={(e)=>{handleClick(1, e.currentTarget.innerText)}}>흑백논리</Option>
                        <Option color="" className={active[2]? "on" : null} onClick={(e)=>{handleClick(2, e.currentTarget.innerText)}}>당위진술</Option>
                        <Option color="" className={active[3]? "on" : null} onClick={(e)=>{handleClick(3, e.currentTarget.innerText)}}>지나친 일반화</Option>
                    </Options>
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
const Options = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
`
const Option = styled.div`
    background-color : ${props => props.color || lighten(0.1, pallette.BLUISH)};
    display : flex;
    align-items : center;
    justify-content : center;
    padding : 1vmin;
    margin : 1vmin;
    cursor : pointer;
    transition : all .3s ease-out;

    &.on {
        background-color : ${props => darken(0.1, props.color || pallette.BLUISH)};
    }
    &:hover {
        background-color : ${props => darken(0.1, props.color || pallette.BLUISH)};
    }
`

export default Scr16;