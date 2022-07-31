import { useEffect, useState } from "react";
import styled from "styled-components";
import pallette from "../../styles/pallette.css";
import { lighten, darken } from "polished";
import Title from "../../components/title";
import { motion } from "framer-motion";
import fadein from "../../styles/framer-motion/fadein";
import PageInfo, { getPartTitle, getPageTitle } from "../../app/pageInfo";
import BackImg from "../../assets/sample.jpg"
import { Paper } from "../../styles/components/paper";
import Chat from "../chat";
import { usePage } from "../../hooks/usePage";

const Scr11 = () => {

    const [currentPage, partIdx, handlePage, renderArrow] = usePage({});

    return (
        <>
            <Box as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Img></Img>
                <Message>
                    <strong>
                        "A person who never made a mistakes never tried anything new." <br/> 
                        Albert Einstein
                    </strong> <br/> <br/>
                    사무 용품인 포스트잇이 사실은 실패작이었다는 사실, 알고 계셨나요? <br/>
                    3M사의 연구원이던 스펜서 실버는 한번 붙으면 <br/>
                    잘 떨어지지 않는 강력한 접착제를 만들던 중 <br/>
                    실수로 접착력이 약한 제품을 개발하게 되었습니다. <br/>
                    그러나 실버는 이를 그저 실패로만 보지 않고 사내 기술 세미나에 보고하게 됩니다. <br/>
                    그 결과, 우리가 잘 알고있는 포스트잇이 탄생하게 된 것이죠. <br/>
                    이처럼 실패는 그저 지워야하는 오점이 아닌, <br/>
                    새로운 길을 여는 문이 될 수 있는 가능성입니다.
                </Message>
            </Box>
            {renderArrow()}
        </>
    )
}
const Box = styled(Paper)`
    margin-top : 4vh;
    height : 70vh;
    position : relative;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`
const Img = styled.div`
    background-image : url(${BackImg});
    width : 80%;
    height : 50%;
    background-size : contain;
    background-position : center center;
    background-repeat : no-repeat;
    margin : 5% auto 5%;
`
const Message = styled.div`
    text-align : center;
    font-size : 1.8rem;
    word-break : keep-all;

    & > strong {
        font-size : 2.0rem;
        font-style : italic;
    }
`


export default Scr11;