import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import Katalk from "../katalk_v2";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { useSelector } from "react-redux";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import { setHistory } from "services/setHistory";

const Scr3 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const messages = useSelector(state=>state.part4.message);
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            if(messages.length !== 2) {
                toastError("Y양에게 문자를 보내주세요");
                return false;
            }
            POST("/part4/scr3", { userIdx, message : messages[0] }, 
                (result) => {
                    console.log(result.data);
                    if(result.data.message) {
                        toastError(result.data.message, {});
                        return false;
                    }else {
                        return true;
                    }
                }
            )
        },
        onAfterNext : ()=>setHistory(userIdx, partIdx, currentPage),
    });

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,3)}/>
            <Katalk messages={messages}/>
            {renderArrow()}
        </>
    )
}

export default Scr3;