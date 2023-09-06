import React from "react";

import useLocalStorageTodos from "./components/useLocalStorageTodos";
import TodoList from "./components/todolist"


const LIST_NAMES = [ 'Work', "Life", "Pleasure" ]

function App() {
  
  const [todos, setTodos] = useLocalStorageTodos();

  return (
    <div className="App">
      <h1>Daily To-do's</h1>
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
