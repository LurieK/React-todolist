import React from "react";
import {useState} from 'react'
import useLocalStorageTodos from "./components/useLocalStorageTodos";
import TodoList from "./components/todolist"

// Created an array of list names to easily manage three working lists.



function App() {
  const [listNames, setListNames]= useState([''])

  console.log(listNames)
  // Set LocalStorage to handle synchronization. State for todos is handled in useLocalStorage.
  const [todos, setTodos] = useLocalStorageTodos();

  function handleTitleChange(event){
 
    const {name, value}=event.target 
    setListNames(prevListNames =>{
      return[
        ...prevListNames,
        value
      ]
    })
  }

  return (
    <div className="App">
      <h1>Daily To-do's</h1>
      <input
        className='list-title'
        placeholder='Enter Your List Name'
        type="text"
        
        onChange= {handleTitleChange}
      >
  
      </input>
      {/* Map over LIST_NAMES and pass in the name of the list and props from localStorage. */}
      <div className="wrapper">
        {listNames.map((name) => (
          <TodoList
            key={name}
            todos={todos}
            setTodos={setTodos}
            listName={name}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
