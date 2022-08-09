import styled from "styled-components";
import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import { BiMenu as MenuIcon } from "react-icons/bi";
import { BsPerson as LoginIcon, BsPersonX as LogoutIcon } from "react-icons/bs";
import { ImBubbles4 as SpeechBubble } from "react-icons/im";
import { FaMapMarkedAlt as MapIcon } from "react-icons/fa";
import { AiOutlineCloseSquare as CloseIcon } from "react-icons/ai";
import PageInfo from "../app/pageInfo";
import { setPageIdx } from "../features/pageSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProgressMap from "../components/progressMap";

const Header = () => {

    const [isMenuOn, setIsMenuOn] = useState(false);
    const [isMapOn, setIsMapOn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const partIdx = useLocation().pathname.substr(1,1)*1 - 1;
    const pageIdx = useSelector(state=>state.page.pageIdx)*1 - 1;
    const handleLocation = (partIdx, pageIdx) => {
        const part = partIdx + 1;
        const page = pageIdx + 1;
        if(part > 0 && page > 0){
            if(window.confirm("선택한 섹션으로 이동하시겠습니까? \n 현재 화면에서 입력한 정보는 저장되지 않습니다.")) {
                setIsMenuOn(false);
                navigate(`/${part}`);
                dispatch(setPageIdx(page));
            }
        }
    }
    const isLoggedIn = useSelector(state=>state.state.loginState);
    const nick = useSelector(state=>state.state.nick);

    useEffect(()=>{
        console.log({isLoggedIn, nick});
    })

    return (
        <Head layout>
            <AnimatePresence>
                <IconWrapper onClick={()=>{setIsMenuOn(!isMenuOn); setIsMapOn(false)}}>
                    {isMenuOn? <CloseIcon size="2.4rem"/> : <MenuIcon size="2.4rem"/> }
                    <span>메뉴</span>
                </IconWrapper>
                <div className="logo">Perfect Care(로고)</div>
                <div className="right">
                    <IconWrapper>
                        <span>커뮤니티</span>
                        <SpeechBubble size="2.4rem"/>
                    </IconWrapper>
                    {isLoggedIn? 
                        <>
                            <IconWrapper exit={{opacity : 0}}>
                                <span>{nick}</span>
                                <LoginIcon size="2.4rem"/>
                            </IconWrapper>
                            <IconWrapper onClick={()=>{window.confirm("로그아웃하시겠습니까?")}}>
                                <span>로그아웃</span>
                                <LogoutIcon size="2.4rem"/>
                            </IconWrapper>
                        </>
                        :
                        <IconWrapper onClick={()=>{navigate("/signin")}}>
                            <span>로그인</span>
                            <LoginIcon size="2.4rem"/>
                        </IconWrapper>
                    }
                    <IconWrapper onClick={()=>{setIsMapOn(!isMapOn); setIsMenuOn(false)}} style={isMapOn? {color : "#f5b117"} : {}}>
                        <span></span>
                        <MapIcon size="2.4rem"/>
                    </IconWrapper>
                </div>
            </AnimatePresence>
            {/* vertical_menu */}
            <ScreenList className={isMenuOn? "on" : null}>
                {
                    PageInfo.map((part, i)=>{
                        return (
                            <>
                                <PartTitle>{part.title}</PartTitle>
                                {
                                    part.pages.map((page, j)=>{
                                        return (
                                            <PageTitle className={i===partIdx && j===pageIdx? "cur" : null} onClick={()=>{handleLocation(i, j);}}>{page.title}</PageTitle>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </ScreenList>
            <AnimatePresence>
                {isMapOn && <ProgressMap></ProgressMap>}
            </AnimatePresence>
        </Head>
    )
}

const Head = styled.div`
    width : 100%;
    max-height : 120px;
    height : 6vh;
    display : flex;
    justify-content : space-between;
    align-items : center;
    font-size : 2.0rem;
    position: fixed;
    background-color: ${pallette.BLUE};
    backdrop-filter: saturate(150%) blur(10px);
    z-index: 1000;
    color : white;
    padding : 0 5vw;
    & > .right {
        display : flex;
    }
    & > .logo {
        position : absolute;
        left : calc((100% - 10vw) / 2);
    }
`
const IconWrapper = styled(motion.div)`
    display : flex;
    align-items : center;
    padding : 0.5vmin 0;
    cursor : pointer;
    z-index : 2;

    & > * + * {
        margin-left : 0.5vmin;
    }

    & > span { 
        font-size : 1.6rem;
        font-family : "Noto_Medium";
    }

    & + & {
        margin-left : 2vmin;
    }
`
const ScreenList = styled.div`
    width : 30vw;
    height : calc(100vh - 6vh);
    background-color : ${pallette.WHITE};
    position : fixed;
    top : 6vh;
    left : 0;
    border-right : 2px solid ${pallette.BLUE};
    overflow-y : auto;
    transition : all 0.3s ease-in-out;
    transform : translateX(-100%);
    padding : 20px;

    &.on {
        transform : unset;
    }
`
const PartTitle = styled.div`
    font-size : 2.4rem;
    width : 100%;
    color : black;
    border-bottom : 1px solid black;
    margin-top : 20px;

    &:first-of-type {
        margin-top : 0;
    }
`
const PageTitle = styled.div`
    font-size : 1.6rem;
    width : 100%;
    color : black;
    margin-top : 10px;
    padding : 3px;
    cursor : pointer;

    &.cur {
        background-color : ${pallette.NEWGREEN};
    }
`

export default Header;