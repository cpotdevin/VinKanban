import React from 'react';

export default class Task extends React.Component {
  onDeleteTaskClick = () => {
    this.props.deleteTask(this.props.id);
  }

  onDragStart = (e, id, title, text) => {
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('title', title);
    e.dataTransfer.setData('text', text);
  }

  render() {
    return (
      <div className="task" draggable onDragStart={e => this.onDragStart(e, this.props.id, this.props.title, this.props.text)}>
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
        <button className="delete-task-button" onClick={this.onDeleteTaskClick}>Delete</button>
      </div>
    );
  }
}