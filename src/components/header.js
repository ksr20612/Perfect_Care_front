import styled from "styled-components";
import pallette from "../styles/pallette.css";
import { BiMenu as MenuIcon } from "react-icons/bi";
import { BsPerson as LoginIcon, BsPersonX as LogoutIcon } from "react-icons/bs";
import { ImBubbles4 as SpeechBubble } from "react-icons/im";

const Header = () => {

    return (
        <Head>
            <IconWrapper>
                <MenuIcon size="2.4rem"/>
                <span>메뉴</span>
            </IconWrapper>
            <div>****</div>
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
        </Head>
    )
}

const Head = styled.div`
    border-bottom : 2px solid rgba(0,0,0,0.5);
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
    z-index: 5;
    color : white;
    padding : 0 5vw;
    & > .right {
        display : flex;
    }
`

const IconWrapper = styled.div`
    display : flex;
    align-items : center;
    padding : 0.5vmin 0;

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

export default Header;