import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      tasks: [],
      key: 1,
      editTaskInputValue: '',
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.updateEditTaskInput = this.updateEditTaskInput.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    })
  }

  addTask(taskText) {
    const task = [{
      text: taskText,
      key: this.state.key,
      isBeingEdited: false,
    }]
    this.setState({
      inputValue: '',
      tasks: this.state.tasks.concat(task),
      key: this.state.key + 1,
    })
  }

  removeTask(taskKey) {
    const tasks = this.state.tasks.filter(task => task.key !== taskKey);
    this.setState({
      tasks: tasks,
    })
  }

  editTask(taskKey) {
    const tasks = this.state.tasks.map(task => {
      if (task.key === taskKey) {
        if (task.isBeingEdited) {
          task.text = this.state.editTaskInputValue;
          task.isBeingEdited = false;
        } else {
          task.isBeingEdited = true;
        }     
      }
      return task;
    });
    this.setState({
      tasks: tasks,
    })
  }

  updateEditTaskInput(evt) {
    if (evt) {
      this.setState({
        editTaskInputValue: evt.target.value,
      });
    } else {
      this.setState({
        editTaskInputValue: '',
      })
    }
  }

  render() {
    return (
      <div>
        <h1 className = 'app-title'>Tasks.JS</h1>
        <input 
        className = 'new-task-input' 
        value = { this.state.inputValue } 
        onChange = { evt => this.updateInputValue(evt)}>
        </input>
        <button 
        className = 'new-task-button' 
        onClick = { () => this.addTask(this.state.inputValue)}>
        Add Task
        </button>
        <Overview 
        tasks = { this.state.tasks } 
        removeTask = {this.removeTask}
        editTask = {this.editTask}
        editTaskInputValue = {this.editTaskInputValue}
        updateEditTaskInput = {this.updateEditTaskInput}
        />
      </div>
    )
  }
}

export default App;
