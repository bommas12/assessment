import React, { useState } from 'react'
import Utils from '../../utils/Utils';

function CreateTodo({onCreated}) {
    const [tododesc,setTodoDesc]=useState('');
    const changeTodo=(e)=>{
        setTodoDesc(e.target.value)
    }
    const createTodo=(e)=>{
        e.preventDefault();
        const todoItem={
            desc:tododesc,
            completed: false,
            uuid: Utils.generateId()
        }
        setTodoDesc('');
        onCreated(todoItem);
    }
    return (
        <form onSubmit={createTodo}>
            <input value={tododesc} onChange={changeTodo}/>
            <button type="submit">Create Todo</button>
        </form>
    )
}

export default CreateTodo;
