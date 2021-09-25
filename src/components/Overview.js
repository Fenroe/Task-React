// renders tasks 
import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.renderTasks = this.renderTasks.bind(this);
  }

  renderTasks() {
    const renderedTasks = this.props.tasks.map((task) => {
      if (task.isBeingEdited) {
        return (
          <li key = {task.key}>
            <input 
            value = {this.props.editTaskInputValue} 
            onChange = {evt => this.props.updateEditTaskInput(evt)}>
            </input>
            <button onClick = {() => this.props.editTask(task.key)}>Update</button>
          </li>
        )
      }
      return (
        <li key = {task.key}>
          <span>{task.key}: {task.text}</span>
          <span onClick = {() => this.props.removeTask(task.key)}>Remove</span>
          <span onClick = {() => this.props.editTask(task.key)}>Edit</span>
        </li>
      );
    });

    return renderedTasks;
  }

  render() {
    return (
      <ul>
        {this.renderTasks()}
      </ul>
    )
  }
}

export default Overview;