import React from 'react';

export default class Task extends React.Component {
  onDeleteTaskClick = () => {
    this.props.deleteTask(this.props.id);
  }

  render() {
    return (
      <div className="task">
        <p>{this.props.text}</p>
        <button className="delete-task-button" onClick={this.onDeleteTaskClick}>Delete</button>
      </div>
    );
  }
}