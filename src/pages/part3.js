import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import { useSelector, useDispatch } from "react-redux";
import Scr1 from "../containers/part3/scr1";
import Scr2 from "../containers/part3/scr2";
import Scr3 from "../containers/part3/scr3";
import Scr4 from "../containers/part3/scr4";
import Scr5 from "../containers/part3/scr5";
import Scr6 from "../containers/part3/scr6";
import Scr7 from "../containers/part3/scr7";
import Scr8 from "../containers/part3/scr8";
import Scr9 from "../containers/part3/scr9";
import Scr10 from "../containers/part3/scr10";
import Scr11 from "../containers/part3/scr11";
import Scr12 from "../containers/part3/scr12";
import Scr13 from "../containers/part3/scr13";
import Scr14 from "../containers/part3/scr14";
import Scr15 from "../containers/part3/scr15";
import Scr16 from "../containers/part3/scr16";
import Scr17 from "../containers/part3/scr17";
import Scr18 from "../containers/part3/scr18";
import Screen from "../components/screen";
import ProgressBar from "../components/progressBar";

const Part2 = () => {

    const curPage = useSelector(state => state.state.pageIdx);

    return (
        <>
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
                curPage === 11? <Scr11 /> :
                curPage === 12? <Scr12 /> :
                curPage === 13? <Scr13 /> :
                curPage === 14? <Scr14 /> :
                curPage === 15? <Scr15 /> :
                curPage === 16? <Scr16 /> :
                curPage === 17? <Scr17 /> :
                <Scr18 />
            }
            </Screen>
            <ProgressBar/>
        </>
    )
}

export default Part2;