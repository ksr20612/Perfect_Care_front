import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { lighten, darken } from "polished";
import { motion, AnimatePresence } from "framer-motion";
import TextArea from "../components/textArea";
import sampleImg from "../assets/sample.jpg";
import SingleTalk from "../components/singleTalk";
import { toastError } from "../utils/toast";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../features/parts/part4Slice";
import message from "../assets/message.svg";
import send from "../assets/send.svg";
import fadein from "styles/framer-motion/fadein";

const Katalk = ({
    messages
}) => {

    const dispatch = useDispatch();
    const [phase, setPhase] = useState(1); // 1 : 입력1, 2 이상 : 입력2~
    const [curText, setCurText] = useState("");

    const handleClick = () => {
        if(curText) {
            setPhase(phase+1);
            setCurText("");
            dispatch(setMessage(curText));
        }else {
            toastError("Y양에게 답장을 해주세요!");
        }
    }

    useEffect(()=>{
        console.log(messages);
    }, [messages]);

    return (
        <>
            <Instr as={motion.div} initial="hidden" animate="visible" variants={fadein} custom={0}>완벽주의자 Y양에게서 문자가 도착하였습니다.</Instr>
            <Box animate={{ y : [250, 0] }}>
                <Screen as={motion.div} layout>
                    <AnimatePresence>
                        <SingleTalk isMe={false} transitionDelay={1} texts={["나는 이때의 실수를 잊을 수가 없어ㅠㅠ", "너는 어떤 실수가 가장 기억에 남아?"]}/>
                        {
                            messages.map((message, i)=>{
                                return (
                                    i===0? (
                                        <>
                                            <SingleTalk as={motion.div} layoutId={"message_"+i} isMe={true} transitionDelay={0} texts={[message]}/>
                                            <SingleTalk as={motion.div} layoutId={"message_"+i} isMe={false} transitionDelay={1} texts={["완전 당황스러웠겠다...!", "그때 기분은 어땠어??"]} />
                                        </>
                                    ) : (
                                        <SingleTalk layoutId={"message_"+i} className={i} isMe={true} transitionDelay={0} texts={[message]}/>
                                    )
                                )
                            })
                        }
                    </AnimatePresence>
                    <Input>
                        <TextArea width="85%" color={pallette.WHITE} placeholder="완벽주의자 Y양에게 답장해주세요." value={curText} handleChange={(v)=>{setCurText(v)}} customStyle={{"border-radius" : 0, "border" : "none", "fontSize" : "2.0rem"}} canBeFocused={false}></TextArea>
                        <Button onClick={()=>{handleClick()}}>전송</Button>
                    </Input>
                </Screen>
            </Box>
        </>
    )
}
const Instr = styled.div`
    width : 100%;
    margin-top : 5%;
    font-size : 2.4rem;
    display : flex;
    align-items : center;
    justify-content : center;
    &:before {
        content : "";
        width : 2em;
        height : 2em;
        display : inline-block;
        background : url(${message});
        background-size : contain;
        background-repeat : no-repeat;
        background-position : center;
        margin-right : 1%;
    }
`
const Box = styled(motion.div)`
    width : 100%;
    height : 100%;
    margin : 5% auto;
`
const Header = styled.div`
    width : 100%;
    height : 10%;
    padding : 3%;
    background-color : white;
    position : relative;
    display : flex;
    align-items : center;
    
    & > .img {
        width : 50px;
        height : 50px;
        background : url(${sampleImg});
        background-position : center center;
        background-size : contain;
        border-radius : 40%;
    }

    & > .name {
        margin-left : 2%;
        font-size : 2.0rem;
    }
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
    height : 80%;
    background-color : ${pallette.BLUISH};
    padding : 5%;
    display : flex;
    flex-direction : column;
    justify-content : flex-end;
    border-radius : 1em;
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
    height : 15%;
    margin-top : 3%;
    background-color : white;
    display : flex;
    font-size : 2.0rem;
`
const Button = styled.div`
    flex : 1;
    background-color : ${lighten(0.2, pallette.YELLOW)};
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 1.6rem;
    font-size : 2.4rem;
    border : 1px solid ${lighten(0.1, pallette.YELLOW)};
    height : 100%;
    cursor : pointer;
    &:hover {
        background-color : ${lighten(0.1, pallette.YELLOW)};
    }
    &:after {
        content : "";
        width : 1.2em;
        height : 1.2em;
        background : url(${send});
        display : inline-block;
        margin-left  : 3%;
        opacity : 0.4;
        background-repeat : no-repeat;
        background-position : center;
        background-size : contain;
    }
`

export default Katalk;