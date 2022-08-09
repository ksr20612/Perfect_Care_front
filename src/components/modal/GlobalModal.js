import { useEffect } from "react";
import { useSelector } from "react-redux";
import Download from "./Download";

export const MODAL_TYPES = {
    Download: "Download",
};

const MODAL_COMPONENTS = {
    [MODAL_TYPES.Download]: Download,
};

const GlobalModal = () => {
    const { show, type, props } = useSelector((state) => state.modal);

    const renderComponent = () => {
        if (!show) {
            return null;
        }
        const ModalComponent = MODAL_COMPONENTS[type];

        return <ModalComponent {...props} />;
    };
    useEffect(()=>{
        console.log({show, type, props});
    })


    return <>{renderComponent()}</>;
};

export default GlobalModal;
