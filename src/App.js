import React from "react";
import {useState} from 'react'
import useLocalStorageTodos from "./components/useLocalStorageTodos";
import NewList from "./components/newlist";
import TodoList from "./components/todolist"

// Created an array of list names to easily manage three working lists.



function App() {
  const [listNames, setListNames]= useState([])
 

  // Set LocalStorage to handle synchronization. State for todos is handled in useLocalStorage.
  const [todos, setTodos] = useLocalStorageTodos();


  //Take the new List name and add it to listNames useState
  const addNewListName=(name)=>{
   
    if (name && !listNames.includes(name)){
        setListNames(prevListNames =>{
        return[
        ...prevListNames,
        name
      ]
    })
    }
  }


  return (
    <div className="App">
      <h1>Daily To-do's</h1>
      <NewList addNewListName={addNewListName} />
      {/* Map over LIST_NAMES and pass in the name of the list and props from localStorage. */}
      <div className="wrapper">
        {listNames.map((name) => (
          <TodoList
            key={name}
            todos={todos}
            setTodos={setTodos}
            listName={name}
            setListNames={setListNames}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
