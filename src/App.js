import React from "react";

import useLocalStorageTodos from "./components/useLocalStorageTodos";
import TodoList from "./components/todolist"

// Created an array of list names to easily manage three working lists.
const LIST_NAMES = [ 'Work', "Life", "Pleasure" ]

function App() {
  // Set LocalStorage to handle synchronization. State for todos is handled in useLocalStorage.
  const [todos, setTodos] = useLocalStorageTodos();

  return (
    <div className="App">
      <h1>Daily To-do's</h1>
      {/* Map over LIST_NAMES and pass in the name of the list and props from localStorage. */}
      <div className="wrapper">
        {LIST_NAMES.map((listName) => (
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
