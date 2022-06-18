import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { darken, lighten } from "polished";
import TextArea from "../components/textArea";

const CommentBox = ({
    width = "40%",
    height = "60vh",
    userName = "YD",
    comments = [
        {name : "AB", content : "가나다라마바사아자차카타파하", likes : 0},
        {name : "CD", content : "가나다라마바사아자차카타파하", likes : 0},
        {name : "EF", content : "가나다라마바사아자차카타파하", likes : 0},
    ],
}) => {

    return (
        <Box width={width} height={height}>
            <BoxComment>
                <Comment>
                    <span>윤닥</span>
                    <div>아무도 상상할 수 없는 미래를 기대할 지는 영희씨의 선택이며, 시간이 조금만 지나고 보면 지금이 가장 빠른 시기인 것을 알 수 있을 것입니다. 지금 당장 한걸음이라도 떼어본다면 더 많은 실패와 성장을 할 수 있는 기회가 있을 것 같아요.</div>
                </Comment>
                {
                    comments.map((v,i)=>{
                        return (
                            <Comment>
                                <span>{v.name}</span>
                                <div>{v.content}</div>
                            </Comment>
                        )
                    })
                }
            </BoxComment>
            <InputComment>
                <span>{userName}</span>
                <TextArea color={pallette.WHITE} placeholder="댓글을 남겨주세요."/>
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

    padding : 1vh 0;

    & > span {
        display : flex;
        justify-content : center;
        align-items : center;
        padding : 1%;
        border-radius : 50%;
        font-size : calc(1rem + 0.5vw);
        color : ${pallette.WHITE};
        width : 5vmin;
        height : 5vmin;
        background-color : ${lighten(0.5, pallette.BLUE)};
        margin-right : 0.5vw;
    }

    & > div {
        font-size : 1.8rem;
        margin-top : 1vh;
        word-break : keep-all;
        text-align : justify;
        margin-right : 1vw;
    }
`

const InputComment = styled.div`
    width : 100%;
    border-top : 1px solid ${darken(0.1, pallette.GREY)};
    padding-top : 2vh;
    display : flex;

    & > span {
        display : flex;
        justify-content : center;
        align-items : center;
        padding : 1%;
        border-radius : 50%;
        font-size : calc(1rem + 0.5vw);
        color : ${pallette.WHITE};
        width : 5vmin;
        height : 5vmin;
        background-color : ${lighten(0.2, pallette.BLUE)};
        margin-right : 0.5vw;
    }

`

export default CommentBox;