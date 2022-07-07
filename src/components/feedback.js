import { useEffect, useState } from "react";
import styled from "styled-components";
import SamplePic from "../assets/sample.jpg";
import pallette from "../styles/pallette.css";

const Feedback = ({
    index = 0,
    isOn = 1, // 1 : default, true : focused, false : not focused
    handleClick,
    standard = "남들보다는 잘해야한다.",
    children
}) => {

    return (
        <Box onClick={()=>handleClick()} className={isOn===true? "on" : (isOn===1? null : "hidden")} transform={(index-1)*6.5}>
            <Standard className={isOn===true? "on" : (isOn===1? null : "hidden")}>{standard}</Standard>
            <Feed className={isOn===true? "on" : (isOn===1? null : "hidden")}>
                {children}
            </Feed>
        </Box>
    )
}
const Box = styled.div`
    padding : 1%;
    width : 100%;
    height : 60px;
    cursor : pointer;
    z-index : 1;
    transition : all 1s ease-in-out;
    position : relative;

    &.hidden {
        color : transparent;
    }
    &.on {
        transform : translateY(${props=>"-"+props.transform+"vh"});
    }
`
const Standard = styled.div`

    display : inline-block;
    position : relative;
    z-index : 1;

    &:after {
        display : block;
        content : "";
        border-bottom : solid 3px ${pallette.BLUISH};
        transform : scaleX(0);
        transform-origin : 0% 50%;
        transition : transform .25s ease-in-out; 
        z-index : 1;
    }
    &:before {
        content : "";
        position : absolute;
        width : 100%;
        height : 2px;
        top : 50%;
        left : 0;
        background-color : #333;
        transform : scaleX(0);
        transform-origin : 0% 50%;
        transition : transform 2s ease-in-out;
        transition-delay : 1.5s;
        z-index : 1;
    }
    &:hover:after {
        transform : scaleX(1);
    }

    &.on {

    }
    &.on:after {
        
    }
    &.on:before {
        transform : scaleX(1);
    }
    &.on:hover:after {

    }
`
const Feed = styled.div`
    width : 100%;
    height : 0vh;
    transform : scaleY(0);
    margin-top : 1vh;
    background-color : ${pallette.BLUISH};
    transition : all 1s ease-in-out;
    transform-origin : top;
    padding : 5%;
    z-index : 10;

    &.on {
        height : 40vh;
        transform : scaleY(1);
        transform-origin : top;
    }
`

export default Feedback;