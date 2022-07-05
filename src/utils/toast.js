import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const autoCloseDelay = 2000;

export const toastError = (message, callback={onOpen : f=>f , onClose : f=>f}) => {
    return toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: autoCloseDelay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        ...callback,
    })
}

export const toastInfo = (message, callback={onOpen : f=>f , onClose : f=>f}) => {
    return toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: autoCloseDelay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        ...callback,
    })
} 

export const toastSuccess = (message, callback={onOpen : f=>f , onClose : f=>f}) => {
    return toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: autoCloseDelay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        ...callback,
    })
} 

export const toastWarning = (message, callback={onOpen : f=>f , onClose : f=>f}) => {
    return toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: autoCloseDelay,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        ...callback,
    })
} 