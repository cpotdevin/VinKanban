import React from 'react';

export default class Task extends React.Component {
  onDeleteTaskClick = () => {
    this.props.deleteTask(this.props.id);
  }

  onDragStart = (e, id, text) => {
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('text', text);
  }

  render() {
    return (
      <div className="task" draggable onDragStart={e => this.onDragStart(e, this.props.id, this.props.text)}>
        <p>{this.props.text}</p>
        <button className="delete-task-button" onClick={this.onDeleteTaskClick}>Delete</button>
      </div>
    );
  }
}