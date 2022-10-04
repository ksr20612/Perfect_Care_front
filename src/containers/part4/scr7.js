import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import { Paper } from "../../styles/components/paper";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import PixarIcon from "../../assets/pixar-logo.svg";
import GalleryIcon from "../../assets/gallery-svgrepo-com.svg";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr7 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,7)}/>
            <Content>
                <Name></Name>
                <Pic></Pic>
                <Subtitle>픽사, 실패 갤러리</Subtitle>
                    <div>
                        세계적인 애니메이션 스튜디오인 픽사에서는 캐릭터 디자인, 컨셉아트 등 영화로 만들어지지 않았거나 실패했던 작품들을 전시합니다.
                        비록 사용되지 않았지만 실패조차 하나의 예술 작품으로서의 가치를 인정하는 것이죠. 
                    </div>
            </Content>
            {renderArrow()}
        </>
    )
}
const Name = styled.div`
    font-size : 3.6rem;
    font-family : "Medium";
    width : 100%;
    height : 20%;
    background-image : url(${PixarIcon});
    background-size : contain;
    background-position : center;
    background-repeat : no-repeat;
`
const Pic = styled.div`
    width : 100%;
    flex : 1;
    background-image : url(${GalleryIcon});
    background-size : contain;
    background-position : center;
    background-repeat : no-repeat;
`
const Content = styled.div`
    font-size : 2.0rem;
    font-family : "Regular";
    color : ${pallette.NEWBLACK};
    line-height : 150%;
    display : flex;
    flex-direction : column;
    margin : 0 auto;
    width : 50%;
    height : 80%;
    text-align : justify;
    text-indent : 1ch;

    & > div + div {
        margin-top : 5%;
    }
`
const Subtitle = styled.div`
    font-size : 1.4em;
    font-family : "Bold";
    text-align : center;
`

export default Scr7;