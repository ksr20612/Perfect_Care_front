import { useState, useEffect } from "react";
import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { motion } from "framer-motion";
import MapIcon from "../assets/btn_cur_lo.svg";
import PathIcon from "../assets/ic_path.svg";
import PathShadowIcon from "../assets/ic_path_sha.svg";
import TraceIcon from "../assets/path.svg";
import CalenderIcon from "../assets/btn_cal.svg";
import FinFlagIcon from "../assets/ic_fin.svg";
import Part from "./Part";
import { usePage } from "../hooks/usePage";
import useModal from "../hooks/useModal";

const ProgressMap = () => {

    const [day, setDay] = useState(2);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});
    const [showModal, closeModal] = useModal();
    const handleModal = () => {
        console.log("clicked");
        showModal({
            modalType : "Download",
            modalProps : {
                day : "DAY-01",
                content : "퍼펙트 빙고",
                handleDownload : () => {
                    alert(`${this.content}를 다운로드 합니다.`);
                }
            }
        })
    }

    return (
        <Box as={motion.div} initial={{opacity : 0, y : -20}} animate={{opacity : 1, y : 0}} exit={{opacity : 0, y : -20}}>
            <Bulge></Bulge>
            <Map></Map> 
            <Path></Path>
            <PathShadow />
            <Trace/>
            <FinFlag/>
            <Part title="Part 01" color="#547665" position={{top : "570px", left : "57px"}} isDone={true}>
                <div></div>
            </Part>
            <Part title="Part 02" color="#EE8975" position={{top : "354px", left : "298px"}} isDone={true}>

            </Part>
            <Part title="Part 03" color="#5289C9" position={{top : "123px", left : "510px"}} isDone={false}>

            </Part>
            <Part title="Part 04" color="#F5BA57" position={{top : "310px", left : "701px"}} isDone={false}></Part>
            <Part title="Part 05" color="#C6B9B6" position={{top : "500px", left : "901px"}} isDone={false}></Part>
            <Days>
                {
                    [...Array(15)].map((v, i)=>{
                        return i<day? <Done onClick={()=>{console.log("day"); handleModal()}}><span>Day</span><span>{((i+1)+"").padStart(2, "0")}</span></Done> : <Blank />
                    })
                }
            </Days>
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
    top : 8vh;
    right : 2vw;
    border-radius : 1%;
    box-shadow : 10px 10px 20px #aaa;
    z-index : 10;
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
    right : 10px;
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


export default ProgressMap;