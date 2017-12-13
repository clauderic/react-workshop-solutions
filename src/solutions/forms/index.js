// -------------------------------------------------------------------------- //
// Forms
// -------------------------------------------------------------------------- //

import React from "react";

export default class Solution extends React.Component {
  state = {
    company: 'Shopify',
    name: '',
    message: '',
  }

  handleChange = (key) => (event) => {
    let value = event.target.value;

    if (key === 'message') {
      value = value.substring(0, 100);
    }

    this.setState({
      [key]: value,
    });
  }

  handleNameChange = this.handleChange('name');
  handleMessageChange = this.handleChange('message');

  render() {
    const {name, message} = this.state;

    return (
      <div>
        <pre>
          {JSON.stringify(this.state)}
        </pre>
        <input type="text" name="company" value="Shopify" />
        <input type="text" name="name" value={name} placeholder="Name" onChange={this.handleNameChange} />
        <textarea placeholder="message" value={message} onChange={this.handleMessageChange} />
        <small>Number of characters remaining: {100 - message.length}</small>
      </div>
    );
  }
}
