import { createGlobalStyle } from "styled-components";
import pallette from "./pallette.css";
import { lighten } from "polished";
// import Bold from "./font/SpoqaHanSansNeo-Bold.ttf";
// import Medium from "./font/SpoqaHanSansNeo-Medium.ttf";
// import Regular from "./font/SpoqaHanSansNeo-Regular.ttf";
// import Light from "./font/SpoqaHanSansNeo-Light.ttf";
import Anton from "./font/Anton-Regular.ttf";
import Noto_Black from "./font/NotoSansKR-Black.otf";
import Noto_Bold from "./font/NotoSansKR-Bold.otf";
import Noto_Light from "./font/NotoSansKR-Light.otf";
import Noto_Medium from "./font/NotoSansKR-Medium.otf";
import Noto_Regular from "./font/NotoSansKR-Regular.otf";
import Noto_Thin from "./font/NotoSansKR-Thin.otf";
import Black from "./font/Pretendard-Black.woff";
import Bold from "./font/Pretendard-Bold.woff";
import ExtraBold from "./font/Pretendard-ExtraBold.woff";
import ExtraLight from "./font/Pretendard-ExtraLight.woff";
import Light from "./font/Pretendard-Light.woff";
import Medium from "./font/Pretendard-Medium.woff";
import Regular from "./font/Pretendard-Regular.woff";
import SemiBold from "./font/Pretendard-SemiBold.woff";
import Thin from "./font/Pretendard-Thin.woff";
import ArialBold from "./font/Arial-bold.ttf";

const Global = createGlobalStyle`
    // reset
    html {
        overflow-x : hidden;
        font-size : 10px;
        font-family : "Regular", sans-serif;
    }
    body {
        margin: 0;
        padding : 0;
        overflow-wrap: break-word;
        overflow-x : hidden;
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : space-around;
    }
    :lang(ko) { word-break: keep-all; }
    img {
        max-width: 100%;
        height: auto;
    }
    * {
        box-sizing : border-box;
    }
    ::-moz-selection {
        background : ${pallette.NEWGREEN};
        color : ${pallette.WHITE};
    }
    ::selection {
        background : ${pallette.NEWGREEN};
        color : ${pallette.WHITE};
    }

    // font
    ${'' /* @font-face {
        font-family: 'Sans_Bold';
        font-weight: 700;
        src: local('Spoqa Han Sans Neo Bold'),
        url(${Bold}) format('truetype');
    }
    
    @font-face {
        font-family: 'Sans_Medium';
        font-weight: 300;
        src: local('Spoqa Han Sans Neo Medium'),
        url(${Medium}) format('truetype');
    }

    @font-face {
        font-family: 'Sans_Regular';
        font-weight: 400;
        src: local('Spoqa Han Sans Neo Regular'),
        url(${Regular}) format('truetype');
    }

    @font-face {
        font-family: 'Sans_Light';
        font-weight: 300;
        src: local('Spoqa Han Sans Neo Light'),
        url(${Light}) format('truetype');
    } */}

    @font-face {
        font-family: 'Anton';
        font-weight: 300;
        src: local('Anton-Regular'),
        url(${Anton}) format('truetype');
    }

    @font-face {
        font-family: 'Noto_Black';
        font-weight: 300;
        src: local('NotoSansKR-Black'),
        url(${Noto_Black}) format('truetype');
    }

    @font-face {
        font-family: 'Noto_Bold';
        font-weight: 300;
        src: local('NotoSansKR-Bold'),
        url(${Noto_Bold}) format('truetype');
    }

    @font-face {
        font-family: 'Noto_Medium';
        font-weight: 300;
        src: local('NotoSansKR-Medium'),
        url(${Noto_Medium}) format('truetype');
    }

    @font-face {
        font-family: 'Noto_Regular';
        font-weight: 300;
        src: local('NotoSansKR-Regular'),
        url(${Noto_Regular}) format('truetype');
    }

    @font-face {
        font-family: 'Noto_Light';
        font-weight: 300;
        src: local('NotoSansKR-Light'),
        url(${Noto_Light}) format('truetype');
    }

    @font-face {
        font-family: 'Noto_Thin';
        font-weight: 300;
        src: local('NotoSansKR-Thin'),
        url(${Noto_Thin}) format('truetype');
    }

    // Pretendards
    @font-face {
        font-family: 'Black';
        font-weight: 300;
        src: local('Pretendard-Black'),
        url(${Black}) format('truetype');
    }
    @font-face {
        font-family: 'Bold';
        font-weight: 300;
        src: local('Pretendard-Bold'),
        url(${Bold}) format('truetype');
    }
    @font-face {
        font-family: 'ExtraBold';
        font-weight: 300;
        src: local('Pretendard-ExtraBold'),
        url(${ExtraBold}) format('truetype');
    }
    @font-face {
        font-family: 'ExtraLight';
        font-weight: 300;
        src: local('Pretendard-ExtraLight'),
        url(${ExtraLight}) format('truetype');
    }
    @font-face {
        font-family: 'Light';
        font-weight: 300;
        src: local('Pretendard-Light'),
        url(${Light}) format('truetype');
    }
    @font-face {
        font-family: 'Medium';
        font-weight: 300;
        src: local('Pretendard-Medium'),
        url(${Medium}) format('truetype');
    }
    @font-face {
        font-family: 'Regular';
        font-weight: 300;
        src: local('Pretendard-Regular'),
        url(${Regular}) format('truetype');
    }
    @font-face {
        font-family: 'SemiBold';
        font-weight: 300;
        src: local('Pretendard-SemiBold'),
        url(${SemiBold}) format('truetype');
    }
    @font-face {
        font-family: 'Thin';
        font-weight: 300;
        src: local('Pretendard-Thin'),
        url(${Thin}) format('truetype');
    }

    @font-face {
        font-family: 'Arial_Bold';
        font-weight: 300;
        src: local('Arial_bold'),
        url(${ArialBold}) format('truetype');
    }

`

export default Global;