import React from "react";
import {useState} from 'react'
import useLocalStorageTodos from "./components/useLocalStorageTodos";
import TodoList from "./components/todolist"

// Created an array of list names to easily manage three working lists.



function App() {
  const [listNames, setListName]= useState([''])
  // Set LocalStorage to handle synchronization. State for todos is handled in useLocalStorage.
  const [todos, setTodos] = useLocalStorageTodos();

  function handleChange(event){
    const {name, value}=event.target 
    setListName(prevListName =>{
      return{
        ...prevListName,
        name
      }
    })
  }

  return (
    <div className="App">
      <h1>Daily To-do's</h1>
      <input
        className='list-title'
        placeholder='Enter Your List Name'
        value={listNames}
        type="text"
        name="listName"
        onChange= {handleChange}
      ></input>
      {/* Map over LIST_NAMES and pass in the name of the list and props from localStorage. */}
      <div className="wrapper">
        {listNames.map((listName) => (
          <TodoList
            key={listName}
            todos={todos}
            setTodos={setTodos}
            listName={listName}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
