import { useState, useEffect } from "react";
import pallette from "../styles/pallette.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextBox from "../components/textBox";
import { Paper } from "../styles/components/paper";
import Button from "../components/button";
import { motion } from "framer-motion";
import fadein from "../styles/framer-motion/fadein";
import { toastError, toastSuccess } from "../utils/toast";
import { POST } from "../services/userService";
import { POST as POSTApi } from "../services/dataService"; 
import { setId, setLoginState, setToken, setNick, setIdx } from "../features/stateSlice";
import Header from "../components/header";
import { getHistory } from "services/setHistory";
import { setPageIdx } from "../features/pageSlice";
import { FaSleigh } from "react-icons/fa";

const Login = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector(state => state.state.id);
    const idx = useSelector(state => state.state.userIdx);
    const [password, setPassword] = useState("");
    const handleChange = (type, value) => {
        if(type === "id") {
            dispatch(setId(value));
        }else {
            setPassword(value);
        }
    }
    const handleClick = () => {
        if(id && password) {
            setLoading(true);
            console.log({id, password});
            POST("/user/login", {id, password}, 
                async (result) => {
                    if(result.data.message) {
                        toastError(result.data.message, {
                            onClose : () => {
                                setLoading(false);
                            }
                        });
                    }else {
                        const token = result.data.token;
                        const userIdx = result.data.idx;
                        const nick = result.data.nick;
                        console.log(result.data);
                        dispatch(setToken(token));
                        dispatch(setLoginState(true));
                        dispatch(setNick(nick));
                        dispatch(setIdx(userIdx));
                        // const historyResult = await getHistory(userIdx);
                        // if(historyResult) {
                        //     const partIdx = historyResult.partIdx;
                        //     const pageIdx = historyResult.pageIdx;
                        //     console.log({partIdx, pageIdx});
                        //     if(partIdx && pageIdx) {
                        //         toastSuccess("로그인에 성공하였습니다.", {
                        //             onClose : () => {
                        //                 dispatch(setPageIdx(pageIdx));
                        //                 navigate(`/${partIdx}`);
                        //             }
                        //         });
                        //     }
                        // }
                        try {
                            POSTApi("/hist/progress", {userIdx},
                                (result) => {
                                    if(result.data.message) {
                                        console.log(result.data.message);
                                        return toastError(result.data.message, {
                                            onClose : () => {
                                                setLoading(false);
                                            }
                                        });
                                    }else {
                                        console.log(result.data.progress[0][0]);
                                        const {lastPage, lastPart} = result.data.progress[0][0];
                                        console.log({lastPage, lastPart});
                                        if(lastPage && lastPart) {
                                            toastSuccess("로그인에 성공하였습니다.", {
                                                onClose : () => {
                                                    dispatch(setPageIdx(lastPage));
                                                    navigate(`/${lastPart}`);
                                                }
                                            })
                                        }
                                    }
                                }    
                            )
                        }catch(err) {
                            toastError("서버 연결에 실패하였습니다", {
                                onClose : () => {
                                    setLoading(false);
                                }
                            })
                        }
                    }
                }
            )
        }else {
            toastError("아이디와 비밀번호를 입력해주세요!");
        }
    }

    return (
        <>
            <Header/>
            <Box>  
                <Card as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                    <Title>로그인</Title>
                    <TextBox label="아이디" customStyle={{width:"100%"}} value={id} handleChange={(value)=>{handleChange("id", value)}} hasBackground={false}/>
                    <TextBox label="비밀번호" customStyle={{width:"100%"}} value={password} handleChange={(value)=>{handleChange("password", value)}} hasBackground={false}/>
                    <Button customStyle={{ width : "100%", }} handleClick={()=>{handleClick()}} loading={loading}/>
                    <Text href="/signup">회원가입</Text>
                    {/* <Text href="/search">아이디 비밀번호 찾기</Text> */}
                    {/* <div style={{width : "100%", height : "1px", backgroundColor : "#ccc"}} /> */}
                    {/* <KaKaoLogin>카카오톡으로 로그인하기</KaKaoLogin> */}
                </Card>
            </Box>
        </>
    )
}
const Box = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    width : 80vw;
    max-width : 1180px;
    height : calc(100vh - 6vh);
    margin-top : 6vh;
    padding-top : min(5vh, 62px);
    padding-left : min(15vw, 110px);
    padding-right : min(15vw, 110px);
    padding-bottom : min(5vh, 62px);
    background-color : #f9f8f7;
    position : relative;
    font-family : "Black";
    font-size : 3.2rem;
`
const Card = styled(Paper)`
    width : 80%;
    height : 80%;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction: column;
`
const Title = styled.div`
    margin-bottom : 3%;
`
const Text = styled.a`
    width : 100%;
    font-family : "Light";
    font-size : 2.0rem;
    text-align : end;
    margin-top : 1%;
    color : #888;
    text-decoration : none;
    position : relative;
    transition : all 0.2s ease-in;
    &:hover {
        color : ${pallette.YELLOW};
        transition : all 0.2s ease-in;
    }
    & + & {
        margin-bottom : 1%;
    }
`
const KaKaoLogin = styled.div`
    width : 100%;
    padding : 1.5%;
    margin-top : 3%;
    border-radius : 5px;
    font-size : 1.6rem;
    height : 10%;
    background-color : ${pallette.YELLOW};
    font-family : "Regular";
    display : flex;
    justify-content : center;
    align-items : center;
    color : white;
`

export default Login;