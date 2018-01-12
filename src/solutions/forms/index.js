// -------------------------------------------------------------------------- //
// Forms
// -------------------------------------------------------------------------- //

import React from "react";

export default class Form extends React.Component {
  state = {
    title: '',
    description: '',
    price: null,
    taxable: false,
  }

  handleChange = ({target: {checked, name, value}}) => {
    switch (name) {
      case 'description':
        value = value.substring(0, 100);
        break;
      case 'price':
        value = parseInt(value, 10);
        break;
      case 'taxable':
        value = checked;
        break;
    }

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(this.state));
  }

  renderStateToJSON() {
    return (
      <code>
        {JSON.stringify(this.state, null, 2)}
      </code>
    )
  }

  render() {
    const {title, description, price, taxable} = this.state;

    return (
      <div>
        {this.renderStateToJSON()}

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={title} placeholder="Title" onChange={this.handleChange} />
          <textarea name="description" placeholder="Description" value={description} onChange={this.handleChange} />
          <small className="bonus">Number of characters remaining: {100 - description.length}</small>
          <input type="number" name="price" placeholder="Price" min={0} value={price} onChange={this.handleChange} />
          <label>
            <input type="checkbox" name="taxable" checked={taxable} onChange={this.handleChange} />
            Taxable
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
