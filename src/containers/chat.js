import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { lighten, darken } from "polished";
import { motion } from "framer-motion";
import TextArea from "../components/textArea";
import sampleImg from "../assets/sample.jpg";
import SingleTalk from "../components/singleTalk";
import { toastError } from "../utils/toast";
import { ReactComponent as Submit } from "../assets/ic_send.svg";

const Chat = () => {

    const [phase, setPhase] = useState(1); // 1 : 입력1, 2 이상 : 입력2~
    const [curText, setCurText] = useState("");
    const [messages, setMessages] = useState([]);

    const handleClick = () => {
        if(curText) {
            setPhase(phase+1);
            setCurText("");
            setMessages([...messages, curText]);
        }else {
            toastError("Y양에게 답장을 해주세요!");
        }
    }

    useEffect(()=>{
        console.log(messages);
    }, [messages]);

    return (
        <Box>
            <Screen>
                <SingleTalk isMe={false} transitionDelay={1} texts={["나는 이때의 실수를 잊을 수가 없어ㅠㅠ", "너는 어떤 실수가 가장 기억에 남아?"]}/>
                {
                    messages.map((message, i)=>{
                        return (
                            i===0? (
                                <>
                                    <SingleTalk isMe={true} transitionDelay={0} texts={[message]}/>
                                    <SingleTalk isMe={false} transitionDelay={1} texts={["완전 당황스러웠겠다...!", "그때 기분은 어땠어??"]} />
                                </>
                            ) : (
                                <SingleTalk className={i} isMe={true} transitionDelay={0} texts={[message]}/>
                            )
                        )
                    })
                }
            </Screen>
            <Input>
                
                <Button onClick={()=>{handleClick()}}></Button>
            </Input>
        </Box>
    )
}
const Box = styled.div`
    width : 100%;
    height : 100%;
`
const Control = styled.div`
    font-size : 2.0rem;
    color : rgba(0,0,0,0.5);
    position : absolute;
    top : -4%;
    right : 1%;

    & > span { 
        cursor : pointer; 
        &:hover {
            color : rgba(0,0,0,1);
        }    
    }
`
const Screen = styled.div`
    width : 100%;
    height : 70%;
    display : flex;
    flex-direction : column;
    justify-content : flex-end;

    overflow-y : auto;

    &::-webkit-scrollbar {
        width : 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        height: 100px;
        background-color : #BFBFBF;
    }
`
const Input = styled.div`
    width : 100%;
    height : calc( 100% - 10% - 70% );
    background-color : white;
    display : flex;
`
const Button = styled(Submit)`
    cursor : pointer;
    &:hover {
        & circle {
            fill : ${darken(0.1, "#a67744")};
        }
    }
`

export default Chat;