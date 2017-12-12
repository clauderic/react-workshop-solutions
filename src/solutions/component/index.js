// -------------------------------------------------------------------------- //
// Creating a component
// -------------------------------------------------------------------------- //

import React from 'react';

class LeWorkshop extends React.Component {
  render() {
    const {nbAttendees} = this.props;

    return (
      <div>
        LeWorkshop has {nbAttendees} attendees
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return <LeWorkshop nbAttendees={20}/>
  }
}
