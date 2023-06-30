import React from "react";
import useLocalStorageTodos from "./useLocalStorageTodos";
import TodoList from "./todolist"
import { useState, useEffect } from "react";

const LIST_NAMES = ['WorkToDo', "LifeToDo", "JoyToDo"]
function App() {
  

  const [todos, setTodos] = useLocalStorageTodos();

  return (
    <div className="App">
      <h1>Daily To-do's</h1>
      <div className="wrapper">
        {LIST_NAMES.map((listName)=> (
          <TodoList
            key = {listName}
            todos={todos}
            setTodos ={setTodos}
            listName={listName}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
