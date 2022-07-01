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

    // 0 : none, 1 : centered , 2 : flipped
    const [status, setStatus] = useState(0);
    const handleClick = (target) => {
        if(target.classList.contains("slider")) { return; } 
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

    return (
        <>
            <Box className={status === 2? "centered flipped" : status === 1? "centered" : null} onClick={(e)=>{handleClick(e.target)}} size={size}>
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
            {status !== 0? <Background onClick={()=>{setStatus(0)}}/> : null}
        </>
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

    &.centered {
        transform : scale(1.2);
        position : fixed;
        z-index : 10;
        top : calc(50vh - ( ${props => props.size.height} / 2 ));
        left : calc(50vw - ( ${props => props.size.width} / 2 ));
    }
    &.flipped {
        transform : scale(1.2) rotateY(180deg);
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
    background-color : rgba(0, 0, 0, .5);
    top : 0;
    left : 0;
    width : 100vw;
    height : 100vh;
    z-index : 9;
`

export default Card;