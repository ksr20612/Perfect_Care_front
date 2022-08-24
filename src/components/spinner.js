import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";

const Spinner = ({
    style = {}
}) => {

    return (
        <Box style={style}>
            <Inst>결과 분석중</Inst>
            <div class="spinner-box">
                <div class="blue-orbit leo"></div>
                <div class="green-orbit leo"></div>
                <div class="red-orbit leo"></div>
                <div class="white-orbit w1 leo"></div>
                <div class="white-orbit w2 leo"></div>
                <div class="white-orbit w3 leo"></div>
            </div>
        </Box>
    )
}
const Inst = styled.div`
    font-size : 2.4rem;
    text-transform : uppercase;
    font-family : "Medium"; 
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    z-index : 3;
`
const Box = styled.div`

    width : 400px;
    height : 400px;
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);

    .spinner-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        z-index : 2;
    }

    .blue-orbit {
        width: 100%;
        height: 100%;
        border: 2px solid #D2E1ED;
        -webkit-animation: spin3D 5s linear .2s infinite;
    }

    .green-orbit {
        width: 80%;
        height: 80%;
        border: 2px solid #9EAFA2;
        -webkit-animation: spin3D 3s linear 0s infinite;
    }

    .red-orbit {
        width: 60%;
        height: 60%;
        border: 2px solid #646458;
        -webkit-animation: spin3D 1.5s linear 0s infinite;
    }

    .white-orbit {
        width: 40%;
        height: 40%;
        border: 2px solid #DDC4AF;
        -webkit-animation: spin3D 10s linear 0s infinite;
    }

    .w1 {
        transform: rotate3D(1, 1, 1, 90deg);
    }

    .w2 {
        transform: rotate3D(1, 2, .5, 90deg);
    }

    .w3 {
        transform: rotate3D(.5, 1, 2, 90deg);
    }


    & .leo {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    @keyframes spin3D {
        from {
            transform: rotate3d(.5,.5,.5, 360deg);
        }
        to{
            transform: rotate3d(0deg);
        }
    }


`

export default Spinner;