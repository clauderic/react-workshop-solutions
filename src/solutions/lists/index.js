// -------------------------------------------------------------------------- //
// Rendering lists
// -------------------------------------------------------------------------- //

import React from "react";
import {products} from "./products.js";

export default class App extends React.Component {
  render() {

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
