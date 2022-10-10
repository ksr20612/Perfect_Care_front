import { useEffect, useState } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import typeList from "../assets/jsons/typeList";
import DropDown from "./dropDown";
import Chart from "components/chart";

const data = [
    {
      id: "안정형",
      label: "안정형",
      value: 8,
      color: "#008CCC"
    },
    {
      id: "게으른",
      label: "게으른",
      value: 2,
      color: "#F15A22"
    },
    {
      id: "감독형",
      label: "감독형",
      value: 4,
      color: "#05b1ff"
    },
    {
      id: "자책형",
      label: "자책형",
      value: 6,
      color: "#f47a28"
    }
  ];

const TypeResult = ({
    type = "안정형",
}) => {

    const typeInfo = typeList[type];

    return (
        <Box>
            <Title>나는 <strong>{type}</strong> 완벽주의자!</Title>
            <Wrapper as={motion.div} layout>
                <Chart data={data}>차트</Chart>
                <DropDown title={type + " 완벽주의는..."}>
                    <Hash key={"hash"} as={motion.div} variants={fade} initial="off" animate="on" exit="off">{"\"" + typeInfo?.keyword + "\""}</Hash>
                    {
                        typeInfo?.description.map((v, i)=>{
                            return <Li key={"desc_"+i} as={motion.div} variants={fade} initial="off" animate="on" exit="off">{v}</Li>
                        })
                    }
                </DropDown>
                <DropDown title={type + " 완벽주의의 강점"}>
                    {
                        typeInfo?.strength.map((v, i)=>{
                            return <Li key={"strong_"+i} as={motion.div} variants={fade} initial="off" animate="on" exit="off">{v}</Li>
                        })
                    }
                </DropDown>
                <DropDown title={type + " 완벽주의자가 보완해야할 점"}>
                    {
                        typeInfo?.weakness.map((v, i)=>{
                            return <Li key={"weak_"+i} as={motion.div} variants={fade} initial="off" animate="on" exit="off">{v}</Li>
                        })
                    }
                </DropDown>
            </Wrapper>
        </Box>
    )
}
const fade = {
    on : {
        opacity : 1,
    },
    off : {
        opacity : 0,
    }
}

const Box = styled.div`
    width : 100%;
    height : calc(100% - 50px - 5%);
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`
const Title = styled.div`
    text-align : center;
    font-size : 2.4rem;
    margin-bottom : 5%;
    & > strong { font-size : 2.8rem; font-family : "Bold" };
`
// const Chart = styled.div`
//     width : 80%;
//     height : 200px;
//     min-height : 200px;
//     border : 1px dashed #aaa;
//     display : flex;
//     align-items : center;
//     justify-content : center;
//     margin-bottom : 20px;
// `
const Wrapper = styled.div`
    width : 100%;
    flex : auto;
    max-height : 100%;
    overflow-y : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
`
const Hash = styled.div`
    font-size : 1.6rem;
    font-style: italic;
    margin : 15px 0;
`
const Li = styled.div`
    font-size : 1.6rem; 
    position : relative;
    margin-left : 1ch;
    text-align : justify;
    width : 90%;

    &:before {
        content : "- ";
        position : absolute;
        left : -1.5ch;
    }

    & + & {
        margin-top : 5px;
    }
`

export default TypeResult;