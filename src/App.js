import React from "react";
import {useState} from 'react'
import useLocalStorageTodos from "./components/useLocalStorageTodos";
import TodoList from "./components/todolist"

// Created an array of list names to easily manage three working lists.



function App() {
  const [listNames, setListNames]= useState([])
  const [newListName, setNewListName] = useState('')

  // Set LocalStorage to handle synchronization. State for todos is handled in useLocalStorage.
  const [todos, setTodos] = useLocalStorageTodos();


  //Take the new List name and add it to listNames useState
  function handleTitleSubmit(event){
    event.preventDefault();
    if (newListName.trim() && !listNames.includes(newListName)){
        setListNames(prevListNames =>{
        return[
        ...prevListNames,
        newListName.trim()
      ]
    })
    }
    setNewListName('')
  }

  function handleTitleChange(event){
  
      setNewListName(event.target.value)
  }

  return (
    <div className="App">
      <h1>Daily To-do's</h1>
      
      <form onSubmit={handleTitleSubmit}>
      <input
        className='list-name-input'
        placeholder='Enter Your List Name'
        type="text"
        onChange= {handleTitleChange}
        value= {newListName}
      >
      </input>
      <button type='submit'>Enter</button>
      </form>

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
