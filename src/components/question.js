import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SamplePic from "../assets/sample.jpg";
import pallette from "../styles/pallette.css";
import DiscreteSlider from "./discreteSlider";
import { darken } from "polished";

const Question = ({
    content = "문항",
    handleChange = f => f,
    value = null,
}) => {

    return (
        <Box>
            <Content>{content}</Content>
            <Answer>
                <span>그렇지 않다</span>
                <label>
                    <input type="radio" value="1" checked={value===1} onChange={()=>{handleChange(1)}} />
                </label>
                <label>
                    <input type="radio" value="2" checked={value===2} onChange={()=>{handleChange(2)}} />
                </label>
                <label>
                    <input type="radio" value="3" checked={value===3} onChange={()=>{handleChange(3)}} />
                </label>
                <label>
                    <input type="radio" value="4" checked={value===4} onChange={()=>{handleChange(4)}} />
                </label>
                <span>그렇다</span>
            </Answer>
        </Box>
    )
}
const Box = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : transparent;
    width : 100%;
`
const Content = styled.div`
    font-size : 3.6rem;
    height : 150px;
    display : flex;
    align-items : flex-end;
    text-align : center;
`
const Answer = styled.div`
    display : flex;
    align-items : center;
    height : 150px;
    font-size : 1.6rem;
    
    & > span {
        width : 50px;
        height : 50px;
        display : flex;
        align-items : center;
        justify-content : center;
        text-align : center;
        margin : 0 50px;
    }

    & input {
        width : 50px;
        height : 50px;
    }
`
export default Question;