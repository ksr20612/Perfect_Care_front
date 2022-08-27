import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import Modal from "./modal";
import { darken, transparentize } from "polished";
import CoolIcon from "../assets/cool-svgrepo-com.svg";
import EraserIcon from "../assets/eraser-svgrepo-com.svg";

const Answer = ({
    content = "재앙화 사고",
    isOn = false,
    isAnswer = false,
    exp = "",
    handleClose = f=>f,
    handleClick = f=>f,
}) => {

    return (
        <>
            <Box onClick={handleClick}>{content}</Box>
            {isAnswer?
                <Modal isOn={isOn} displayFlex={true} close={{on : true, handleClose : handleClose}} customStyle={{width : "50%", height : "50%", flexDirection : "column", justifyContent : "center", alignItems : "center", fontSize : "3.5rem"}}>
                    <Icon icon={CoolIcon}></Icon>
                    <div>정답입니다!</div>
                    <Exp>{exp}</Exp>
                </Modal>
                : 
                <Modal isOn={isOn} displayFlex={true} close={{on : true, handleClose : handleClose}} customStyle={{width : "50%", height : "50%", flexDirection : "column", justifyContent : "center", alignItems : "center", fontSize : "3.5rem"}}>
                    <Icon icon={EraserIcon}></Icon>
                    <div>다시 한번 생각해보세요!</div>
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
    padding : 2%;

    &:active {
        background-color : ${darken(0.1, pallette.GREY)};
    }
`
const Icon = styled.div`
    width : 25%;
    height : 25%;
    margin-bottom : 5%;
    background-image : url(${props=>props.icon});
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center;
`
const Exp = styled.div`
    margin-top : 5%;
    font-size : 0.6em;
    text-indent : 1ch;
    line-height : 150%;
`

export default Answer;