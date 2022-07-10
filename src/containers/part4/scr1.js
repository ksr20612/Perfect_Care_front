import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion, useMotionValue, useTransform } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";

const list = { 
    visible : { 
        opacity : 1,
        transition : {
            when : "beforeChildren",
            staggerChildren : 1,
        }
    }, 
    hidden : { 
        opacity : 0, 
    },
};
const item = { 
    visible : { 
        opacity : 1, 
        y : 0, 
    }, 
    hidden : { 
        y : 30, 
        opacity : 0, 
    }
};

const Scr1 = () => {

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0.2, 1, 0.2]);

    return (
        <>
            <Title title={getPartTitle(4)} subTitle={getPageTitle(4,1)}/>
            <br/> <br/>
            <Box as={motion.div} animate={{x : 100}} drag="x" dragConstraints={{left : -100, right : 100}}/>
            <UL as={motion.ul} initial="hidden" animate="visible" variants={list}>
                <LI as={motion.li} />
                <LI as={motion.li} />
            </UL>
            <Box as={motion.div} drag="x" style={{ x, opacity }} />
            <Box as={motion.div} animate={{x : 100}} transition={{type : "spring", duration : 2, stiffness : 100 }}/>
        </>
    )
}

const Box = styled.div`
    width : 100px;
    height : 100px;
    background-color : rgba(0, 0, 0, 0.5);
`
const UL = styled.ul`
    width : 300px;
    height : 500px;
    background-color : rgba(0, 0, 0, 0.7);
`
const LI = styled.li`
    width : 100%;
    background-color : yellow;
`

export default Scr1;