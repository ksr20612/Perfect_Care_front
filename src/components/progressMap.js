import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import pallette from "../styles/pallette.css";
import { AnimatePresence, motion } from "framer-motion";
import MapIcon from "../assets/btn_cur_lo.svg";
import PathIcon from "../assets/ic_path.svg";
import PathShadowIcon from "../assets/ic_path_sha.svg";
import TraceIcon from "../assets/path.svg";
import CalenderIcon from "../assets/btn_cal.svg";
import FinFlagIcon from "../assets/ic_fin.svg";
import Part from "./part";
import { usePage } from "../hooks/usePage";
import useModal from "../hooks/useModal";
import { saveAs } from "file-saver";
import Download from "./modal/Download";
import Stop from "./stop";
import DotLayer from "../assets/dot_layer.svg";
import PurpleCir from "../assets/purple_cir.svg";
import BlueCir from "../assets/blue_cir.svg";
import BlnkC from "../assets/blnk_c.svg";
import Clicker from "../assets/clicker-svgrepo-com.svg";
import DoneIcon from "../assets/btn_dcu.svg";
import { convertPage } from "../app/pageInfo";

const ProgressMap = ({
    hasBulge = true,
    isFullWidth = false,
}) => {

    const [day, setDay] = useState(3);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    console.log(currentPage, partIdx);
    const [part, page] = convertPage(partIdx, currentPage);
    console.log({part, page});
    const [isPopupOn, setIsPopupOn] = useState(false);
    const handleDownload = () => {
        saveAs("../../robots.txt", "퍼펙트 빙고.txt");        
    }
    const handleClose = () => {
        setIsPopupOn(false);
    }

    return (
        <Box as={motion.div} initial={{opacity : 0, y : -20, scale : 0.8}} animate={{opacity : 1, y : 0, scale : 0.8}} exit={{opacity : 0, y : -20, scale : 0.8}} isFullWidth={isFullWidth}>
            {hasBulge && <Bulge></Bulge>}
            <Map></Map> 
            <Path></Path>
            <PathShadow />
            <Trace/>
            <FinFlag/>
            <Dots/>
            <PurpleC/>
            <BlueC/>
            <BlankC/>
            <BlankCsmall/>
            <Purple style={{transform : "scale(0.4) rotate(180deg)", top : "246px", left : "113px"}}/>
            <Purple style={{transform : "rotate(120deg)", top : "524px", left : "258px"}}/>
            <Part title="Part 01" color="#547665" position={{top : "570px", left : "57px"}} isDone={part>=1}>
                <Stop position={{top : "532px", left : "120px"}} isChecked={part>1 || (part===1 && page>=1)} />
                <Stop position={{top : "500px", left : "147px"}} isChecked={part>1 || (part===1 && page>=2)} />
                <Stop position={{top : "457px", left : "165px"}} isChecked={part>1 || (part===1 && page>=3)} />
                <Stop position={{top : "414px", left : "180px"}} isChecked={part>1 || (part===1 && page>=4)} />
                <Stop position={{top : "376px", left : "198px"}} isChecked={part>1 || (part===1 && page>=5)} />
                <Stop position={{top : "350px", left : "224px"}} isChecked={part>1 || (part===1 && page>=6)} />
                <Stop position={{top : "340px", left : "260px"}} isChecked={part>1 || (part===1 && page>=7)} />
            </Part>
            <Part title="Part 02" color="#EE8975" position={{top : "354px", left : "298px"}} isDone={part>=2}>
                <Stop position={{top : "335px", left : "363px"}} isChecked={part>2 || (part===2 && page>=1)} />
                <Stop position={{top : "320px", left : "395px"}} isChecked={part>2 || (part===2 && page>=2)} />
                <Stop position={{top : "296px", left : "423px"}} isChecked={part>2 || (part===2 && page>=3)} />
                <Stop position={{top : "260px", left : "443px"}} isChecked={part>2 || (part===2 && page>=4)} />
                <Stop position={{top : "218px", left : "455px"}} isChecked={part>2 || (part===2 && page>=5)} />
                <Stop position={{top : "177px", left : "466px"}} isChecked={part>2 || (part===2 && page>=6)} />
                <Stop position={{top : "140px", left : "482px"}} isChecked={part>2 || (part===2 && page>=7)} />
            </Part>
            <Part title="Part 03" color="#5289C9" position={{top : "123px", left : "515px"}} isDone={part>=3}>
                <Stop position={{top : "93px", left : "570px"}} isChecked={part>3 || (part===3 && page>=1)} />
                <Stop position={{top : "90px", left : "602px"}} isChecked={part>3 || (part===3 && page>=2)} />
                <Stop position={{top : "95px", left : "634px"}} isChecked={part>3 || (part===3 && page>=3)} />
                <Stop position={{top : "106px", left : "664px"}} isChecked={part>3 || (part===3 && page>=4)} />
                <Stop position={{top : "130px", left : "687px"}} isChecked={part>3 || (part===3 && page>=5)} />
                <Stop position={{top : "163px", left : "702px"}} isChecked={part>3 || (part===3 && page>=6)} />
                <Stop position={{top : "195px", left : "712px"}} isChecked={part>3 || (part===3 && page>=7)} />
                <Stop position={{top : "224px", left : "716px"}} isChecked={part>3 || (part===3 && page>=8)} />
            </Part>
            <Part title="Part 04" color="#F5BA57" position={{top : "310px", left : "701px"}} isDone={part>=4}>
                <Stop position={{top : "345px", left : "713px"}} isChecked={part>4 || (part===4 && page>=1)} />
                <Stop position={{top : "380px", left : "717px"}} isChecked={part>4 || (part===4 && page>=2)} />
                <Stop position={{top : "413px", left : "725px"}} isChecked={part>4 || (part===4 && page>=3)} />
                <Stop position={{top : "443px", left : "737px"}} isChecked={part>4 || (part===4 && page>=4)} />
                <Stop position={{top : "465px", left : "755px"}} isChecked={part>4 || (part===4 && page>=5)} />
                <Stop position={{top : "483px", left : "780px"}} isChecked={part>4 || (part===4 && page>=6)} />
                <Stop position={{top : "495px", left : "806px"}} isChecked={part>4 || (part===4 && page>=7)} />
                <Stop position={{top : "498px", left : "836px"}} isChecked={part>4 || (part===4 && page>=8)} />
                <Stop position={{top : "497px", left : "865px"}} isChecked={part>4 || (part===4 && page>=9)} />
            </Part>
            <Part title="Part 05" color="#C6B9B6" position={{top : "497px", left : "901px"}} isDone={part>=5}>
                <Stop position={{top : "456px", left : "945px"}} isChecked={part>5 || (part===5 && page>=1)} />
                <Stop position={{top : "424px", left : "958px"}} isChecked={part>5 || (part===5 && page>=2)} />
                <Stop position={{top : "390px", left : "967px"}} isChecked={part>5 || (part===5 && page>=3)} />
                <Stop position={{top : "355px", left : "971px"}} isChecked={part>5 || (part===5 && page>=4)} />
                <Stop position={{top : "320px", left : "980px"}} isChecked={part>5 || (part===5 && page>=5)} />
                <Stop position={{top : "285px", left : "990px"}} isChecked={part>5 || (part===5 && page>=6)} />
                <Stop position={{top : "255px", left : "1010px"}} isChecked={part>5 || (part===5 && page>=7)} />
                <Stop position={{top : "233px", left : "1038px"}} isChecked={part>5 || (part===5 && page>=8)} />
                <Stop position={{top : "223px", left : "1072px"}} isChecked={part>5 || (part===5 && page>=9)} />
            </Part>
            {
                isFullWidth? (
                    <>
                        <Desc day={day}>
                            {
                                day===1? (
                                    <>
                                        완벽주의, 퍼펙트케어와 함께 시작해보아요.
                                    </>
                                ) : (
                                    <>
                                        오늘은 달려온 지 {day}일째 되는 날입니다. <br/>
                                        지금까지 이만큼 달려왔어요.
                                    </>
                                )
                            }
                        </Desc>
                    </>
                )
                :(
                    <>
                        <Inst>아래 파일을 클릭하시면 기록지를 다운로드 할 수 있어요.</Inst>
                        <Days>
                            {
                                [...Array(15)].map((v, i)=>{
                                    return i<day? <Done onClick={()=>setIsPopupOn(true)}><div>Day</div><div>{((i+1)+"").padStart(2, "0")}</div></Done> : <Blank />
                                })
                            }
                        </Days>
                    </>
                )
            }

            <AnimatePresence>
                {isPopupOn && <Download handleDownload={handleDownload} handleClose={handleClose}/>}
            </AnimatePresence>
        </Box>
    )
}

const Bulge = styled.div`
    width : 0;
    height : 0;
    border-top : 30px solid transparent;
    border-left : 15px solid transparent;
    border-right : 15px solid transparent;
    border-bottom : 30px solid #F9F8F7;
    z-index : 1;
    position : absolute;
    top : calc(-30px - 3vh);
    right : calc(3vw - (8px / 2));
`
const Box = styled.div`
    position : relative;
    width : 1180px;
    height : 825px;
    background-color : #F9F8F7;
    position : fixed;
    top : 7.5vh;
    right : 2.75vw;
    border-radius : 1%;
    box-shadow : 10px 10px 20px #aaa;
    transform-origin : top right;

    ${({isFullWidth})=> isFullWidth && css`
        top : 0 !important;
        left : 50% !important;
        right : unset;
        /* width : 100vw !important; */
        /* height : 100vh !important; */
        transform : translate(-50%) !important;
        transform-origin : unset !important;
        box-shadow : none;
    `}
`
const Map = styled.div`
    width : 58px;
    height : 58px;
    background-image : url(${MapIcon});
    position : absolute;
    top : 48px;
    left : 104px; 
`
const Path = styled.div`
    width : 100%;
    height : 100%;
    background-image : url(${PathIcon});
    position : absolute;
    background-repeat : no-repeat;
    background-position : top 80px left -10px;
    z-index : 2;
`
const PathShadow = styled.div`
    width : 100%;
    height : 100%;
    background-image : url(${PathShadowIcon});
    position : absolute;
    background-repeat : no-repeat;
    background-position : top 95px left -5px;
    z-index : 1;
`
const Trace = styled.div`
    width : 100%;
    height : 100%;
    background-image : url(${TraceIcon});
    position : absolute;
    background-repeat : no-repeat;
    background-position : top 120px left 120px;  
    z-index : 3;
`
const FinFlag = styled.div`
    width : 49px;
    height : 65px;
    background-image : url(${FinFlagIcon});
    position : absolute;
    background-repeat : no-repeat;
    z-index : 4;
    top : 190px;
    right : 14px;
`
const Inst = styled.div`
    font-size : 1.3rem;
    letter-spacing : -0.2px;
    color : #8B8A89;
    font-family : "Medium";
    height : 24px;
    display : flex;
    align-items : center;
    position : absolute;
    bottom : 120px;
    left : 70px;

    &:before {
        content : "";
        width : 21.3px;
        height : 24px;
        display: inline-block;
        background-image : url(${Clicker});
        margin-right : 3px;
    }
`
const Days = styled.div`
    width : 100%;
    height : 60px;
    position : absolute;
    bottom : 50px;
    display : flex;
    justify-content : space-between;
    padding : 0 70px;
`
const Blank = styled.div`
    border : 1px solid #707070;
    width : 58px;
    height : 76px;
    border-radius : 8px;
    background-color : white; 
`
const Done = styled.div`
    width : 58px;
    height : 76px;
    background-image : url(${DoneIcon});
    color : #F9F8F7;
    text-transform : uppercase;
    font-size : 1.3rem;
    letter-spacing : -0.23px;
    line-height : 13px;
    z-index : 10;
    padding-left : 5px;

    & > div:first-child {
        display : block;
        font-family : "Medium";
        margin-bottom : 3px;
        margin-top : 34px;
        
    }
    & > div:last-child {
        font-size : 1.5rem;
        display : block;
        font-family : "ExtraBold";
    }
`
const PurpleC = styled.div`
    position : absolute;
    width : 173px;
    height : 124px;
    top : 70px;
    left : 165px;
    background-image : url(${PurpleCir});
    background-repeat : no-repeat;
    transform : scale(0.8);
`
const BlueC = styled.div`
    position : absolute;
    width : 178px;
    height : 220px;
    top : 450px;
    left : 580px;
    background-image : url(${BlueCir});
    background-repeat : no-repeat;
    transform : scale(0.8);
`
const Dots = styled.div`
    position : absolute;
    width : 141px;
    height : 94px;
    top : 580px;
    left : 530px;
    background-image : url(${DotLayer});
    background-repeat : no-repeat;
    transform : scale(0.8);
`
const BlankC = styled.div`
    position : absolute;
    width : 168px;
    height : 168px;
    top : 353px;
    left : 978px;
    background-image : url(${BlnkC});
    background-repeat : no-repeat;
    transform : scale(0.9);
`
const BlankCsmall = styled.div`
    position : absolute;
    width : 168px;
    height : 168px;
    top : 34px;
    left : 825px;
    background-image : url(${BlnkC});
    background-repeat : no-repeat;
    transform : scale(0.45);

    &:after {
        content : "";
        position : absolute;
        width : 44px;
        height : 44px;
        background-color : #B1E7E7;
        opacity : 0.5;
        border-radius : 50%;
        transform : scale(1.8);
        top : 15px;
    }
`
const Purple = styled.div`
    position : absolute;
    width : 70px;
    height : 70px;
    background-color : #D7CCDD;
    border-radius : 50%;
    opacity : 0.3;
    display : flex;

    &:after {
        content : "";
        position : absolute;
        width : 170px;
        height : 170px;
        background-color : #d7ccdd;
        border-radius : 50%;
        opacity : 0.5;
    }
`
const Desc = styled.div`
    font-size : 4.2rem;
    letter-spacing : -0.2px;
    color : #8B8A89;
    font-family : "Medium";
    display : flex;
    align-items : center;
    position : absolute;
    bottom : 10%;
    left : 50%;
    transform : translateX(-50%);
    text-align : center;
`

export default ProgressMap;