import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SamplePic from "../assets/sample.jpg";
import pallette from "../styles/pallette.css";
import DiscreteSlider from "../components/discreteSlider";
import { darken } from "polished";

const Card = ({
    name = "화남",
    definition = "부당한 상황에서 화가 치밀어 오르는 감정",
    image = SamplePic,
    size = {width : "100%", height : "100%"},
    color = "black",
    isSelected = false, // 선택되었으면 점수
    selectedScore = null, 
    handleSelected = f=>f,
}) => {

    // 0 : none, 1 : centered , 2 : flipped
    const [status, setStatus] = useState(0);
    const [score, setScore] = useState(selectedScore || 5);
    const handleClick = (target) => {
        if(target.classList.contains("slider")) { return; };
        switch(status) {
            case 0 :
                return setStatus(1);
            case 1 :
                return setStatus(2);
            case 2 : 
                return setStatus(0);
            default : return;
        }
    }
    const handleChange = (score) => {
        setScore(score);
    }

    return (
        <>
            <Box className={isSelected? "selected" : status === 2? "centered flipped" : status === 1? "centered" : null} onClick={(e)=>{handleClick(e.target)}} size={size}>
                <Front color={color}>
                    <div>#{name}</div>
                    <img src={image} alt={"pic_of_"+name}/>
                </Front>
                <Back color={color}>
                    <Title>
                        <div>#{name}</div>
                        <img src={image} alt={"pic_of_"+name}/>
                        <Button className="button" onClick={()=>{handleSelected(name, score)}}>선택</Button>
                    </Title>
                    <Def>{definition}</Def>
                    <DiscreteSlider value={score} handleChange={(score)=>{handleChange(score)}}/>
                </Back>
            </Box>
            {status !== 0? <Background onClick={()=>{setStatus(0)}}/> : null}
        </>
    )
}

const Box = styled.div`
    width : ${props => props.size.width};
    height : ${props => props.size.height};
    perspective : 1000px;
    position : relative;
    border : 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px;
    transition : transform 0.3s ease-in-out;
    transform-style : preserve-3d;

    &.selected {
        border : 5px solid ${pallette.YELLOW};
    }
    &.centered {
        width : 20vw;
        height : 50vh;
        position : fixed;
        z-index : 10;
        top : calc(50vh - ( 50vh / 2 ));
        left : calc(50vw - ( 20vw / 2 ));
    }
    &.flipped {
        transform : rotateY(180deg);
    }
`
const Front = styled.div`
    background-color : ${pallette.WHITE};
    width : 100%;
    height : 100%;
    position : absolute;
    backface-visibility: hidden;
	transform-style: preserve-3d;
    padding : 10%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around; 
    font-size : 2.5rem;
    color : ${props => props.color};
`
const Back = styled.div`
    background-color : ${pallette.WHITE};
    width : 100%;
    height : 100%;
    position : absolute;
    backface-visibility: hidden;
	transform-style: preserve-3d;
    padding : 10%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
    font-size : 1.6rem;
    color : ${props => props.color};
    transform : rotateY(180deg);
`
const Title = styled.div`
    display : flex;
    width : 100%;
    
    & > img {
        margin-left : 5%;
        width : 20%;
        height : 100%;
    }
`
const Def = styled.div`
    word-break : keep-all;
    text-align : center;
`
const Background = styled.div`
    position : fixed;
    background : hsla(0, 100%, 100%, 0.1);
    backdrop-filter : saturate(150%) blur(10px);
    top : 0;
    left : 0;
    width : 100vw;
    height : 100vh;
    z-index : 9;
`
const Button = styled.div`
    background-color : ${pallette.YELLOW};
    color : white;
    display : flex;
    justify-content : center;
    align-items : center;
    width : 20%;
    margin-left : auto;
    cursor : pointer;
    transition : all .3s ease-in-out;
    animation-name : glitter;
    animation-duration : 1s;
    animation-timing-function : linear;
    animation-iteration-count : infinite;
    animation-direction : alternate;

    &:hover {
        background-color : ${darken(0.1,pallette.YELLOW)};
        animation : none;
    }

    @keyframes glitter {
        from {
            background-color : ${pallette.YELLOW};
        }
        to {
            background-color : ${darken(0.1,pallette.YELLOW)};
        }
    }
`

export default Card;