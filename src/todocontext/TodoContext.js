import React, { useCallback, useEffect, useState } from 'react';
import Utils from '../utils/Utils';

export const TodoContext = React.createContext();

function TodoProvider(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todosFromStore = Utils.retrieve()
        console.log(todosFromStore)
        if (todosFromStore) {
            setTodos(todosFromStore);
        }
    }, []);

    const markCompleted = useCallback((uuid) => {
        console.log(uuid);
        const markedTodos = todos.map(todo => todo.uuid === uuid ? {
            ...todo,
            completed: true
        } : todo);
        console.log(markedTodos);
        setTodos(markedTodos);
    });

    const removeTodo = useCallback((uuid) => {
        console.log(uuid);
        const filteredTodos = todos.filter(todo => todo.uuid !== uuid);
        console.log(filteredTodos);
        setTodos(filteredTodos);
    });

    useEffect(() => {
        if (todos.length) {
            Utils.store(todos);
        }
    }, [todos])

    const onCreated = (todoItem) => {
        setTodos(prev => [...prev, todoItem]);
    }
    return (
        <TodoContext.Provider value={{ todos, onCreated, removeTodo,markCompleted }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
