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
        <label>
          <input type="checkbox" onChange={this.toggleShow} checked={showTimer} />
          Show Timer
        </label>
        {showTimer ? <Timer /> : null}
      </div>
    );
  }
}
