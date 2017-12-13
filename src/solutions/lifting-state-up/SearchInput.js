import React from "react";

export default class SearchInput extends React.Component {
  render() {
    const {onChange} = this.props;
    return (
      <input
        placeholder="Filter products by name..."
        className="bonus"
        onChange={onChange}
      />
    );
  }
}
