import React, { Component } from 'react';

class Answer extends Component {
  constructor(props){
    super(props);
    this.state = {
      answerData: props.children
    };
  }

  render() {
    return (
      <div className="Answer">
        <p className="Answer-desc">
          答案：{this.state.answerData}
        </p>
      </div>
    );
  }
}

export default Answer;
