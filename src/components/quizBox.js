import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { darken } from "polished";
import Answer from "./answer"; 

const QuizBox = ({
    style = {},
    answer = 1,
    children
}) => {

    const [isOn, setIsOn] = useState(null);
    const handleClose = () => {
        setIsOn(null);
    }

    return (
        <Wrapper style={style}>
            <Box>
                {children}
            </Box>
            <Answers>
                <Answer content="재앙화 사고" isOn={isOn===1} isAnswer={answer===1} handleClick={()=>{setIsOn(1)}} handleClose={handleClose}></Answer>
                <Answer content="흑백논리" isOn={isOn===2} isAnswer={answer===2} handleClick={()=>setIsOn(2)} handleClose={handleClose}></Answer>
                <Answer content="당위 진술" isOn={isOn===3} isAnswer={answer===3} handleClick={()=>setIsOn(3)} handleClose={handleClose}></Answer>
                <Answer content="지나친 일반화" isOn={isOn===4} isAnswer={answer===4} handleClick={()=>setIsOn(4)} handleClose={handleClose}></Answer>
            </Answers>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
    height : 70vh;
`
const Box = styled.div`
    width : 100%;
    max-width : 960px;
    height : auto;
    min-height : 100%;
    padding : min(20px, 2vmin);
    box-shadow : 3px 3px 10px #B1B0AF26;
    border-radius : 10px;
    text-align : left;
    overflow : auto;
`
const Answers = styled.div`
    width : 100%;
    flex : 1;
    margin-top : 2vh;
    display : flex;
    justify-content : space-between;
`

export default QuizBox;