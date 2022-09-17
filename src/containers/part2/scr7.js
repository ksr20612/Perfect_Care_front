import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import MovieClip from "../../components/movieClip";
import Comments from "../../components/commentBox";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import { usePage } from "../../hooks/usePage";
import { useSelector, useDispatch } from "react-redux";
import { setComment } from "../../features/parts/part2Slice";
import { POST } from "../../services/dataService";
import { toastError } from "../../utils/toast";
import useFetchREST from "../../hooks/useFetchREST";

const Scr5 = () => {

    const userIdx = useSelector(state=>state.state.userIdx);
    const nick = useSelector(state=>state.state.nick);
    const comment = useSelector(state=>state.part2.comment);
    const dispatch = useDispatch();
    const [input, setInput] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const handleChange = (v) => {
        setInput(v);
    }
    const handleClick = (e) => {
        setInput("");
        dispatch(setComment({name : nick, content : input, likes : 0}));
        if(input) setIsClicked(true);
    }
    const [currentPage, partIdx, handlePage, renderArrow] = usePage({
        onBeforeNext : () => {
            console.log(isClicked);
            if(!isClicked) return false;
            POST("/part2/scr5", { userIdx, comment : comment[0] }, 
                (result) => {
                    if(result.data.message) {
                        toastError(result.data.message, {});
                        return false;
                    }else {
                        return true;
                    }
                }
            )
        }
    });
    useFetchREST(`/part2/scr5/${userIdx}`, 
        (result)=>{
            console.log(result); 
            if(result.data.message) {
                return toastError(result.data.message, {});
            }else {
                dispatch(setComment(result.data.comments));
                // nick, content, like만 가져올것
            }
        }
    )


    return (
        <>
            <Title title={getPartTitle(2)} subTitle={getPageTitle(2,7)}/>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <div>
                    다음 영상에 나오는 주인공이 내 친구라고 생각했을 때,
                </div>
                <div>
                    어떤 말을 해주고 싶은지 댓글로 적어주세요.
                </div>
                <Container>
                    <MovieClip width="100%" height="100%"/>
                    <Comments value={input} comments={comment} handleChange={(v)=>{handleChange(v)}} handleClick={(e)=>{handleClick(e)}}></Comments>
                </Container>
            </Box>
            {renderArrow()}
        </>
    )
}

const Box = styled.div`
    font-family : "Medium";
    padding : 0 1vw;
    padding-top : 2vh;

    & > div {
        font-size : 2.6rem;
    }
`
const Container = styled.div`
    display : flex;
    width : 100%;
    margin-top : 2vh;
    
    & > div:first-child {
        width : 60%;
        height : 60vh;
    }
`

export default Scr5;