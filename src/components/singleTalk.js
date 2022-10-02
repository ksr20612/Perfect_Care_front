import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { lighten, darken } from "polished";
import { motion } from "framer-motion";
import selfie from "../assets/selfie.svg";

const SingleTalk = ({
    isMe = false,
    image = selfie,
    transitionDelay = 1,
    name = "완벽주의자 Y양",
    texts = ["나는 이때의 실수를 잊을 수가 없어ㅠㅠ", "너는 어떤 실수가 가장 기억에 남아?"],
}) => {

    useEffect(()=>{
        console.log(texts);
    },[]);

    return (
        <Box as={motion.div} img={image} className={isMe? "me" : null} animate={{ y : [10, 0], opacity : [0, 1],}} transition={{delay : transitionDelay}}>
            {isMe? null : <div className="image"/>}
            <div>
                {isMe? null : <Name>{name}</Name>}
                {
                    texts.map((text,i)=>{
                        return (
                            <Talk className={isMe? "talk me" : "talk"}>{text}</Talk>
                        )
                    })
                }
            </div>
        </Box>
    )
}

const Box = styled(motion.div)`
    display : flex;
    align-items : flex-start;
    justify-content : flex-start;
    width : 100%;
    
    &:not(:first-of-type) {
        margin-top : 15px;
    }
    & > .image {
        width : 80px;
        height : 80px;
        background : url(${props => props.img});
        background-position : center;
        background-size : contain;
        background-repeat : no-repeat;
    }
    & > div:last-of-type {
        margin-left : 2%;
        width : 40%;
        font-size : 2.0rem;

        & > div:not(:first-of-type) {
            margin-top : 5px;
        }
        & > div:first-of-type:before {
            position : absolute;
            left : -8px;
            content : "◥";
            font-size : 1.6rem;
            color : ${pallette.WHITE};
        }
    }

    // 내 톡
    &.me {
        text-align : right;
        display : flex;
        align-self : flex-end;
        width : 50%;
        max-width : 50%;
        & > div:last-of-type {
            width : 100%;
            font-size : 2.0rem;
            margin-right : 1.6rem;
            & > div:not(:first-of-type) {
                margin-top : 5px;
            }
            & > div:first-of-type:before {
                position : absolute;
                right : -8px;
                content : "◤";
                font-size : 1.6rem;
                color : ${lighten(0.2, pallette.YELLOW)};
            }
        }
    }
`
const Name = styled.span`
    font-size : 1.6rem;
    display : inline-block;
    margin-bottom : 5px;
`
const Talk = styled.div`
    background-color : ${pallette.WHITE};
    border-radius : 3px;
    padding : 5%;
    position : relative;
    word-break : break-all;
    width : 100%;
    box-shadow : 3px 3px 10px #00000015;

    &.me {
        background-color : ${lighten(0.2, pallette.YELLOW)};
        float : right;
        width : auto !important;
        padding : 5%;
        min-height : 50px;
        min-width : 100px;
    }
`

export default SingleTalk;