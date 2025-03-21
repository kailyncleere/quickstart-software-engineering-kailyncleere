import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const AddToDo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }
    console.log(...todos);

    return (
        <div>
            <h1>To-Do List</h1>
            <ToDoForm  />
        </div>
    )
}
export default ToDoList