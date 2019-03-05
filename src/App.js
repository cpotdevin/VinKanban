import React from 'react';
import List from './List';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>vinKanban</h1>
        </div>
        <div className="lists">
          <List line={1} title="To Do" />
          <List line={2} title="Doing" />
          <List line={3} title="Done" />
        </div>
      </div>
    );
  }
}
