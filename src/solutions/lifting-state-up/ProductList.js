import React from "react";
import PropTypes from "prop-types";

const images = PropTypes.shape({
  src: PropTypes.string,
});

const productProps = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  images: PropTypes.arrayOf(images),
})

export default class ProductList extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(productProps),
  };

  render() {
    const { products, onClick } = this.props;

    return (
      <ul className="products products--selectable">
        {products.map((product, index) => {
          return <Product key={index} onClick={onClick} product={product} />
        })}
      </ul>
    );
  }
}

class Product extends React.Component {
  static propTypes = {
    product: productProps,
  };

  handleClick = () => {
    const {onClick, product} = this.props
    onClick(product);
  }

  render() {
    const { product } = this.props;

    return (
      <li key={product.id} onClick={this.handleClick}>
        <img src={product.images[0].src.replace('.jpg', '_small.jpg')} />
        {product.title}
      </li>
    );
  }
}
