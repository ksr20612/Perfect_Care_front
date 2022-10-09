import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import CheckBlue from "../../assets/check_blue.png";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import DataBox from "../../components/dataBox";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr1 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,1)}/>
            <Box>
                <div>
                    <div>
                        <DataBox title="나의 완벽주의는 이런 모습이었어요." customStyle={{maxHeight : "unset", "height" : "100%"}}>
                            <div></div>
                        </DataBox>
                    </div>
                    <div>
                        <DataBox title="나는 이런 감정을 느끼고 있었어요." customStyle={{maxHeight : "unset"}}>
                            <div></div>
                        </DataBox>
                        <DataBox title="내가 바꾸고 싶은 완벽주의의 모습은 이런 모습이었어요." customStyle={{maxHeight : "unset", "marginTop" : "10px"}}>
                            <div></div>
                        </DataBox>
                    </div>
                </div>
                <Message>
                    이런 생각을 하게된 이유는 사실 나의 _______ 때문이에요. <br/>
                    이번 장에서는 그 이유에 대해서 완벽하게 탐구해볼 거예요.
                </Message>
            </Box>

            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    position : relative;
    width : 100%;
    height : 80%;
    margin-top : 5%;
    display : flex;
    flex-direction : column;
    & > div:first-child {
        display : flex;
        width : 100%;
        height : 80%;
        justify-content : space-between;
        & > div {
            width : 49%;
            &:last-child > div {
                height : calc((100% - 10px) / 2);
            }
        }
    }
`
const Message = styled.div`
    font-size : 3.2rem;
    width : 100%;
    flex : 1;
    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;
`

export default Scr1;