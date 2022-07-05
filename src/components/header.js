import styled from "styled-components";
import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import { BiMenu as MenuIcon } from "react-icons/bi";
import { BsPerson as LoginIcon, BsPersonX as LogoutIcon } from "react-icons/bs";
import { ImBubbles4 as SpeechBubble } from "react-icons/im";

const Header = () => {

    const [isMenuOn, setIsMenuOn] = useState(false);

    return (
        <Head>
            <IconWrapper onClick={()=>{setIsMenuOn(!isMenuOn);}}>
                <MenuIcon size="2.4rem"/>
                <span>메뉴</span>
            </IconWrapper>
            <div className="logo">Perfect Care(로고)</div>
            <div className="right">
                <IconWrapper>
                    <span>커뮤니티</span>
                    <SpeechBubble size="2.4rem"/>
                </IconWrapper>
                <IconWrapper>
                    <span>로그인</span>
                    <LoginIcon size="2.4rem"/>
                </IconWrapper>
            </div>
            {/* vertical_menu */}
            <ScreenList className={isMenuOn? "on" : null}>

            </ScreenList>
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
    z-index: 9999;
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
const IconWrapper = styled.div`
    display : flex;
    align-items : center;
    padding : 0.5vmin 0;
    cursor : pointer;

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

    &.on {
        transform : unset;
    }
`

export default Header;