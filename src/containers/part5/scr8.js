import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import { FiDownload as DownLoadIcon } from "react-icons/fi";
import { saveAs } from "file-saver";
import { usePage } from "../../hooks/usePage";
import DiaryIcon from "../../assets/diary.svg";

const Scr7 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(5)} subTitle={getPageTitle(5,7)}/>
            <Diary></Diary>
            <Box>
                <Subtitle>
                    <div>완벽 관찰 일지</div>
                    <a href="#" onClick={()=>{saveAs("../../robots.txt", "완벽관찰일지_YD.txt")}}>
                        <DownLoadIcon/>
                        기록지 다운로드
                    </a>
                </Subtitle>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    padding : 5vh;
    margin-top : 5vh;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    font-size : 2.4rem;
`
const Subtitle = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
`
const Diary = styled.div`
    background : url(${DiaryIcon});
    background-repeat : no-repeat;
    background-size : contain;
    width : 100%;
    height : 40%;
    margin : 5% 0; 
    background-position : center center;
`

export default Scr7;