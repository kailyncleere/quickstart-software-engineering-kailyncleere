import React, { useState, useEffect, useRef } from 'react';

    function ToDoForm(props) {
        const [input, setInput] = useState('');

        const HandleChange = e => {
            setInput(e.target.value);
        };

        const HandleSubmit = e => {
            e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };


        return (
            <form className="ToDo-Form" onSubmit={HandleSubmit}> 
                <input
                type="text"
                placeholder='Add a task'
                value={input}
                name='text'
                className='ToDo-Input'
                onChange={HandleChange}
                />

                <button className='ToDo-Button'>Add Task</button>
                
            </form>
        )
    }

export default ToDoForm