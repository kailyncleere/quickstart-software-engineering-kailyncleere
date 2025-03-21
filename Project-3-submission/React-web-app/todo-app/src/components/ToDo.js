import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { CiCircleCheck } from 'react-icons/ci';
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';

function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    // Submits the updated task to the ToDoList component
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }

    // Returns the list of tasks with the ability to mark tasks as complete, edit tasks, and delete tasks
    return todos.map((todo) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <CiCircleCheck
                    onClick={() => completeTodo(todo.id)}
                    className='complete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
            </div>
        </div>
    ));
}

export default ToDo;