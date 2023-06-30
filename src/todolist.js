import React from 'react'; 

function TodoList({setTodos, listName, todos }){

    const [todoText, setTodoText] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        const newTodo = {
          id: new Date().getTime(),
          text: todoText,
          completed: false,
        };
    
        setTodos((prevTodos) => ({
          ...prevTodos,
          [listName]: [...(prevTodos[listName] || []), newTodo],
        }));
    
        setText("");
      }

      const clearToDo= (listName)=> {
        setTodos((prevTodos) => 
        ({ ...prevTodos, 
            [listName]: [] 
        }));
      }

      const toggleComplete= (id)=> {
        let updatedTodos = (todos[listName] || []).map((todo) => {
          return todo.id === id ? {... todo, completed: !todo.completed} : todo;
    
        });
    
        setTodos((prevTodos) => ({
          ...prevTodos,
          [listName]: updatedTodos,
        }));
      }

    return (

        <div >
          <h3>{listName}</h3>
          <form
            className={listName}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              onChange={(e) => setTodo(e.target.value)}
    
            />
            <button type="submit">Enter</button>
          </form>
          <h4></h4>

          <div className="workItems">
            {todos.WorkToDo.map((Item) => (
              <div key={Item.id} >
                <input
                  type="checkbox"
                  id="completed"
                  checked={Item.completed}
                  onChange={() => toggleComplete(Item.id)}
                />
                <div className={Item.completed ? "completed" : "text"}>
                  {Item.text}
                </div>
              </div>
            ))}
          </div>

          <button className="clear" onClick={() => clearToDo()}>
            Clear!
          </button>
        </div>
    )
}

export default TodoList;
