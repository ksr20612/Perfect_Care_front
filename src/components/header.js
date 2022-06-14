import styled from "styled-components";
import { TiThMenu as MenuIcon } from "react-icons/ti";
import { BiLogIn as LoginIcon, BiLogOut as LogoutIcon } from "react-icons/bi";

const Header = () => {

    return (
        <Head>
            <IconWrapper>
                <MenuIcon size="2.4rem" />
                <span>메뉴</span>
            </IconWrapper>
            <div>****</div>
            <IconWrapper>
                <span>로그인</span>
                <LoginIcon size="2.4rem" />
            </IconWrapper>
        </Head>
    )
}

const Head = styled.div`
    border-bottom : 2px solid rgba(0,0,0,0.5);
    width : 100%;
    max-height : 100px;
    height : 5vh;
    display : flex;
    justify-content : space-around;
    align-items : center;
    font-size : 2.4rem;
    position: fixed;
    background: hsla(0, 100%, 100%, 0.6);
    backdrop-filter: saturate(150%) blur(10px);
    z-index: 5;
`

const IconWrapper = styled.div`
    display : flex;
    align-items : center;
    & > span { 
        font-size : 2.0rem;
        font-family : "Noto_Black";
    }
`

export default Header;