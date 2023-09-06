import { useState, useEffect } from 'react';

function useLocalStorageTodos() {
    
    // Take items in local storage and save them in state. If there is 
    // nothing in local storage, savedTodos is saved as an empty object.
    // *Note* Because the app handles multiple lists, todos must be an object of lists.
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '{}');
    const [todos, setTodos] = useState(savedTodos);

    useEffect(() => {
        try {
        localStorage.setItem('todos', JSON.stringify(todos));
        } catch (e) {
        console.error('Failed to save todos to localStorage', e);
        }
    }, [todos]);

    return [todos, setTodos];
}
export default useLocalStorageTodos;
