import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title";
import Checkboxes from "../../components/checkboxes";
import Standards from "../../assets/jsons/standards";
import pallette from "../../styles/pallette.css";
import { lighten } from "polished";
import { useSelector, useDispatch } from "react-redux";
import { setStandard } from "../../features/parts/part2Slice";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";

const Scr2 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const checks = useSelector(state=>state.part2.scr2);
    const dispatch = useDispatch();
    const handleChange = (type, value) => {
        dispatch(setStandard({ [type] : value }));
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            POST("/part2/scr2", { userIdx, standards : checks }, 
                (result) => {
                    if(result.data.message) {
                        toastError(result.data.message, {});
                        return false;
                    }else {
                        return true;
                    }
                }
            )
        }
    });
    useFetchREST(`/part2/scr2/${userIdx}`, 
        (result)=>{
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                console.log(result.data.standards);
                dispatch(setStandard(result.data.standards));
            }
        }
    )

    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,2)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>각 영역별로 내가 가지고 있는 기준을 선택해 보세요.</div>
                <table>
                    <tr>
                        <td>학업 / 능력</td>
                        <td>
                            <Checkboxes checked={checks.std1} items={Standards["학업/능력"]} handleChange={(v)=>handleChange("std1", v)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>외모 / 건강</td>
                        <td>
                            <Checkboxes checked={checks.std2} items={Standards["외모/건강"]} handleChange={(v)=>handleChange("std2", v)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>대인관계</td>
                        <td>
                            <Checkboxes checked={checks.std3} items={Standards["대인관계"]} handleChange={(v)=>handleChange("std3", v)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>성공 / 행복</td>
                        <td>
                            <Checkboxes checked={checks.std4} items={Standards["성공/행복"]} handleChange={(v)=>handleChange("std4", v)}/>
                        </td>
                    </tr>
                </table>
            </Box>
            {renderArrow()}
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
        margin-top : 2vh;
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