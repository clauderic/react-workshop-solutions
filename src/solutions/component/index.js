// -------------------------------------------------------------------------- //
// Creating a component
// -------------------------------------------------------------------------- //

import React from 'react';

class Workshop extends React.Component {
  render() {
    const {attendeeCount} = this.props;

    return (
      <div>
        The workshop has {attendeeCount} attendees
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return <Workshop attendeeCount={20}/>
  }
}
