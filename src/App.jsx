import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = ()=>{
  const[inputList, setInputList] = useState();
  const [items , setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");
  
  const itemEvent = (event)=>{
    setInputList(event.target.value)
    
  }

  const itemSubmit = ()=>{
    if (inputList.trim() !== "" ){
      setItems((prevArr)=>{
        return [...prevArr , inputList]
      })
      setInputList("")
    }
    
  }

  const deleteItems = (id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElm, index)=>{
        return index !== id;
      })
    })
  }

  const startEditing = (id, currentValue) => {
    setIsEditing(id);
    setEditText(currentValue);
  };

  const saveEdit = (id) => {
    setItems((oldItems) =>
      oldItems.map((item, index) => (index === id ? editText : item))
    );
    setIsEditing(null);
    setEditText("");
  };
  
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add the items" onChange={itemEvent} value={inputList}/>
          <button onClick={itemSubmit}> + </button>
          <div className="container">
            <ul className="list">
              {items.map((itemValue, index)=>{
                return <ToDoLists 
                  key={index}
                  id={index}
                  value={itemValue}
                  onSubmit={deleteItems}
                  isEditing={isEditing === index}
                  editText={editText}
                  onEditChange={(e) => setEditText(e.target.value)}
                  onEditStart={startEditing}
                  onSaveEdit={saveEdit}
                />
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;