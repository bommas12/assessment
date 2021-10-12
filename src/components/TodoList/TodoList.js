import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, completeTodo, discardTodo }) {

    return (
        <ul className="todo-list">
            {todos.map(({ completed, desc, uuid }) => <TodoItem
                desc={desc}
                completed={completed}
                uuid={uuid}
                key={uuid}
                onCompleted={completeTodo}
                onDiscarded={discardTodo} />
            )}
        </ul>
    )
}

export default TodoList
