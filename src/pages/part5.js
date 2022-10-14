import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import { useSelector, useDispatch } from "react-redux";
import Scr1 from "../containers/part5/scr1";
import Scr2 from "../containers/part5/scr2";
import Scr3 from "../containers/part5/scr3";
import Scr4 from "../containers/part5/scr4";
import Scr5 from "../containers/part5/scr5";
import Scr6 from "../containers/part5/scr6";
import Scr7 from "../containers/part5/scr7";
import Scr8 from "../containers/part5/scr8";
import Scr9 from "../containers/part5/scr9";
import Scr10 from "../containers/part5/scr10";
import Scr11 from "../containers/part5/scr11";
import Screen from "../components/screen";
import ProgressBar from "../components/progressBar";
import Header from "../components/header";

const Part5 = () => {

    const curPage = useSelector(state => state.page.pageIdx);

    return (
        <>
            <Header />
            <Screen>
            {
                curPage === 1? <Scr1 /> :
                curPage === 2? <Scr2 /> :
                curPage === 3? <Scr3 /> :
                curPage === 4? <Scr4 /> :
                curPage === 5? <Scr5 /> :
                curPage === 6? <Scr6 /> :
                curPage === 7? <Scr7 /> :
                curPage === 8? <Scr8 /> :
                curPage === 9? <Scr9 /> :
                curPage === 10? <Scr10 /> :
                <Scr11 />
            }
            </Screen>
        </>
    )
}

export default Part5;