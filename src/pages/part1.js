import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import { useSelector, useDispatch } from "react-redux";
import Scr1 from "../containers/part1/scr1";
import Scr2 from "../containers/part1/scr2";
import Scr3 from "../containers/part1/scr3";
import Scr4 from "../containers/part1/scr4";
import Scr5 from "../containers/part1/scr5";
import Screen from "../components/screen";
import ProgressBar from "../components/progressBar";

const Part1 = () => {

    const curPage = useSelector(state => state.state.pageIdx);

    return (
        <>
            <Screen>
            {
                curPage === 1? <Scr1 /> :
                curPage === 2? <Scr2 /> :
                curPage === 3? <Scr3 /> :
                curPage === 4? <Scr4 /> :
                <Scr5 />
            }
            </Screen>
            <ProgressBar/>
        </>
    )
}

export default Part1;