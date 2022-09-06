import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Summary from "../../components/summary";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import BackImg from "../../assets/sample.jpg";
import { Arrow } from "../../styles/components/arrow";
import { usePage } from "../../hooks/usePage";

const Scr11 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Box>
                <Img></Img>
                <Message>
                    <strong>
                        "조금 더 열심히 해야해." <br/>
                        "실수하면 안돼." <br/>
                        "지난번엔 왜 그렇게 했지?" <br/>
                    </strong> <br/> <br/>
                    완벽주의 기질은 대부분 두려움과 불안함에 뿌리를 두고 있다고 합니다. <br/>
                    나의 불안한 모습과 마주하세요. <br/>
                    나를 괴롭히는 완벽과 마주하세요. <br/>
                    그리고 완벽을 조절할 수 있다고 말해주세요. <br/>
                </Message>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    margin-top : 4vh;
    height : 70vh;
    position : relative;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`
const Img = styled.div`
    background-image : url(${BackImg});
    width : 80%;
    height : 50%;
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    margin : 5% auto 5%;
`
const Message = styled.div`
    text-align : center;
    font-size : 2.0rem;
    word-break : keep-all;

    & > strong {
        font-size : 2.4rem;
        font-style : italic;
    }
`

export default Scr11;