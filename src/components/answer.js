import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import Modal from "./modal";
import { darken, transparentize } from "polished";

const Answer = ({
    content = "재앙화 사고",
    isOn = false,
    isAnswer = false,
    handleClose = f=>f,
    handleClick = f=>f,
}) => {

    useEffect(()=>{
        console.log({isOn});
    })

    return (
        <>
            <Box onClick={handleClick}>{content}</Box>
            {isAnswer?
                <Modal isOn={isOn} close={{on : true, handleClose : handleClose}} customStyle={{width : "50%", height : "50%"}}>
                    정답입니다!
                </Modal>
                : 
                <Modal isOn={isOn} close={{on : true, handleClose : handleClose}} customStyle={{width : "50%", height : "50%"}}>
                    다시 한번 생각해보세요!
                </Modal>
            }
        </>
    )
}

const Box = styled.button`
    width : 20%;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : ${pallette.GREY};
    font-family : "Bold";
    color : #555;
    font-size : 2.4rem;
    border : none;
    border-radius : 10px;

    &:active {
        background-color : ${darken(0.1, pallette.GREY)};
    }
`

export default Answer;