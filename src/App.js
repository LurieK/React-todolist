import React from "react";
import useLocalStorageTodos from "./useLocalStorageTodos";
import { useState, useEffect } from "react";

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

  function handleSubmit(e, listName, text, setText) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => ({
      ...prevTodos,
      [listName]: [...prevTodos[listName], newTodo],
    }));

    setText("");
  }

  function clearToDo(listName) {
    setTodos((prevTodos) => ({ ...prevTodos, [listName]: [] }));
  }

  function toggleComplete(id, listName) {
    let updatedTodos = todos[listName].map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos((prevTodos) => ({
      ...prevTodos,
      [listName]: updatedTodos,
    }));
  }

  return (
    <div className="App">
      <h1>Daily To-do's</h1>
      <div className="wrapper">
        {/* <div className="work">
          <h3>Work To-Dos</h3>
          <form
            className="work"
            onSubmit={(e) => handleSubmit(e, "WorkToDo", worktodo, setWorkTodo)}
          >
            <input
              type="text"
              onChange={(e) => setWorkTodo(e.target.value)}
              value={worktodo}
            />
            <button type="submit">Enter</button>
          </form>
          <h4>My Work Items:</h4>

          <div className="workItems">
            {todos.WorkToDo.map((workItem) => (
              <div key={workItem.id} className="list">
                <input
                  type="checkbox"
                  id="completed"
                  checked={workItem.completed}
                  onChange={() => toggleComplete(workItem.id, "WorkToDo")}
                />
                <div className={workItem.completed ? "completed" : "work-text"}>
                  {workItem.text}
                </div>
              </div>
            ))}
          </div>

          <button className="clear" onClick={() => clearToDo("WorkToDo")}>
            Clear!
          </button>
        </div> */}

        <div className="life">
          <h3>Self Care To-Dos</h3>
          <form
            className="life"
            onSubmit={(e) => handleSubmit(e, "LifeToDo", lifetodo, setLifeTodo)}
          >
            <input
              type="text"
              onChange={(e) => setLifeTodo(e.target.value)}
              value={lifetodo}
            />
            <button type="submit">Enter</button>
          </form>
          <h4>My Self-Care Items:</h4>

          <div className="lifeItems">
            {todos.LifeToDo.map((lifeItem) => (
              <div key={lifeItem.id} className="list">
                <input
                  type="checkbox"
                  id="completed"
                  checked={lifeItem.completed}
                  onChange={() => toggleComplete(lifeItem.id, "LifeToDo")}
                />
                <div className={lifeItem.completed ? "completed" : "work-text"}>
                  {lifeItem.text}
                </div>
              </div>
            ))}
          </div>

          <button className="clear" onClick={() => clearToDo("LifeToDo")}>
            Clear!
          </button>
        </div>

        <div className="joy">
          <h3>Pleasure To-Dos</h3>
          <form
            className="joy"
            onSubmit={(e) => handleSubmit(e, "JoyToDo", joytodo, setJoyTodo)}
          >
            <input
              type="text"
              onChange={(e) => setJoyTodo(e.target.value)}
              value={joytodo}
            />
            <button type="submit">Enter</button>
          </form>
          <h4>My Pleasure Items:</h4>

          <div className="joyItems">
            {todos.JoyToDo.map((joyItem) => (
              <div key={joyItem.id} className="list">
                <input
                  type="checkbox"
                  id="completed"
                  checked={joyItem.completed}
                  onChange={() => toggleComplete(joyItem.id, "JoyToDo")}
                />
                <div className={joyItem.completed ? "completed" : "work-text"}>
                  {joyItem.text}
                </div>
              </div>
            ))}
          </div>

          <button className="clear" onClick={() => clearToDo("JoyToDo")}>
            Clear!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
