// -------------------------------------------------------------------------- //
// Rendering lists
// -------------------------------------------------------------------------- //

import React from "react";

function Title({children}) {
  return (<h1>{children}</h1>);
}

export default class ProductList extends React.Component {
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
      <div>
        <Title>List of products</Title>
        <ul className="products">
          {products.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.images[0].src.replace('.jpg', '_small.jpg')} />
                {product.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
