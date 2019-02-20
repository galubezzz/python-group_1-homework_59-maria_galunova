import React, {Component} from 'react';
import "./Task.css";

class Task extends Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.text!== this.props.text) {
            return true;
        }
        else {
            return false;
        }
    };

    render() {

        return(
        <div className='container'>
            <div className="text-left">
                <input type="text" className="form-control" id="taskInput" onChange={(event)=>{this.props.change(event, this.props.id)}} value={this.props.text}/>
                <span className="align-middle" onClick={() => {this.props.delete(this.props.id)}}>
                    <i className="far fa-trash-alt"></i></span>
            </div>
        </div>
    );
    };

};

export default Task;