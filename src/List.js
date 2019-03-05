import React from 'react';

export default class List extends React.Component {
  render() {
    const listStyle = {
      gridColumn: this.props.line
    };

    return (
      <div className="list" style={listStyle}>
        <div className="list-title">
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}