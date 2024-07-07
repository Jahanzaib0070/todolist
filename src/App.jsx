import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = ()=>{
  const[inputList, setInputList] = useState();
  
  const itemEvent = (event)=>{
    setInputList(event.target.value)
    
  }

  const [items , setItems] = useState([]);

  const itemSubmit = ()=>{
    setItems((prevArr)=>{
      return [...prevArr , inputList]
    })
    setInputList("")
  }

  const deleteItems = (id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElm, index)=>{
        return index !== id;
      })
    })
  }
  
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add the items" onChange={itemEvent} value={inputList}/>
          <button onClick={itemSubmit}> + </button>

          <ol className="list">
            {items.map((itemValue, index)=>{
              return <ToDoLists 
                key = {index}
                id = {index}
                value = {itemValue}
                onSubmit = {deleteItems}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;