import React from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends React.Component {
  state = {
    clickCount: 0,
  };

  incrementCount = () => {
    const {clickCount} = this.state;

    this.setState({
      clickCount: clickCount + 1,
    });
  };

  resetCount = () => {
    this.setState({
      clickCount: 0,
    });
  };

  render() {
    const {clickCount} = this.state;

    return (
      <div>
        <h1>Clicked: {clickCount} times</h1>
        {clickCount >= 10
          ? <p>You clicked the button more than 10 times 🎉</p>
          : null
        }
        <button onClick={this.incrementCount}>+1</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}
