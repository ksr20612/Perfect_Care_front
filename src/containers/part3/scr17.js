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
import Icon1 from "../../assets/ic_brin_blu.png"; 
import Icon2 from "../../assets/ic_puzzle.png";
import Icon3 from "../../assets/ic_bal.png";
import Icon4 from "../../assets/vision-svgrepo-com.png";
import { setHistory } from "services/setHistory";

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
        },
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
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
            <Box>
                <BlockBox title="나의 자동사고" content={scr10} fadein={true} style={{height : "30%"}}/>
                <AnswerBox title="내 자동사고의 오류는?">
                    <Options>
                        <Option color="" className={active[0]? "on" : null} onClick={(e)=>{handleClick(0, e.currentTarget.innerText)}}>
                            <CardName>재앙화 사고</CardName>
                            <CardIcon src={Icon1}></CardIcon>
                            <CardContent>"이번 시험도 망치다니, 내 대학 입시는 망했어."</CardContent>
                        </Option>
                        <Option color="" className={active[1]? "on" : null} onClick={(e)=>{handleClick(1, e.currentTarget.innerText)}}>
                            <CardName>흑백논리</CardName>
                            <CardIcon src={Icon2}></CardIcon>
                            <CardContent>"1등이 아니면 의미없지."</CardContent>
                        </Option>
                        <Option color="" className={active[2]? "on" : null} onClick={(e)=>{handleClick(2, e.currentTarget.innerText)}}>
                            <CardName>당위진술</CardName>
                            <CardIcon src={Icon3}></CardIcon>
                            <CardContent>"아무리 바빠도 운동은 매일 해야해."</CardContent>
                        </Option>
                        <Option color="" className={active[3]? "on" : null} onClick={(e)=>{handleClick(3, e.currentTarget.innerText)}}>
                            <CardName>지나친 일반화</CardName>
                            <CardIcon src={Icon4}></CardIcon>
                            <CardContent>"지난번 발표때 실수했으니까 오늘도 분명 실수할거야."</CardContent>
                        </Option>
                    </Options>
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
    height : 80%;
`
const Options = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    width : 100%;
    height : 45vh;
`
const Option = styled.div`
    background-color : ${props => props.color || lighten(0.1, pallette.BLUISH)};
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    padding : 5%;
    margin : 1vmin;
    cursor : pointer;
    transition : all .3s ease-out;
    border-radius : 10px;

    &.on {
        background-color : ${props => darken(0.1, props.color || pallette.BLUISH)};
    }
    &:hover {
        background-color : ${props => darken(0.1, props.color || pallette.BLUISH)};
    }
`
const CardName = styled.div`
    width : 100%;
    height : auto;
    text-align : left;
    border-bottom : 2px solid ${pallette.BLUISH};
`
const CardContent = styled.div`
    font-size : 2.8rem;
    font-family : "Hand";
    white-space : pre-line;
    width : 100%;
    flex : 1;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around;
    color : #919191;
    text-align : center;
    word-break : keep-all;
`
const CardIcon = styled.div`
    width : 40%;
    height : 40%;
    background : url(${props=>props.src});
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    margin-top : 5%;
`

export default Scr16;