import React from "react";
import {useState} from 'react'
import useLocalStorage from "./components/useLocalStorage";
import NewList from "./components/newlist";
import TodoList from "./components/todolist"
import ListTitle from "./components/listtitle";

// Created an array of list names to easily manage three working lists.



function App() {

 

  // Set LocalStorage to handle synchronization. State for todos is handled in useLocalStorage.
  const { todos, setTodos, listNames, setListNames} = useLocalStorage();


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
          <div key={name}>
          <ListTitle  
            listName={name}
            setListNames={setListNames}
            />
          <TodoList
            key={name}
            todos={todos}
            setTodos={setTodos}
            listName={name}
    
            />
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
