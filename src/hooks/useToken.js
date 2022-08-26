import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "../utils/toast";
import { POST } from "../services/userService";
import { useSelector } from "react-redux";

const useToken = (callback={
    onError : f => f,
    onSuccess : f => f,
}) => {

    const [isTokenValid, setIsTokenValid] = useState(false);
    const navigate = useNavigate();
    const userToken = useSelector(state=>state.state.token);

    useEffect(()=>{
        const result = POST("/token", {userToken}, {
            onFail : ()=>{
                navigate("/");
                toastError("세션이 만료되었습니다. 다시 로그인해주세요.");
                if(callback.onError) callback.onError();
            },
        });
        setIsTokenValid(false);
        if(callback.onSuccess) callback.onSuccess();
    }, []);

    return [ isTokenValid ];

}

export default useToken;