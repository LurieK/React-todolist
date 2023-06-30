import React from "react";
import useLocalStorageTodos from "./useLocalStorageTodos";
import Todolist from "./todolist"
import { useState, useEffect } from "react";

const LIST_NAMES = ['WorkToDo', "LifeToDo", "JoyToDo"]
function App() {
  // const initialTodos = () => {
  //   const savedLists = localStorage.getItem("todos");
  //   const loadedLists = JSON.parse(savedLists);
  //   if (loadedLists) {
  //     return loadedLists;
  //   }
  //   return {
  //     WorkToDo: [],
  //     LifeToDo: [],
  //     JoyToDo: [],
  //   };
  // };

  const [todos, setTodos] = useLocalStorageTodos();

  // useEffect(() => {
  //   const listsToSave = { ...todos };
  //   const lists = JSON.stringify(listsToSave);
  //   localStorage.setItem("todos", lists);
  // }, [todos]);

  // const [worktodo, setWorkTodo] = useState("");
  // const [lifetodo, setLifeTodo] = useState("");
  // const [joytodo, setJoyTodo] = useState("");

  // function handleSubmit(e, listName, text, setText) {
  //   e.preventDefault();

  //   const newTodo = {
  //     id: new Date().getTime(),
  //     text: text,
  //     completed: false,
  //   };

  //   setTodos((prevTodos) => ({
  //     ...prevTodos,
  //     [listName]: [...prevTodos[listName], newTodo],
  //   }));

  //   setText("");
  // }

  // function clearToDo(listName) {
  //   setTodos((prevTodos) => ({ ...prevTodos, [listName]: [] }));
  // }

  // function toggleComplete(id, listName) {
  //   let updatedTodos = todos[listName].map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     }
  //     return todo;
  //   });

  //   setTodos((prevTodos) => ({
  //     ...prevTodos,
  //     [listName]: updatedTodos,
  //   }));
  // }

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
