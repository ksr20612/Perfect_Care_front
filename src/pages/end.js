import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Screen from "../components/screen";

const End = () => {

    return (
        <Box>
            <div>수고하셨습니다.</div>
        </Box>
    )
}
const Box = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 80vw;
    font-size : 3.6rem;
    max-width : 1180px;
    height : calc(100vh - 6vh);
    background-color : #fff;
    display : flex;
    margin-top : 6vh;
    padding-top : min(5vh, 62px);
    padding-left : min(15vw, 110px);
    padding-right : min(15vw, 110px);
    background-color : #f9f8f7;
    position : relative;
`

export default End;