import API from "./API";

export const GET = async (path, reqData = {}, callback={
    onBefore : f => f,
    onSuccess : f => f,
    onFail : f => f,
})=>{
    if(callback.onBefore) callback.onBefore();
    API("auth").get(path, reqData)
        .then((result)=>callback.onSucess? callback.onSuccess(result) : null)
        .catch(callback.onFail? callback.onFail() : null);
}

export const POST = async (path, reqData = {}, callback={
    onBefore : f => f,
    onSuccess : f => f,
    onFail : f => f,
})=>{
    if(callback.onBefore) callback.onBefore();
    API("auth").post(path, reqData)
        .then((result)=>callback.onSucess? callback.onSuccess(result) : null)
        .catch(callback.onFail? callback.onFail() : null);
}