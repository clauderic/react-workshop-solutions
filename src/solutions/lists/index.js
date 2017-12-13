// -------------------------------------------------------------------------- //
// Rendering lists
// -------------------------------------------------------------------------- //

import React from "react";
import {products} from "./products.js";

export default class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('https://www.kyliecosmetics.com/products.json')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.products)
        this.setState({
          products: response.products,
        });
      });
  }

  render() {
    const {products} = this.state;

    return (
      <ul>
        {products.map((product) => {
          return (
            <li>
              {product.title}
            </li>
          );
        })}
      </ul>
    );
  }
}
