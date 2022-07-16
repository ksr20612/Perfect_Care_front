import axios from "axios";
import { authUrl, apiUrl } from "../app/serverInfo";

const API = (auth = "auth") => axios.create({
    baseURL : auth==="auth"? authUrl : apiUrl,
    headers : {
        "Content-Type" : "application/json",
    },
    withCredentials : true,
});

export default API;