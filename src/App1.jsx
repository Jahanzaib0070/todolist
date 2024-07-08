import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
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
                        <Tooltip title="Add">
                            <Button variant="contained" color="success" onClick={incNum}><AddIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button variant="contained" color="error" onClick={decNum}><RemoveIcon /></Button>
                        </Tooltip>
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

