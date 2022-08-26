import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { lighten, darken } from "polished";
import { motion } from "framer-motion";
import TextArea from "../components/textArea";
import sampleImg from "../assets/sample.jpg";
import SingleTalk from "../components/singleTalk";
import { toastError } from "../utils/toast";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../features/parts/part4Slice";

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
        <Box animate={{ y : [250, 0] }}>
            <Header>
                <div className="img"></div>
                <div className="name">Y양</div>
                {/* <Control>
                    <span>🗕</span>
                    <span>🗖</span>
                    <span>🗙</span>
                </Control> */}
            </Header>
            <Screen as={motion.div} layout>
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
            </Screen>
            <Input>
                <TextArea width="80%" color={pallette.WHITE} value={curText} handleChange={(v)=>{setCurText(v)}} customStyle={{"border-radius" : 0, "border" : "none"}} canBeFocused={false}></TextArea>
                <Button onClick={()=>{handleClick()}}>전송</Button>
            </Input>
        </Box>
    )
}
const Box = styled(motion.div)`
    border : 1px solid #555;
    width : 50%;
    height : 80%;
    margin : 5vh auto;
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
    height : 70%;
    background-color : ${pallette.BLUISH};
    padding : 3%;
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
const Button = styled.div`
    width : 20%;
    height : 30%;
    background-color : ${lighten(0.2, pallette.YELLOW)};
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 1.6rem;
    border : 1px solid ${lighten(0.1, pallette.YELLOW)};
    margin-top : 4%;
    margin-right : 4%;
    cursor : pointer;

    &:hover {
        background-color : ${lighten(0.1, pallette.YELLOW)};
    }
`

export default Katalk;