import API from "./API";

export const GET = async (path, callback = f => f,
)=>{
    const result = await API().get(path);
    return callback(result);
}

export const POST = async (path, reqData = {}, callback = f => f,
)=>{
    const result = await API().post(path, reqData);
    return callback(result);
}