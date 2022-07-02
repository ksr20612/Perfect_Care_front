import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import { useSelector, useDispatch } from "react-redux";
import Scr1 from "../containers/part2/scr1";
import Scr2 from "../containers/part2/scr2";
import Scr3 from "../containers/part2/scr3";
import Scr4 from "../containers/part2/scr4";
import Scr5 from "../containers/part2/scr5";
import Scr6 from "../containers/part2/scr6";
import Scr7 from "../containers/part2/scr7";
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
                <Scr7 />
            }
            </Screen>
            <ProgressBar/>
        </>
    )
}

export default Part2;