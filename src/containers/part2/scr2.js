import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import Checkboxes from "../../components/checkboxes";
import Standards from "../../assets/jsons/standards";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";

const Scr2 = () => {

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <Title title="Part2 가혹한 기준의 덫" subTitle="기준 점검하기"/>
            <Box>
                <div>각 영역별로 내가 가지고 있는 기준을 선택해 보세요.</div>
                <table>
                    <tr>
                        <td>학업 / 능력</td>
                        <td>
                            <Checkboxes items={Standards["학업/능력"]} handleChange={(v)=>console.log(v)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>외모 / 건강</td>
                        <td>
                            <Checkboxes items={Standards["외모/건강"]} handleChange={(v)=>console.log(v)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>대인관계</td>
                        <td>
                            <Checkboxes items={Standards["대인관계"]} handleChange={(v)=>console.log(v)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>성공 / 행복</td>
                        <td>
                            <Checkboxes items={Standards["성공/행복"]} handleChange={(v)=>console.log(v)}/>
                        </td>
                    </tr>
                </table>
            </Box>
        </>
    )
}

const Box = styled.div`

    font-family : "Noto_Medium";
    padding : 0 1vw;
    padding-top : 2vh;

    & > div {
        font-size : 2.6rem;
    }

    & > table {
        width : 100%;
    }

    & table, & tr, & td {
        border : 2px solid ${pallette.GREY};
        border-collapse : collapse;
    }

    & tr > td:first-child {
        background-color : ${lighten(0.3, pallette.YELLOW)};
        font-size : 2.0rem;
        text-align : center;
    }

    & tr > td:last-child {

        & span { 
            font-size : 1.6rem;
            font-family : "Noto_Regular";
            padding : 2px; 
        }

        & label {
            transition : all 0.2s ease-in-out;
            margin-left : 0;
            
            &:hover { 
                background-color : ${pallette.GREY} 
            }
        }

    }

    

`

export default Scr2;