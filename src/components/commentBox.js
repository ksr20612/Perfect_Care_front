import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import pallette from "../styles/pallette.css";
import { darken, lighten } from "polished";
import TextArea from "../components/textArea";
import { motion } from "framer-motion";
import pinIcon from "../assets/pin-pngrepo-com.png";
import upvoteIcon from "../assets/upvote.svg";

const CommentBox = ({
    width = "40%",
    height = "60vh",
    userName = "동연",
    comments = [
        {name : "AB", content : "가나다라마바사아자차카타파하", likes : 0},
        {name : "CD", content : "가나다라마바사아자차카타파하", likes : 0},
        {name : "EF", content : "가나다라마바사아자차카타파하", likes : 0},
    ],
    value,
    handleChange = f => f,
    handleClick = f => f,
}) => {

    const [voteList, setVoteList] = useState(Array(comments.length));
    const vote = (idx) => {
        if(voteList[idx]) {
            voteList[idx] = 0;
        }else {
            voteList[idx] = 1;
        }
        setVoteList([...voteList]);
    }

    return (
        <Box width={width} height={height}>
            <BoxComment>
                <Comment>
                    <div>
                        <span>윤닥</span>
                    </div>
                    <div>아무도 상상할 수 없는 미래를 기대할 지는 영희씨의 선택이며, 시간이 조금만 지나고 보면 지금이 가장 빠른 시기인 것을 알 수 있을 것입니다. 지금 당장 한걸음이라도 떼어본다면 더 많은 실패와 성장을 할 수 있는 기회가 있을 것 같아요.</div>
                </Comment>
                {
                    comments.map((v,i)=>{
                        return (
                            <Comment>
                                <div>
                                    <span>{v.name}</span>
                                    <Upvote likes={v?.likes} voted={voteList[i]} onClick={()=>vote(i)}></Upvote>
                                </div>
                                <div>{v.content}</div>
                            </Comment>
                        )
                    })
                }
            </BoxComment>
            <InputComment>
                <span>{userName}</span>
                <TextArea value={value} handleChange={(v)=>{handleChange(v)}} color={pallette.WHITE} canBeFocused={false} placeholder="댓글을 남겨주세요." width="calc( 100% - 4vmax )"/>
                <Button onClick={(e)=>{handleClick(e)}}>작성</Button>
            </InputComment>
        </Box>
    )
}

const Box = styled.div`
    margin-left : 1vw;
    width : calc(${props => props.width} - 1vw);
    height : ${props => props.height};
    background-color : ${pallette.GREY};
    padding : 1vmax;
`
const BoxComment = styled.div`
    width : 100%;
    height : 80%;
    overflow-y : auto;
    & > div:not(:last-child) {
        border-bottom : 1px solid ${darken(0.1, pallette.GREY)};
    }
`
const Comment = styled.div`
    position : relative;
    padding : 1vh 0;
    line-height : 1.5;

    &:first-of-type > div {
        display : flex;
        justify-content : space-between;
        position : relative;
    }
    & span {
        position : relative;
        display : flex;
        justify-content : center;
        align-items : center;
        padding : 1%;
        border-radius : 50%;
        font-size : calc(1rem + 0.5vw);
        color : ${pallette.WHITE};
        width : 4vw;
        height : 4vw;
        background-color : ${lighten(0.5, pallette.BLUE)};
        margin-right : 0.5vw;
    }
    &:first-of-type > div > span:before {
        position : absolute;
        content : "윤닥님이 고정함";
        color : rgba(0, 0, 0, 0.5);
        font-size : 1.6rem;
        left : 5.5vw;
        width : 7vw;
    }
    &:first-of-type > div > span:after {
        position : absolute;
        content : "";
        color : rgba(0, 0, 0, 0.5);
        font-size : 2.4rem;
        left : 4.2vw;
        width : 12px;
        height : 12px;
        opacity : 0.6;
        background : url(${pinIcon});
        background-position : center;
        background-size : contain;
        background-repeat : no-repeat;
    }

    & > div:last-child {
        font-size : 1.8rem;
        margin-top : 1vh;
        word-break : keep-all;
        text-align : justify;
        margin-right : 1vw;
    }
`
const Upvote = styled.span`
    position : absolute;
    float : right;
    transform : translateY(calc(-4vw + 15px)) translateX(-17px);
    background-color : transparent !important;
    border-radius : unset !important;
    background : url(${upvoteIcon});
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center;
    opacity : 0.5;
    width : 15px !important;
    height : 15px !important;
    cursor : pointer;
    &:hover {
        opacity : 1;
    }
    &:after{
        content : "${props=>props.likes}";
        color : black;
        margin-left : 30px;
        top : 50%;
        position : absolute;
        transform : translateY(-50%);
    }
    ${(props)=> props.voted && css`
        opacity : 1;  
        &:after {
            content : "${props=>props.likes+1}";
        }
    `}
`
const InputComment = styled.div`
    width : 100%;
    border-top : 1px solid ${darken(0.1, pallette.GREY)};
    padding-top : 2vh;
    display : flex;
    position : relative;

    & > span {
        display : flex;
        justify-content : center;
        align-items : center;
        padding : 1%;
        border-radius : 50%;
        font-size : calc(1rem + 0.5vw);
        color : ${pallette.WHITE};
        width : 4vw;
        height : 4vw;
        background-color : ${lighten(0.2, pallette.BLUE)};
        margin-right : 0.5vw;
    }
`
const Button = styled.div`
    width : 50px;
    height : 30px;
    background-color : ${lighten(0.5, pallette.BLUE)};
    font-size : 1.6rem;
    display : flex;
    align-items : center;
    justify-content : center;
    color : ${pallette.WHITE};
    border : 1px solid ${lighten(0.47, pallette.BLUE)};
    cursor : pointer;
    transition : all .2s ease-in-out;
    position : absolute;
    right : 0;
    bottom : 0;

    &:hover {
        background-color : ${lighten(0.45, pallette.BLUE)};
    }
`

export default CommentBox;