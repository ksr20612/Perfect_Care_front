import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SamplePic from "../assets/sample.jpg";
import pallette from "../styles/pallette.css";
import DiscreteSlider from "../components/discreteSlider";

const Card = ({
    name = "화남",
    definition = "부당한 상황에서 화가 치밀어 오르는 감정",
    image = SamplePic,
    size = {width : "10vw", height : "16vw"},
    color = "black",
}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = (target) => {
        if(target.classList.contains("slider")) { return; } 
        setIsFlipped(!isFlipped);
    }

    return (
        <Box className={isFlipped? "flipped" : null} onClick={(e)=>{handleClick(e.target)}} size={size}>
            <Front color={color}>
                <div>#{name}</div>
                <img src={image} alt={"pic_of_"+name}/>
            </Front>
            <Back color={color}>
                <Title>
                    <div>#{name}</div>
                    <img src={image} alt={"pic_of_"+name}/>
                </Title>
                <Def>{definition}</Def>
                <DiscreteSlider/>
            </Back>
        </Box>
    )
}

const Box = styled.div`
    width : ${props => props.size.width};
    height : ${props => props.size.height};
    perspective : 1000px;
    position : relative;
    box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px;
    transition : all 0.3s ease-in-out;
    transform-style : preserve-3d;

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

export default Card;