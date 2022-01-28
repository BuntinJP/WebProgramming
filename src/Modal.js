import React from "react";
import "./myConponentsStyle.css";
import "bulma/css/bulma.css";

const Modal = (props) => {
    const closeModal = () => {
        props.setShowModal(false);
    };
    if (props.showFlag) {
        return (
            <div>
                <p>{props.content}</p>
                <button onClick={closeModal}>Close me</button>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Modal;
