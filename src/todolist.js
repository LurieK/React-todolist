import React from 'react'; 

function Todolist({setTodos, listName, todos }){

    const [todoText, setTodoText] = useState('');

    function handleSubmit(e)=> {
        e.preventDefault();
    
        const newTodo = {
          id: new Date().getTime(),
          text: todoText,
          completed: false,
        };
    
        setTodos((prevTodos) => ({
          ...prevTodos,
          [listName]: [...prevTodos[listName], newTodo],
        }));
    
        setText("");
      }
    

    return (

        <div className="work">
          <h3>Work To-Dos</h3>
          <form
            className="work"
            onSubmit={(e) => handleSubmit(e, "WorkToDo", worktodo, setWorkTodo)}
          >
            <input
              type="todoText"
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
        </div>
    )
}