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
import { setId, setLoginState } from "../features/stateSlice";

const Login = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector(state => state.state.id);
    const [password, setPassword] = useState("");
    const handleChange = (type, value) => {
        if(type === "id") {
            setId(value);
        }else {
            setPassword(value);
        }
    }
    const handleClick = () => {
        if(id && password) {
            setLoading(true);
            console.log({id, password});
            POST("/user/login", {id, password}, {
                onSuccess : ({ id, password, userToken })=>{
                    /*
                        { id, password, userToken }
                    */
                    if(id && password && userToken) {
                        sessionStorage.setItem("userToken", userToken);
                        navigate("/");
                        toastSuccess("로그인에 성공하였습니다!");
                        dispatch(setLoginState(true));
                    }else {
                        toastError("아이디와 비밀번호를 확인해주세요!");
                        dispatch(setId(""));
                        setPassword("");
                    }
                },
                onFail : ()=>{
                    toastError("로그인에 실패하였습니다.");
                }
            })
        }else {
            toastError("아이디와 비밀번호를 입력해주세요!");
        }
    }

    return (
        <Box>  
            <Card as={motion.div} initial="hidden" animate="visible" variants={fadein}>
                <Title>로그인</Title>
                <TextBox label="아이디" customStyle={{width:"50vh"}} value={id} handleChange={(value)=>{handleChange("id", value)}} hasBackground={false}/>
                <TextBox label="비밀번호" customStyle={{width:"50vh"}} value={password} handleChange={(value)=>{handleChange("password", value)}} hasBackground={false}/>
                <Button customStyle={{ width : "50vh", }} handleClick={()=>{handleClick()}} loading={loading}/>
                <Text href="/signup">회원가입</Text>
                <Text href="/search">아이디 비밀번호 찾기</Text>
                <div style={{width : "50vh", height : "1px", backgroundColor : "#ccc"}} />
                <KaKaoLogin>카카오톡으로 로그인하기</KaKaoLogin>
            </Card>
        </Box>
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
    width : 50vh;
    font-family : "Light";
    font-size : 1.6rem;
    text-align : end;
    margin-top : 1%;
    color : #888;
    text-decoration : none;

    & + & {
        margin-bottom : 1%;
    }
`
const KaKaoLogin = styled.div`
    width : 50vh;
    padding : 1.5%;
    margin-top : 3%;
    border-radius : 5px;
    font-size : 2.4rem;
    background-color : ${pallette.YELLOW};
    font-family : "Regular";
    display : flex;
    justify-content : center;
    align-items : center;
    color : white;
`

export default Login;