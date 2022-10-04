import { POST } from "../services/dataService";
import { toastError } from "../utils/toast";

export const setHistory = (userIdx, partIdx, pageIdx)=>{
    console.log({partIdx, pageIdx});
    POST("/history", { userIdx, partIdx : partIdx+"", pageIdx : pageIdx+"" }, 
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