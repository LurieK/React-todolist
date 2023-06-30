import React, {useState, useEffect} from 'react';

function useLocalStorageTodos() {
    const [todos, setTodos]=useState({});
}

use useEffect(()=> {
    try {
        const savedTodos= localStorage.getItem('todos');
        setTodos(JSON.parse(savedTodos) || {});
    }catch (e){
        console.error('Failed to load todos from localSTorage', e); 
    }
}, []);

