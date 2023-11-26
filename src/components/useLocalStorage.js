import { useState, useEffect } from 'react';

function useLocalStorageTodos() {
    
    // Take items in local storage and save them in state. If there is 
    // nothing in local storage, savedTodos/listNames is saved as an empty object/array.
    // *Note* Because the app handles multiple lists, todos must be an object of lists.
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '{}');
    const [todos, setTodos] = useState(savedTodos);

    const savedListNames = JSON.parse(localStorage.getItem('listNames') || '[]');
    const [listNames, setListNames] = useState(savedListNames);

    useEffect(() => {
        try {
        localStorage.setItem('todos', JSON.stringify(todos));
        } catch (e) {
        console.error('Failed to save todos to localStorage', e);
        }
    }, [todos]);

    useEffect(() => {
    try {
      localStorage.setItem('listNames', JSON.stringify(listNames));
    } catch (e) {
      console.error('Failed to save list names to localStorage', e);
    }
  }, [listNames]);

    return { todos, setTodos, listNames, setListNames };
} 
export default useLocalStorageTodos;
