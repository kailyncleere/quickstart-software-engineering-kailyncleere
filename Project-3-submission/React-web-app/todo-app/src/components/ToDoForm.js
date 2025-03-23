import React, { useState, useEffect, useRef } from 'react';

// ToDoForm component for adding and updating tasks from the ToDoList component
function ToDoForm(props) {

    // Sets the input value to the value of the task being edited 
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    // Focuses on the input field when the page loads
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Updates the input value when the user types in the input field
    const HandleChange = e => {
        setInput(e.target.value);
    };

    // Submits the task to the ToDoList component
    const HandleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: props.edit ? props.edit.id : Math.floor(Math.random() * 10000),
            text: input
        });

        setInput(''); // Clear the input field after submission
    };

    // Returns the form for adding and updating tasks
    return (
        <form className="ToDo-Form" onSubmit={HandleSubmit}>
            <div className="ToDo-Input">
                <input
                    type="text"
                    placeholder={props.edit ? 'Update your item' : 'Add a task'}
                    value={input}
                    name='text'
                    className='ToDo-Input'
                    onChange={HandleChange}
                    ref={inputRef}
                />
                <button className='ToDo-Button'>{props.edit ? 'Update' : 'Add Task'}</button>
            </div>
        </form>
    );
}

export default ToDoForm;