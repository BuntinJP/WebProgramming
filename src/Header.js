import React, { useState } from "react";
import Modal from "./Modal";
import "./myConponentsStyle.css";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const ShowModal = () => {
        setShowModal(true);
    };
    return (
        <>
            <h1>自分用地図サイト</h1>
            <button onClick={ShowModal}>Click Me !!!!</button>
            <Modal
                showFlag={showModal}
                setShowModal={setShowModal}
                content="contact me at discord:ぶんちん#2125"
            />
        </>
    );
};

export default Header;
