import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import DataBox from "../../components/dataBox";

const Scr6 = () => {

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,6)}/>
            <DataBox title="완벽정리에서 나는..." customStyle={{height : "30vh", maxHeight : "40%"}}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <Exp>이러한 완벽주의의 모습을 바꾸고 싶다고 적었어요.</Exp>
            </DataBox>
        </>
    )
}
const Exp = styled.div`
    font-size : 2.8rem;
    margin-top : 10px;
    letter-spacing : -0.28px;
    text-align : right;
`

export default Scr6;