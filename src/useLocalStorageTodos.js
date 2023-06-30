import React, {useState, useEffect} from 'react';

function useLocalStorageTodos() {
    
const [todos, setTodos]=useState({});


useEffect(()=> {
    try {
        const savedTodos= localStorage.getItem('todos');
        setTodos(JSON.parse(savedTodos) || {});
    }catch (e){
        console.error('Failed to load todos from localSTorage', e); 
    }
}, []);

useEffect (()=> {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    }catch (e){
        console.error('Failed to save todos to localStorage', e);
    }
}, [todos]);

return [todos, setTodos];
}
export default useLocalStorageTodos;