import React, {useState} from 'react'; 

function TodoList({ setTodos, listName, todos }){

    const [todoText, setTodoText] = useState('');

    // handleSubmit takes the text entered into the state in the JSX below and trims it in case
    // users add extra spaces. It then creates a new object, newTodo, which gets set to the todos state.
  
    // *Note* Most of the code is set to check for arrays. This is because localState is an object of arrays.
    // In the instances where the code is checking arrays, it is addressing a specific list name.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todoText.trim()) {
            return;
          }
        const newTodo = {
          id: new Date().getTime(),// basing the id on date avoids repeat ids since users cannot create two items at the same time
          text: todoText,
          completed: false,
        };
        
      // setTodos checks if there are any items in the specific list text was added to, based on the list's name.
      // It needs to check an empty array, because it is checking against state in localStorage.
        setTodos((prevTodos) => ({
          ...prevTodos,
          [listName]: [...(prevTodos[listName] || []), newTodo],
        }));
    
        setTodoText('')
      };
    
    //Takes in the listName assciated with the clicked clear button, and returns an empty array.
    const clearToDos = (listName) => {
      setTodos((prevTodos) => ({ 
        ...prevTodos, 
        [listName]: [] 
      }));
      }
    
    //When a item is checked off it is toggled to complete.  This function then maps through todos to check
    //for the item that shares the same id as the item checked. and the updated items are set to todos and localStorage
    const toggleComplete = (id) => {
      let updatedTodos = (todos[listName] || []).map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    
      setTodos((prevTodos) => ({
          ...prevTodos,
          [listName]: updatedTodos,
      }));
    }

    return (

      <div className='list-container'>
        <h3>{listName}</h3>
        <form
          className={listName}
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="New Item"
            value={todoText}
          />
          <button type="submit">Enter</button>
        </form>
          
        <h4> My {listName} Items:</h4>
        <div className={`${listName}Items`}>
        
        {(todos[listName] ||[]).map((item) => (
          <div key={item.id} className="list" >
            <input
              type="checkbox"
              id="completed"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <div className={item.completed ? "completed" : `${listName}-text`}>
              {item.text}
            </div>
          </div>
            ))}
        </div>

        <button className="clear" onClick={() => clearToDos(listName)}>
          Clear!
        </button>
      </div>
    )
}

export default TodoList;
