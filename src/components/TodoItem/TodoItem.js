import React from 'react'
import './TodoItem.css'

function TodoItem({ desc, completed, uuid, onCompleted, onDiscarded }) {
    const completeTodo=()=>{
        onCompleted(uuid)
    }
    const discardTodo=()=>{
        onDiscarded(uuid);
    }
    return (
        <li className={`todo-item ${completed?'completed':'pending'}`}>
            <p>{desc}</p>
            {
                !completed &&
                <div className="btn-section">
                    <button onClick={completeTodo}>complete</button>
                    <button onClick={discardTodo}>discard</button>
                </div>
            }
           
        </li>
    )
}

export default TodoItem;
