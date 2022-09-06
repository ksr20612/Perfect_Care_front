import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { usePage } from "../../hooks/usePage";

const Scr5 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,5)}/>
            <Box>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>건강하지 않은</td>
                            <td>건강한</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>일이 주어졌을 때</td>
                            <td>자신을 의심</td>
                            <td>자신감</td>
                        </tr>
                        <tr>
                            <td>도전해야할 때</td>
                            <td>두려움</td>
                            <td>위험을 감수하는</td>
                        </tr>
                        <tr>
                            <td>실패와 실수는?</td>
                            <td>하면 끝이야</td>
                            <td>해도 괜찮아</td>
                        </tr>
                        <tr>
                            <td>타인에 대해</td>
                            <td>판단하는</td>
                            <td>받아들이는</td>
                        </tr>
                        <tr>
                            <td>나 자신을</td>
                            <td>통제하려 하는</td>
                            <td>자연스럽게 하는</td>
                        </tr>
                        <tr>
                            <td>기준</td>
                            <td>불가능한 것</td>
                            <td>가능한 것</td>
                        </tr>
                        <tr>
                            <td>동기부여</td>
                            <td>실패하는 것에 대한 두려움 <br/> 부정적 평가를 피함</td>
                            <td>성공 <br/> 긍정적인 것들을 원함</td>
                        </tr>
                        <tr>
                            <td>집중하는 것</td>
                            <td>결과</td>
                            <td>과정</td>
                        </tr>
                        <tr>
                            <td>삶의 모든 순간이</td>
                            <td>위협적이라고 느낌</td>
                            <td>도전이라고 느낌</td>
                        </tr>
                        <tr>
                            <td>비판을</td>
                            <td>싫어한다</td>
                            <td>환영한다</td>
                        </tr>
                        <tr>
                            <td>나의 가치를</td>
                            <td>무엇을 하는가에서 느낀다</td>
                            <td>내가 누구인가에서 느낀다</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    padding : 5vh;
    margin-top : 5vh;
    display : flex;
    align-items : center;
    justify-content : center;

    & > table {
        border : 2px solid ${pallette.GREY};
        border-collapse : collapse;
        width : 100%;
        font-size : 1.6rem;

        & > thead {
            font-weight : bold;
        }

        & td {
            border : 2px solid ${pallette.GREY};
            border-collapse : collapse;
            width : 35%;
            padding : 1%;

            &:nth-child(1) {
                width : 30%;
                background-color : ${lighten(0.7, pallette.BLUE)};
                height : 5%;
            }
        }

        & tr {
            border : 2px solid ${pallette.GREY};
            border-collapse : collapse;
        }

    }
`

export default Scr5;