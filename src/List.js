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

  getNewTask = ({text, key}) => {
    return (
      <Task key={key} text={text} />
    );
  }

  render() {
    const listStyle = {
      gridColumn: this.props.line
    };

    console.log(this.state.tasks);
    const taskList = this.state.tasks.map(this.getNewTask);
    console.log(taskList);

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