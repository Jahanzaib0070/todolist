import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDoLists = (props)=>{
    return(
        <>
            <div className="todo_style">
                <li>{props.value}</li>
                <FontAwesomeIcon 
                className="fa-times" 
                onClick={()=>{
                    props.onSubmit(props.id)
                }} 
                icon={faTrashCan} 
                />
            </div>
        </>
    )
}

export default ToDoLists;