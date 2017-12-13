// -------------------------------------------------------------------------- //
// Rendering lists
// -------------------------------------------------------------------------- //

import React from "react";

export default class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('https://velvetmoustache.ca/products.json?limit=10')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response.products,
        });
      });
  }

  render() {
    const {products} = this.state;

    return (
      <ul className="products">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.images[0].src} />
              {product.title}
            </li>
          );
        })}
      </ul>
    );
  }
}
