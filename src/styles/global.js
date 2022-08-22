import { createGlobalStyle } from "styled-components";
import pallette from "./pallette.css";
import { lighten } from "polished";
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
import Hand from "./font/Hand-writing.ttf";

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
        font-family : 'Hand';
        font-weight : 300;
        src: url(${Hand}) format('truetype');
    }

    @font-face {
        font-family: 'Arial_Bold';
        font-weight: 300;
        src: local('Arial_bold'),
        url(${ArialBold}) format('truetype');
    }

`

export default Global;