import { POST } from "../services/dataService";
import { toastError } from "../utils/toast";

export const setHistory = (userIdx, partIdx, pageIdx)=>{
    console.log({partIdx, pageIdx});
    POST("/hist/history", { userIdx, partIdx : partIdx+"", pageIdx : pageIdx+"" }, 
        (result) => {
            if(result.data.message) {
                toastError(result.data.message, {});
                return false;
            }else {
                return true;
            }
        }
    )
}

export const getHistory = async (userIdx)=>{
    console.log({userIdx});
    return POST("/hist/progress", {userIdx}, 
        (result) => {
            if(result.data.message) {
                toastError(result.data.message, {});
                return false;
            }else {
                return result.data;
            }
        }
    )
}