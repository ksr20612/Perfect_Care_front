import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const autoCloseDelay = 500;

export const toastError = (message) => {
    return toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: autoCloseDelay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
    })
}

export const toastInfo = (message) => {
    return toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: autoCloseDelay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
    })
} 

export const toastSuccess = (message) => {
    return toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: autoCloseDelay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
    })
} 

export const toastWarning = (message) => {
    return toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: autoCloseDelay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
    })
} 