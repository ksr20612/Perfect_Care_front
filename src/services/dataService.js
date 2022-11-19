import API from "./API";
import { toastError } from "../utils/toast";

export const GET = async (path, callback = f => f,
)=>{
    try {
        const result = await API("api").get(path);
        return callback(result);
    }catch(e) {
        toastError("서버 연결에 실패하였습니다.");
    }
}

export const POST = async (path, reqData = {}, callback = f => f,
)=>{
    try {
        const result = await API("api").post(path, reqData);
        return callback(result);
    }catch(e) {
        toastError("서버 연결에 실패하였습니다.");
    }
}