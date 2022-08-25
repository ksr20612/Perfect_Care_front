import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import GirlImg from "../../assets/img_girl.png";
import SpeechBubble from "../../components/speechBubble";
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
import { setMyself } from "../../features/parts/part5Slice";

const list = [
    { content : "실수를 통해 배운다고 생각한다", image : Bubble1, style : { top : "77%", left : "17%" }},
    { content : "대부분 나를 탓한다", image : Bubble2, style : { top : "50%", left : "3%" }},
    { content : "성실한 편이다", image : Bubble3, style : { top : "55%", left : "23%" }},
    { content : "꼼꼼하게 일을 한다", image : Bubble4, style : { top : "30%", left : "20%" }},
    { content : "내 기준이 높다고 생각한다", image : Bubble5, style : { top : "40%" }},
    { content : "눈치가 빠르다", image : Bubble6, style : { top : "16%" }},
    { content : "타인과 비교하곤 한다", image : Bubble7, style : { top : "55%", right : "23%" }},
    { content : "때때로 불안하다", image : Bubble8, style : { top : "30%", right : "20%" }},
    { content : "자주 화가 난다", image : Bubble9, style : { top : "77%", right : "17%" }},
    { content : "강박적인 편이다", image : Bubble10, style : { top : "50%", right : "3%" }},
    { content : "결과보다 과정이 중요", image : Bubble6, style : { top : "74%", left : "-5%" }},
    { content : "강박적인 편이다", image : Bubble4, style : { top : "53%", left : "-17%", }},
    { content : "타인의 평가에 민감하다", image : Bubble1, style : { top : "25%", left : "-2%" }},
    { content : "실수를 하면 부끄럽다", image : Bubble2, style : { top : "5%", left : "18%" }},
    { content : "계획적이다", image : Bubble3, style : { top : "-6%", left : "" }},
    { content : "능력을 인정받고 싶어한다", image : Bubble10, style : { top : "5%", right : "18%" }},
    { content : "타인에게 엄격하다", image : Bubble9, style : { top : "25%", right : "-2%" }},
    { content : "게으른 것 같다", image : Bubble8, style : { top : "53%", right : "-17%" }},
    { content : "모든 경우의 수를 다 생각한다", image : Bubble7, style : { top : "74%", right : "-5%" }},
];


const Scr2 = () => {

    const dispatch = useDispatch();
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    // const [checked, setChecked] = useState([]);
    const checked = useSelector(state=>state.part5.myself);
    const handleCheck = (v) => {
        console.log(v);
        if(checked.includes(v)) {
            dispatch(setMyself([...checked.filter((item,i)=>item!==v)]));
        }else {
            dispatch(setMyself([...checked, v]));
        }
    }

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,2)}/>
            <Question>Q. '나'는 어떤 사람일까?</Question>
            <Inst>다음 중 나에게 해당한다고 생각되는 문장을 선택해주세요.</Inst>
            <Options>
                <Girl></Girl>
                {
                    list.map((bubble, i)=>{
                        return <SpeechBubble checked={checked.includes(bubble.content)} delay={(i+1)*0.2} content={bubble.content} style={bubble.style} onCheck={()=>handleCheck(bubble.content)}><bubble.image /></SpeechBubble>
                    })
                }
            </Options>
            {renderArrow()}
        </>
    )
}

const Question = styled.div`
    margin-top : 2%;
    font-size : 2.8rem;
    color : #3C3C3C;
    font-family : "SemiBold";
    text-align : center;
`
const Inst = styled.div`
    font-size : 2.4rem;
    color : #3c3c3c;
    font-family : "Regular";
    text-align : center;
    margin-bottom : 2%;
`
const Options = styled.div`
    position : relative;
    width : 80%;
    height : 60vh;
    margin : 2% auto;
    display : flex;
    justify-content : center;
`
const Girl = styled.div`
    width : 20%;
    height : 50%;
    background : url(${GirlImg});
    background-position : bottom;
    background-repeat : no-repeat;
    background-size : contain;
    position : absolute;
    bottom : 0;
`


export default Scr2;