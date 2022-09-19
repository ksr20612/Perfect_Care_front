import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import pallette from "../../styles/pallette.css";
import sampleIcon from "../../assets/emotions/panic.svg";
import { lighten, darken } from "polished";
import DiscreteSlider from "../discreteSlider";

const Card = ({
    name = "화남",
    definition = "부당한 상황에서 화가 치밀어 오르는 감정",
    icon = sampleIcon,
    idx,
    selected = { isSelected : false, score : 0 },
    handleSelected = f=>f,
}) => {

    // 0 : none, 1 : flipped
    const [isFlipped, setFlipped] = useState(0);
    const [score, setScore] = useState(selected?.score);
    const handleClick = (target) => {
        console.log(target);
        setFlipped(!isFlipped);
    }
    const handleChange = (e) => {
        setScore(e.target.value*1);
    }

    return (
        <Box isSelected={selected?.isSelected} isFlipped={isFlipped} onClick={(e)=>handleClick(e.target)}>
            <Front>
                <Title icon={icon}>
                    <Name icon={icon}>{name}</Name>
                </Title>
                {
                    selected?.isSelected
                    ?<Score>{score}점</Score>
                    :<Definition>{definition}</Definition>
                }
            </Front>
            <Back>
                <Title>
                    <Name icon={icon}>{name}</Name>
                    <FlipBtn onClick={(e)=>{console.log("clicked"); e.stopPropagation(); setFlipped(!isFlipped); handleSelected(name, score)}}>결정</FlipBtn>
                </Title>
                <Wrapper>
                    <DiscreteSlider value={score} handleChange={(e)=>handleChange(e)} color={idx%2? "red" : "blue"}/> 
                    <Small>
                        <Btn onClick={(e)=>{e.stopPropagation(); setScore(score-1)}}>-</Btn>
                        {score}점 줄래요
                        <Btn onClick={(e)=>{e.stopPropagation(); setScore(score+1)}}>+</Btn>
                    </Small>
                </Wrapper>
            </Back>
        </Box> 
    )
}

const Box = styled(motion.div)`
    width : 100%;
    height : 180px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : ${pallette.WHITE};
    color : ${pallette.BLACK};
    font-size : 2.0rem;
    perspective : 1000px;
    position : relative;
    transition : transform .3s ease-in-out;
    transform-style : preserve-3d;
    box-shadow: 0px 10px 20px #C4C8D066;
    border-radius : 20px;

    ${props=>props.isSelected && css`
        border : 4px solid ${lighten(0.3, pallette.GREEN)};
    `}
    ${props=>props.isFlipped && css`
        transform : rotateY(180deg);
    `}
`
const Title = styled.div`
    border-bottom : 2px solid ${lighten(0.7, pallette.BLUE)};
    line-height : 1.5;
    font-size : 2.8rem;
    font-weight : 700;
    color : ${pallette.BLUE};
    display : flex;
    align-items : center;
    justify-content : space-between;
    position : relative;
`
const Name = styled.div`
    display : flex;
    align-items : center;
    &:after {
        content : "";
        display : inline-block;
        background : url(${props=>props.icon});
        background-size : cover;
        background-position : center;
        background-repeat : no-repeat;
        width : 36px;
        height : 36px;
    }
`
const Front = styled.div`
    width : 100%;
    height : 100%;
    background-color : ${pallette.WHITE};
    position : absolute;
    backface-visibility : hidden;
    transform-style : preserve-3d;
    padding : 5%;
    display : flex;
    flex-direction : column;
    border-radius : 20px;
`
const Back = styled.div`
    width : 100%;
    height : 100%;
    background-color : ${pallette.WHITE};
    position : absolute;
    backface-visibility : hidden;
    transform-style : preserve-3d;
    padding : 5%;
    display : flex;
    flex-direction : column;
    transform : rotateY(180deg);
    border-radius : 20px;
`
const Score = styled.div`
    width : 100%;
    flex : 1;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    text-align : center;
    word-break : keep-all; 
    font-size : 4.0rem;
    font-weight : 1000;
    padding : 5%;
    letter-spacing : 1rem;
    transform : translateX(0.5rem);
    position : relative;
`
const Definition = styled.div`
    width : 100%;
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    word-break : keep-all; 
    font-size : 2.6rem;
    padding : 5%;
`
const Wrapper = styled.div`
    width : 100%;
    flex : 1;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`
const Small = styled.div`
    font-size : 2.4rem;
    font-weight : 400;
    margin-top : 5%;
    width : 100%;
    display : flex;
    justify-content : space-around;
`
const Btn = styled.button`
    outline : none;
    border : none;
    font-weight : 800;
    width : 20px;
    height : 20px;
    &:active {
        background : #aaa;
    }
`
const FlipBtn = styled.button`
    border : none;
    width : auto;
    height : 100%;
    font-weight : 600;
    font-size : 2.4rem;
    align-self : flex-end;
    justify-self : flex-end;
    color : ${pallette.BLUE};
    right : 0;
    z-index : 2;
    &:active { background : #aaa }
    & + & { margin-left : 2%;}
`

export default Card;