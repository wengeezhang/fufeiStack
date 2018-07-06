import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      answers: []
    };
  }
  componentDidMount(){
    // fetch().then() 加载远端接口真实数据
    this.setState({answers: ["go to ReactJs.org!","learn from forum"]})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">付费知识</h1>
        </header>
        <Question />
        {this.state.answers.map(answer => <Answer>{answer}</Answer>)}
      </div>
    );
  }
}

export default App;
