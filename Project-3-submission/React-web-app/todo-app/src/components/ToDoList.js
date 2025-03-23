import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filter, setFilter] = useState('all');

    // Load tasks from local storage when the page loads
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
            console.log('Tasks loaded from local storage:', JSON.parse(storedTodos));
        }
        setIsLoaded(true);
    }, []);

    // Save tasks to local storage whenever the tasks are changed
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('todos', JSON.stringify(todos));
            console.log('Tasks saved to local storage:', todos);
        }
    }, [todos, isLoaded]);

    // Adds a new task to the list
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

    // Removes a task from the list
    const removeTodo = id => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        console.log('Task removed:', updatedTodos);
    };

    // Updates a tasks text
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        const updatedTodos = todos.map(item => (item.id === todoId ? newValue : item));
        setTodos(updatedTodos);
        console.log('Task updated:', updatedTodos);
    };

    // Filter tasks based on the current filter of all complete or incomplete
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') {
            return todo.isComplete;
        } else if (filter === 'uncompleted') {
            return !todo.isComplete;
        } else {
            return true;
        }
    });

    // Sort tasks to move completed tasks to the bottom in the "all" filter
    const sortedTodos = filteredTodos.sort((a, b) => {
        if (a.isComplete === b.isComplete) {
            return 0;
        }
        return a.isComplete ? 1 : -1;
    });

    // Actual display of the to-do list
    return (
        <div>
            <h1 className='TitleH1'>To-Do List <img src="/logo.png" alt="Logo" /></h1>
            <ToDoForm onSubmit={AddToDo} />
            <div>
                <button className="FilterBtn" onClick={() => setFilter('all')}>All</button>
                <button className="FilterBtn" onClick={() => setFilter('completed')}>Complete</button>
                <button className="FilterBtn" onClick={() => setFilter('uncompleted')}>Incomplete</button>
            </div>
            <ToDo todos={sortedTodos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    );
}

export default ToDoList;