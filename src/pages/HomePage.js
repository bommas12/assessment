import React, { useContext } from 'react'
import CreateTodo from '../components/CreateTodo/CreateTodo'
import TodoList from '../components/TodoList/TodoList'
import { TodoContext } from '../todocontext/TodoContext'

function HomePage() {
    const {todos,onCreated,markCompleted,removeTodo}=useContext(TodoContext);
    return (
        <div>
             <CreateTodo onCreated={onCreated} />
             <TodoList todos={todos.filter(todo=>!todo.completed)} completeTodo={markCompleted} discardTodo={removeTodo} />
        </div>
    )
}

export default HomePage
