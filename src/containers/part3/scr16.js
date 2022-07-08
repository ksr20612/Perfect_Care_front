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
import { useSelector } from "react-redux";

const Scr16 = () => {

    const scr10 = useSelector(state=>state.part3.information.scr10);
    const scr16 = useSelector(state=>state.part3.information.scr16);
    const [active, setActive] = useState(new Array(4));
    const handleClick = (target) => {
        const newArr = [...active].map((__,i)=>i===target? true : false);
        setActive([...active].map((__,i)=>i===target? true : false));
    }

    return (
        <>
            <Title title="Part3 완벽 관리하기" subTitle="찾았다! 완벽주의의 주범"/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <BlockBox title="나의 자동사고" content={scr10} fadein={true}/>
                <AnswerBox title="내 자동사고의 오류는?">
                    <Options>
                        <Option color="" className={active[0]? "on" : null} onClick={()=>handleClick(0)}>재앙화 사고</Option>
                        <Option color="" className={active[1]? "on" : null} onClick={()=>handleClick(1)}>흑백논리</Option>
                        <Option color="" className={active[2]? "on" : null} onClick={()=>handleClick(2)}>당위진술</Option>
                        <Option color="" className={active[3]? "on" : null} onClick={()=>handleClick(3)}>지나친 일반화</Option>
                    </Options>
                </AnswerBox>
            </Box>
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