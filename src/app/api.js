import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:8082", // "build 후 ``로 바꿀것" 
    headers : {
        "Content-Type" : "application/json",
    },
    withCredentials : true,
})

export default API;