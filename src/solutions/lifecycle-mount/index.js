// -------------------------------------------------------------------------- //
// Lifecycle methods
// -------------------------------------------------------------------------- //

import React from "react";

const PRODUCTS_URL = 'https://www.chubbiesshorts.com/products.json';

export default class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          products: response.products
        });
      });
  }

  renderProducts() {
    const {products} = this.state;
    return (
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.title}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const {products} = this.state;
    return (
      <div>
        {products.length === 0
          ? "Loading products..."
          : this.renderProducts()
        }
      </div>
    );
  }
}
