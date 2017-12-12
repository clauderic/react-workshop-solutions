// -------------------------------------------------------------------------- //
// Lifecycle methods
// -------------------------------------------------------------------------- //

import React from 'react';
import Timer from './Timer';

export default class App extends React.Component {
  state = { showTimer: false };

  toggleShow = () => {
    this.setState({
      showTimer: !this.state.showTimer
    });
  };

  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <label>Show Timer</label>
        <input type="checkbox" onChange={this.toggleShow} checked={showTimer} />
        {showTimer ? <Timer /> : null}
      </div>
    );
  }
}
