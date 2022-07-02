import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {

    const curPage = useSelector(state => state.state.pageIdx);

    return (
        <>
            메인
        </>
    )
}

export default Main;