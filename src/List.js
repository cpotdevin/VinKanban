import React from 'react';
import Task from './Task';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: []};
  }
  
  onAddTaskClick = () => {
    const newTask = {text: prompt('New Task'), key: Date.now()};
    this.setState((prevState) => ({ tasks: prevState.tasks.concat(newTask) }));
  }

  deleteTask = (taskId) => {
    this.setState((prevState) => ({ tasks: prevState.tasks.filter(task => task.key !== taskId) }));
  }

  getNewTask = ({text, key}) => {
    return (
      <Task key={key} id={key} text={text} deleteTask={this.deleteTask} />
    );
  }

  render() {
    const listStyle = {
      gridColumn: this.props.line
    };

    const taskList = this.state.tasks.map(this.getNewTask);

    return (
      <div className="list" style={listStyle}>
        <div className="list-title">
          <h2>{this.props.title}</h2>
        </div>
        {taskList}
        <button className="add-task-button" onClick={this.onAddTaskClick}>Add</button>
      </div>
    );
  }
}