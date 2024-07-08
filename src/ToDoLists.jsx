import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit , faSave } from "@fortawesome/free-solid-svg-icons";

const ToDoLists = (props)=>{
    return(
        <>
            <div className="todo_style">
                {props.isEditing ? (
                    <input
                        type="text"
                        value={props.editText}
                        onChange={props.onEditChange} />
                    ) : (
                    <li>{props.value}</li>
                )}

                {props.isEditing ? (
                    <FontAwesomeIcon
                        className="fa-save"
                        onClick={() => props.onSaveEdit(props.id)}
                        icon={faSave}
                    />
                    ) : (
                    <div edits>
                        <FontAwesomeIcon
                        className="fa-edit"
                        onClick={() => props.onEditStart(props.id, props.value)}
                        icon={faEdit} />
                        <FontAwesomeIcon
                        className="fa-times"
                        onClick={() => {
                            props.onSubmit(props.id);
                        }}
                        icon={faTrashCan} />
                    </div>
                )}
            </div>
        </>
    )
}

export default ToDoLists;