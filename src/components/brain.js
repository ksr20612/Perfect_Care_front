import { useState, useEffect, } from "react";
import styled from "styled-components";
import Title from "../components/title";
import pallette from "../styles/pallette.css";
import { lighten } from "polished";
import PageInfo, { getPartTitle, getPageTitle } from "../app/pageInfo";
import { Paper } from "../styles/components/paper";
import { motion } from "framer-motion";
import BrainImg from "../assets/ic_brain.png";

const Brain = ({
    emotions = ["엄격한", "우울한", "섬세한","4","5",],
}) => {

    return (
        <BrainBubble>
            {
                emotions.map((bubble, i)=>{
                    return (
                        <Bubble key={"bubble_"+i}>{bubble}</Bubble>
                    )
                })
            }
        </BrainBubble>
    )
}
const BrainBubble = styled.div`
    width : 50%;
    height : 55%;
    position : absolute;
    background : url(${BrainImg});
    background-size : contain;
    background-repeat : no-repeat;
    background-position : center center;
    top : 3%;
    left : 26%;
`
const Bubble = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    font-family : "Bold";
    position : absolute;
    color : #292724;
    letter-spacing : 0.2px;
    text-align : center;
    border-radius : 50%;
    box-shadow : #00000029 3px 3px 10px;
    aspect-ratio : 1 / 1;

    &:nth-child(1) {
        width : 24%;
        top : 41%;
        left : 16%;
        background-color : #C6B9B6;
    }
    &:nth-child(2) {
        width : 23%;
        top : 66%;
        left : 36%;
        background-color : #5289C9;
    }
    &:nth-child(3) {
        width : 18%;
        top : 17%;
        left : 20%;
        background-color : #F3D096;
    }
    &:nth-child(4) {
        width : 23%;
        top : 4%;
        left : 37.5%;
        background-color : #D7CCDD;
    }
    &:nth-child(5) {
        width : 22%;
        top : 35%;
        left : 42%;
        background-color : #EE8975;
    }
    &:nth-child(6) {
        width : 20%;
        top : 64%;
        left : 62%;
        background-color : #DDDBD7;
    }
    &:nth-child(7) {
        width : 16%;
        top : 41%;
        left : 66%;
        background-color : #B1E7E7;
    }
    &:nth-child(8) {
        width : 16%;
        top : 11.8%;
        left : 69.2%;
        background-color : #8FB9AB;
    }
`

export default Brain;