import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">付费知识</h1>
        </header>
        <Question />
        <Answer>go to Reactjs.org!!!</Answer>
      </div>
    );
  }
}

export default App;
