import { useState, useEffect } from "react";
import styled from "styled-components";
import Guru from "../components/guru";

const GuruBox = () => {

    return (
        <Box>
            <span>클릭해보세요!</span>
            <Guru/>
            <Guru/>
        </Box>
    )
}

const Box = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    width : 16vw;
    position : fixed;
    bottom : 5vh;
    left : 18vw;

    & > span {
        display : inline-block;
        position : absolute;
        font-size : 1.6rem;
        transform : rotate(-25deg);
        top : -1.5vw;
        left : -3vw;
        animation : 1s linear infinite alternate blink;
    }

    & > div:not(:first-of-type) {
        margin-left : 2vw;
    }

    @keyframes blink {
        to {
            opacity : 0;
        }
    }

`

export default GuruBox;