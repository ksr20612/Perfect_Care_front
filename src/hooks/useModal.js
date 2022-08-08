import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal, hideModal } from "../features/modalSlice";

const useModal = () => {
    const dispatch = useDispatch();

    const showModal = ({ modalType, modalProps }) => {
        dispatch(setModal({ modalType, modalProps }));
    };

    const closeModal = () => {
        dispatch(hideModal());
    };

    return [ showModal, closeModal ];
};

export default useModal;
