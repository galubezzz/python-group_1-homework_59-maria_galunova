import React from 'react';
import "./Task.css";

function Task(props) {
    return(
        <div className='container'>
            <div className="text-left">
                <input className="align-middle" type="checkbox" onClick={() => {props.done(props.id)}}/>
                <span className="align-middle" style={props.style}> {props.text} </span>
                <span className="align-middle" onClick={() => {props.delete(props.id)}}>
                    <i className="far fa-trash-alt"></i></span>
            </div>
        </div>
    );
}

export default Task;