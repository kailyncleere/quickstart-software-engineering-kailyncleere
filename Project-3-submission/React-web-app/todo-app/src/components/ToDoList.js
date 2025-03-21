import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const AddToDo = todo => {
        const trimmedText = todo.text.trim();

        if (!trimmedText || /^\s*$/.test(trimmedText)) {
            return;
        }

        const newTodos = [{ ...todo, text: trimmedText }, ...todos];

        setTodos(newTodos);
        console.log('New task added:', newTodos);
    };

    // Marks a task as complete or incomplete
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
        console.log('Task completed:', updatedTodos);
    };

    // Actual display of the to-do list
    return (
        <div>
            <h1>To-Do List</h1>
            <ToDoForm onSubmit={AddToDo} />
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Complete</button>
                <button onClick={() => setFilter('uncompleted')}>Incomplete</button>
            </div>
            <ToDo todos={filteredTodos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    );
}

export default ToDoList;