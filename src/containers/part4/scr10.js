import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { FiDownload as DownLoadIcon } from "react-icons/fi";
import { saveAs } from "file-saver";
import write from "assets/write.svg";
import { setHistory } from "services/setHistory";
import { useSelector } from "react-redux";

const Scr10 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,10)}/>
            <Box>
                <Subtitle>
                    <div>일주일동안 나의 실수를 솔직하게 적어보아요</div>
                    <a href="#" onClick={()=>{saveAs("../../robots.txt", "완벽관찰일지_YD.txt")}}>
                        <DownLoadIcon/>
                        기록지 다운로드
                    </a>
                </Subtitle>
                <Wrapper>
                    <span>이렇게 써주세요.</span>
                    <table>
                        <thead>
                            <tr>
                                <td>날짜</td>
                                <td>장소</td>
                                <td>어떤 실수를 했나요?</td>
                                <td>실수로부터 배우게 된 것</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>22.05.05</td>
                                <td>버스 안</td>
                                <td>집에서 교통카드를 잘못 들고 와서 다른카드로 탑승하려다 결제가 안되는 것을 깨닫고 황급히 다음 정류장에서 내렸음</td>
                                <td>카드를 잘 확인하고 소지하자</td>
                            </tr>
                            <tr>
                                <td>22.05.10</td>
                                <td>친구들과의 카페</td>
                                <td>한 친구가 비밀로 해달라고 한 이야기를 깜빡하고 다른 친구들 앞에서 이야기 해버림</td>
                                <td>상대방이 비밀로 해달라고 했던 이야기는 귀기울여 듣고 기억하자</td>
                            </tr>
                            <tr>
                                <td>22.05.11</td>
                                <td>직장</td>
                                <td>부장님이 챙겨달라고 했던 회의자료를 집에 두고 옴</td>
                                <td>직장에서 실수했을 때 어떻게 사과하고 상황을 설명하면 좋은지 알게되었음</td>
                            </tr>
                        </tbody>
                    </table>
                </Wrapper>
                <Message>일주일간 나의 실수를 적고 피드백해본다면 <br/> 어느새 실수에 대한 인식이 바뀌어 있는 나를 발견할 거예요!</Message>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled.div`
    margin-top : 5%;
    width : 100%;
    height : 80%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
`
const Subtitle = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    font-size : 2.4rem;
    & > a {
        background-color : #8FB9AB;
        color : white;
        text-decoration : unset;
        padding : 2%;
        border-radius : .5em;
        flex : 1;
        display : flex;
        align-items : center;
        justify-content : center;
    }
    & > div {
        width : 70%;
        display : flex;
        align-items : center;
        &:before {
            content : "";
            background : url(${write});
            display : inline-block;
            margin-right : 3%;
            background-repeat : no-repeat;
            background-position : center;
            background-size : contain;
            width : 1.5em;
            height : 1.5em;
        }
    }
`
const Message = styled.div`
    font-size : 3.2rem;
    font-family : "SemiBold";
    text-align : center;
    width : 100%;
`
const Wrapper = styled.div`
    font-size : 3.6rem;
    text-align : center;

    & > span {
        width : auto;
        position : relative;
        font-family : "Hand";
        &:after {
            content : "";
            background-color : #FFE40060;
            position : absolute;
            inset : 0;
            transform : skewX(-8deg) translate(0.2em, 0.4em);
        }
    }

    & > table {
        width : 100%;
        margin-top : 3%;
    }

    & thead {
        & td {
            font-size : 2.4rem;
            height : 50px;
            background-color : #B1B0AF;
        }
    }

    & tbody {
        font-size : 15px;
        font-family : "Regular";
        & td {
            padding : 1%;
        }
    }

    & table, & tr, & td {
        border : 4px solid #F9F8F7;
        border-collapse : collapse;
        text-align : center;
        word-break : keep-all;
        background-color : #F4F2F0;
        border-radius : 0.5em;
    }

    & tr > td:last-child {

        & span { 
            font-size : 2rem;
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

export default Scr10;