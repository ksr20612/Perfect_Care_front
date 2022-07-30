import API from "./API";

export const GET = async (path, reqData = {}, callback = f => f,
)=>{
    if(callback.onBefore) callback.onBefore();
    const result = await API("auth").get(path, reqData);
    return callback(result);
}

export const POST = async (path, reqData = {}, callback = f => f,
)=>{
    const result = await API("auth").post(path, reqData);
    return callback(result);
}