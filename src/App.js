import React from 'react';
import List from './List';
import './App.css';

export default class App extends React.Component {
  deleteTaskGlobally = (id) => {
    this.refs.toDoList.deleteTask(id);
    this.refs.doingList.deleteTask(id);
    this.refs.doneList.deleteTask(id);
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>vinKanban</h1>
        </div>
        <div className="lists">
          <List ref="toDoList" line={1} title="To Do" deleteTaskGlobally={this.deleteTaskGlobally} />
          <List ref="doingList" line={2} title="Doing" deleteTaskGlobally={this.deleteTaskGlobally} />
          <List ref="doneList" line={3} title="Done" deleteTaskGlobally={this.deleteTaskGlobally} />
        </div>
      </div>
    );
  }
}
