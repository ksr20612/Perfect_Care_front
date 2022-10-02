import { createGlobalStyle } from "styled-components";
import pallette from "./pallette.css";

const Global = createGlobalStyle`
    // reset
    html {
        overflow-x : hidden;
        font-size : min(1vh, 10px);
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
`

export default Global;