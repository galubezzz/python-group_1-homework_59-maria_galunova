import React from 'react';
import './AddTaskForm.css';

function AddTaskForm(props) {
    return (
        <div className='container'>
                <div className="form-group">
                    <label htmlFor="taskInput">Task</label>
                    <input type="text" className="form-control" id="taskInput" placeholder="Do something" onChange={props.functionOnChange} value={props.text}/>
                    <small id="emailHelp" className="form-text text-muted">Start with writing down your task.</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={props.functionOnClick}>Add</button>
        </div>
    );
}

export default AddTaskForm;