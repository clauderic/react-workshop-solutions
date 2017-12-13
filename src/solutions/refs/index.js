// -------------------------------------------------------------------------- //
// Using Refs
// -------------------------------------------------------------------------- //

import React from "react";

export default class Solution extends React.Component {
  registerRef = (node) => {
    this.input = node;
  }

  handleClick = () => {
    this.input.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.registerRef} />
        <button onClick={this.handleClick}>Focus input</button>
      </div>
    );
  }
}
