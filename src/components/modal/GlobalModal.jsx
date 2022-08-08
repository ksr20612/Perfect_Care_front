import React from "react";
import { useSelector } from "react-redux";

export const MODAL_TYPES = {
    AlertModal: "Alert",
    TimeoutModal: "Timeout",
    ToastModal : "ToastModal",
};

const MODAL_COMPONENTS = {
    [MODAL_TYPES.AlertModal]: null,
    [MODAL_TYPES.TimeoutModal]: null,
    [MODAL_TYPES.ToastModal]: null,
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
    return <>{renderComponent()}</>;
};

export default GlobalModal;
