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

const list = [
    { content : "섬세하다", image : Bubble1, style : { top : "67%", left : "17%" }},
    { content : "거만하다", image : Bubble2, style : { top : "40%", left : "0%" }},
    { content : "눈치가 빠르다", image : Bubble3, style : { top : "45%", left : "23%" }},
    { content : "자주 화가난다", image : Bubble4, style : { top : "20%", left : "17%" }},
    { content : "실수를 하면 부끄럽다", image : Bubble5, style : { top : "30%" }},
    { content : "타인에게 엄격하다", image : Bubble6, style : { top : "6%" }},
    { content : "쉽게 상처받는다", image : Bubble7, style : { top : "45%", right : "23%" }},
    { content : "자주 자책한다", image : Bubble8, style : { top : "20%", right : "17%" }},
    { content : "최악의 시나리오를 자주 상상한다", image : Bubble9, style : { top : "67%", right : "17%" }},
    { content : "우울할 때가 많다", image : Bubble10, style : { top : "40%", right : "0%" }},
]


const Scr2 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    const [checked, setChecked] = useState([]);
    const handleCheck = (v) => {
        console.log(v);
        if(checked.includes(v)) {
            setChecked([...checked.filter((item,i)=>item!==v)]);
        }else {
            setChecked([...checked, v]);
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
                        return <SpeechBubble checked={checked.includes(i)} delay={(i+1)*0.2} content={bubble.content} style={bubble.style} onCheck={()=>handleCheck(i)}><bubble.image /></SpeechBubble>
                    })
                }
            </Options>
            {renderArrow()}
        </>
    )
}

const Question = styled.div`
    margin-top : 5%;
    font-size : 3.2rem;
    color : #3C3C3C;
    font-family : "SemiBold";
    text-align : center;
`
const Inst = styled.div`
    font-size : 2.8rem;
    color : #3c3c3c;
    font-family : "Regular";
    text-align : center;
`
const Options = styled.div`
    position : relative;
    width : 100%;
    height : 70%;
    margin-top : 3%;
    display : flex;
    justify-content : center;
`
const Girl = styled.div`
    width : 30%;
    height : 50%;
    background : url(${GirlImg});
    position : absolute;
    bottom : 0;
`


export default Scr2;