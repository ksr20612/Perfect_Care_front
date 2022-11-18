import { useState, useEffect } from "react";
import styled from "styled-components";
import BoxPattern from "../../assets/box_poup.svg";
import BtnCancel from "../../assets/btn_cncel_s.svg";
import DownloadIcon from "../../assets/ic_dwn.svg";

const Download = ({
    day = 1,
    docuName = "퍼펙트 빙고",
    handleDownload = f => f,
    handleClose = f => f,
}) => {

    return (
        <Wrapper>
            <Box>
                <Close onClick={()=>handleClose()} />
                <Inst>{"\"DAY-" + (day+"").padStart(2, "0") + "\" 의 오늘차 기록지를 다운로드 할까요?"}</Inst>
                현재까지 작성하신 오늘차 기록지를 <br/> 다운로드 할 수 있어요.
                <Down/>
                <Button onClick={()=>handleDownload(day)}>다운로드 하기</Button>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : rgba(0,0,0,0.3);
    z-index : 9998;
    position : absolute;
    border-radius : inherit;
`
const Box = styled.div`
    width : 400px;
    height : 246px;
    background-image : url(${BoxPattern});
    background-position : center center;
    background-size : cover;
    position : relative;
    transform : scale(1.25);
    padding : 34px 40px;
    font-size : 1.2rem;
    text-align : center;
    color : #8F8E8D;
    font-family : "Regular";
    display : flex;
    justify-content : space-between;
    align-items : center;
    flex-direction : column;
`
const Close = styled.div`
    width : 10px;
    height : 10px;
    background-image : url(${BtnCancel});
    background-position : center center;
    background-size : cover;
    position : absolute;
    top : 15px;
    right : 14px;
    cursor : pointer;
`
const Inst = styled.div`
    font-family : "Bold";
    font-size : 1.5rem;
    color : #3C3C3C;
`
const Down = styled.div`
    width : 70px;
    height : 60px;
    background-image : url(${DownloadIcon});
    background-position : center center;
    background-size : cover;
`
const Button = styled.button`
    width : 126px;
    height : 30px;
    font-size : 1.5rem;
    color : #f9f8f7;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #f5b159;
    border : none;
    cursor : pointer;
    border-radius : 5px;
    font-family : "SemiBold";
`

export default Download;