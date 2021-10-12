import React, { useContext } from 'react'
import TodoList from '../components/TodoList/TodoList'
import { TodoContext } from '../todocontext/TodoContext'

function CompletedTasks() {
    const { todos } = useContext(TodoContext);
    return <TodoList todos={todos.filter(todo => todo.completed)} />
}

export default CompletedTasks
