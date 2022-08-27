import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { Paper } from "../../styles/components/paper";
import googlePic from "../../assets/google.png";
import { usePage } from "../../hooks/usePage";
import SpotifyIcon from "../../assets/spotify-1-logo-svgrepo-com.svg";
import WallIcon from "../../assets/drilling-wall-svgrepo-com.svg";

const Scr5 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,5)}/>
            <Content>
                <Name></Name>
                <Pic></Pic>
                <Subtitle>스포티파이, 실패의 벽</Subtitle>
                <div>
                    스포티파이는 그저 실패를 피하는 방법을 알기보다 실패했을 때 빠르게 회복하는 방법을 알아가도록 하기 위해 실패의 벽을 만들었습니다. 벽에 실패했던 경험을 공공연하게 전시하고 그것으로부터 배웠던 핵심내용과 경험을 공유합니다.
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
    background-image : url(${SpotifyIcon});
    background-size : contain;
    background-position : center;
    background-repeat : no-repeat;
`
const Pic = styled.div`
    width : 100%;
    flex : 1;
    background-image : url(${WallIcon});
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

export default Scr5;