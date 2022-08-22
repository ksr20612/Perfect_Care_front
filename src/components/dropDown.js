import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import pallette from "../styles/pallette.css";
import { lighten } from "polished";
import { IoMdArrowDropdown as DropIcon } from "react-icons/io";

const DropDown = ({
    title = "안정형 완벽주의는...",
    style = {"width" : "100%",},
    children
}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                <Box style={style} onClick={()=>setIsOpen(!isOpen)}>
                    <span className={isOpen? "open" : null}><DropIcon/></span>
                    {title}
                </Box>
                {isOpen && children}
            </AnimatePresence>
        </>
    )
}
const Box = styled.div`
    width : 100%;
    height : 30px;
    padding : 5px;
    margin-bottom : 5px;
    background-color : ${lighten(0.1, pallette.BLUISH)};
    font-size : 1.6rem;
    display : flex;
    align-items : center;
    border-radius : 5px;

    & > span {
        display : flex;
        align-items : center;
        justify-content : center;
        transform : rotate(180deg);
        transition : transform .3s ease-in-out;
    }
    & > span.open {
        transition : transform .3s ease-in-out;
        transform : rotate(0);
    }

    div + & {
        margin-top : 10px;
    }

`

export default DropDown;