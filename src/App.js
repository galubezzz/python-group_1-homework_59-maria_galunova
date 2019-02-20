import React, { Component } from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm"
import Task from './Task/Task'

class App extends Component {
  state={
    tasks: [],
      currentTask: {text: ''}
  };

  componentDidMount() {
      const savedTasks = localStorage.getItem("savedTasks");
      if (savedTasks) {
          console.log(savedTasks);
          const tasks = JSON.parse(savedTasks);
          this.setState({tasks: tasks});
      }
  }


   addTask = (event) => {
       this.setState({currentTask: {text: event.target.value}});
   };

   editTask = (event, id) => {
       const tasks = [...this.state.tasks];
       tasks.forEach((task) =>{
           if (task.id === id){
               task.text = event.target.value;
           }
       })
       this.setState({tasks: tasks});
       localStorage.setItem('savedTasks', JSON.stringify(tasks));
   };

   addTaskToList = () => {
        const newTask = this.state.currentTask;
        const tasks = [...this.state.tasks];
        if (tasks.length > 0) {
            tasks.push({id: tasks[tasks.length-1].id+1, text: newTask.text, completed: false});
        } else
       {
           tasks.push({id: 0, text: newTask.text, completed: false})
       }
        this.setState({tasks});
        this.setState({currentTask: {text: ''}})
        localStorage.setItem('savedTasks', JSON.stringify(tasks));
   };

   removeTaskFromList = (taskId) => {
        const tasks = [...this.state.tasks];
        const newTasks = tasks.filter(task => task.id !== taskId);
        this.setState({tasks: newTasks});
        localStorage.setItem('savedTasks', JSON.stringify(newTasks));
   };


  render() {
      const tasks = (
            <div>
                {
                  this.state.tasks.map((task) => {
                      let style = {};
                      if (task.completed) {
                          style = {
                              textDecoration: 'line-through'
                          };
                      }
                    return <Task key={task.id}
                                 id={task.id}
                                 text={task.text}
                                 delete={this.removeTaskFromList}
                                 change={this.editTask}
                                 style={style}
                    />
                  }
                  )
                }
            </div>
          );
    return (
      <div className="App">
        <AddTaskForm functionOnChange={this.addTask}
                     functionOnClick={this.addTaskToList}
                     text={this.state.currentTask.text}/>
          {tasks}
      </div>
    );
  }

}

export default App;
