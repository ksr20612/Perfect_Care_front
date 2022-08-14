import { useState, useEffect } from "react";
import styled from "styled-components";
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

const ProgressMap = () => {

    const [day, setDay] = useState(2);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    const [isPopupOn, setIsPopupOn] = useState(false);
    const handleDownload = () => {
        saveAs("../../robots.txt", "퍼펙트 빙고.txt");        
    }
    const handleClose = () => {
        setIsPopupOn(false);
    }

    return (
        <Box as={motion.div} initial={{opacity : 0, y : -20, scale : 0.8}} animate={{opacity : 1, y : 0, scale : 0.8}} exit={{opacity : 0, y : -20, scale : 0.8}}>
            <Bulge></Bulge>
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
            <Part title="Part 01" color="#547665" position={{top : "570px", left : "57px"}} isDone={true}>
                <Stop position={{top : "532px", left : "120px"}} isChecked={true}/>
                <Stop position={{top : "500px", left : "147px"}}/>
                <Stop position={{top : "457px", left : "165px"}}/>
                <Stop position={{top : "414px", left : "180px"}}/>
                <Stop position={{top : "376px", left : "198px"}}/>
                <Stop position={{top : "350px", left : "224px"}}/>
                <Stop position={{top : "340px", left : "260px"}}/>
            </Part>
            <Part title="Part 02" color="#EE8975" position={{top : "354px", left : "298px"}} isDone={true}>
                <Stop position={{top : "335px", left : "363px"}}/>
                <Stop position={{top : "320px", left : "395px"}}/>
                <Stop position={{top : "296px", left : "423px"}}/>
                <Stop position={{top : "260px", left : "443px"}}/>
                <Stop position={{top : "218px", left : "455px"}}/>
                <Stop position={{top : "177px", left : "466px"}}/>
                <Stop position={{top : "140px", left : "482px"}}/>
            </Part>
            <Part title="Part 03" color="#5289C9" position={{top : "123px", left : "515px"}} isDone={false}>
                <Stop position={{top : "93px", left : "570px"}}/>
                <Stop position={{top : "90px", left : "602px"}}/>
                <Stop position={{top : "95px", left : "634px"}}/>
                <Stop position={{top : "106px", left : "664px"}}/>
                <Stop position={{top : "130px", left : "687px"}}/>
                <Stop position={{top : "163px", left : "702px"}}/>
                <Stop position={{top : "195px", left : "712px"}}/>
                <Stop position={{top : "224px", left : "716px"}}/>
            </Part>
            <Part title="Part 04" color="#F5BA57" position={{top : "310px", left : "701px"}} isDone={false}>
                <Stop position={{top : "345px", left : "713px"}}/>
                <Stop position={{top : "380px", left : "717px"}}/>
                <Stop position={{top : "413px", left : "725px"}}/>
                <Stop position={{top : "443px", left : "737px"}}/>
                <Stop position={{top : "465px", left : "755px"}}/>
                <Stop position={{top : "483px", left : "780px"}}/>
                <Stop position={{top : "495px", left : "806px"}}/>
                <Stop position={{top : "498px", left : "836px"}}/>
                <Stop position={{top : "497px", left : "865px"}}/>
            </Part>
            <Part title="Part 05" color="#C6B9B6" position={{top : "497px", left : "901px"}} isDone={false}>
                <Stop position={{top : "456px", left : "945px"}}/>
                <Stop position={{top : "424px", left : "958px"}}/>
                <Stop position={{top : "390px", left : "967px"}}/>
                <Stop position={{top : "355px", left : "971px"}}/>
                <Stop position={{top : "320px", left : "980px"}}/>
                <Stop position={{top : "285px", left : "990px"}}/>
                <Stop position={{top : "255px", left : "1010px"}}/>
                <Stop position={{top : "233px", left : "1038px"}}/>
                <Stop position={{top : "223px", left : "1072px"}}/>
            </Part>
            <Days>
                {
                    [...Array(15)].map((v, i)=>{
                        return i<day? <Done onClick={()=>setIsPopupOn(true)}><span>Day</span><span>{((i+1)+"").padStart(2, "0")}</span></Done> : <Blank />
                    })
                }
            </Days>
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
    height : 800px;
    background-color : #F9F8F7;
    position : fixed;
    top : 7.5vh;
    right : 2.75vw;
    border-radius : 1%;
    box-shadow : 10px 10px 20px #aaa;
    transform-origin : top right;
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
    width : 60px;
    height : 60px;
    border-radius : 8px;
    background-color : white; 
`
const Done = styled.div`
    width : 60px;
    height : 60px;
    background-image : url(${CalenderIcon});
    color : #547665;
    text-transform : uppercase;
    font-size : 1.0rem;
    font-family : "Bold";
    display : flex;
    align-items : center;
    flex-direction : column;
    letter-spacing : -0.23px;
    line-height : 13px;
    z-index : 10;

    & > span:first-child {
        margin-top : 27px;
    }
    & > span:last-child {
        font-size : 1.5rem;
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

export default ProgressMap;