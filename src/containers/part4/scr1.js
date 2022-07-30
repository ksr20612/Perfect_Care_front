import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion, useMotionValue, useTransform } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import DataBox from "../../components/dataBox";

const Scr1 = () => {

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0.2, 1, 0.2]);

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,1)}/>
            <Box>
                <DataBox title="내 자동사고">
                    <div></div>
                </DataBox>
                <DataBox title="나의 인지오류는?">
                    <div></div>
                </DataBox>
                <DataBox title="완벽주의자에게 나타나기 쉬운 인지오류">
                    <ItemList>
                        <Item>재앙화 사고</Item>
                        <Item>당위진술</Item>
                        <Item>흑백논리</Item>
                        <Item>지나친 일반화</Item>
                    </ItemList>
                </DataBox>
                <Direction>
                    인지오류를 포기했다면, 이제는 실전! <br/>
                    실수가 두렵지 않은 완벽주의자가 되는 법을 알려드립니다.
                </Direction>
            </Box>
        </>
    )
}
const Box = styled.div`
    font-family : "Noto_Medium";
    position : relative;
    width : 100%;
    height : 70%;
    margin-top : 5%;
`
const ItemList = styled.div`
    font-size : 2.8rem;
    letter-spacing : -0.28px;
    display : flex;
    justify-content : space-around;
`
const Item = styled.div`
    font-size : 2.8rem;
    font-family : "Light";
    letter-spacing : -0.28px;
    position : relative;
    transform-style : preserve-3d;

    &:nth-child(2n-1) {
        &:before {
            position : absolute;
            content : "";
            width : 50px;
            height : 50px;
            background-color : ${pallette.ASH};
            transform : translateZ(-1px);
            border-radius : 50%;
            bottom : 5px;
            left : -20px;
        }
    }
    &:nth-child(2n) {
        &:before {
            position : absolute;
            content : "";
            width : 50px;
            height : 50px;
            background-color : ${pallette.BROWN};
            transform : translateZ(-1px);
            border-radius : 50%;
            bottom : 5px;
            left : -20px;
        }
    }
`
const Direction = styled.div`
    text-align : center;
    font-family : "SemiBold";
    font-size : 3.2rem;
    margin-top : 5vh;
`

export default Scr1;