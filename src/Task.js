import React from 'react';

export default class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <p>{this.props.text}</p>
      </div>
    );
  }
}