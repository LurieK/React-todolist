import { useState, useEffect } from 'react';

function useLocalStorageTodos() {
    
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