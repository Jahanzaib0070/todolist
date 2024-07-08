import React, { useState } from "react";

const App1 = () => {
    const [count, setCount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const incNum = () => {
        setCount(count + 1);
    }

    const decNum = () => {
        count >= 1 ? setCount(count - 1) : setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{count}</h1>
                    <div className="buttons">
                        <button onClick={incNum}>Increment</button>
                        <button onClick={decNum}>Decrement</button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal_content">
                        <p>Zero limit reached</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App1;

