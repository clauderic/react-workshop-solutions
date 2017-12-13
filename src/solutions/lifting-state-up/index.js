import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";

export default class App extends React.Component {
  state = {
    filterString: '',
    products: [],
    shoppingBagProducts: [],
  };

  componentDidMount() {
    fetch('https://velvetmoustache.ca/products.json')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response.products,
        });
      });
  }

  handleFilter = (str) => {
    this.setState({
      filterString: str.target.value,
    });
  }

  handleProductClick = (product) => {
    const {shoppingBagProducts} = this.state;

    this.setState({
      shoppingBagProducts: [product, ...shoppingBagProducts],
    });
  }

  handleRemoveFromShoppingBag = (product) => {
    const {shoppingBagProducts} = this.state;
    this.setState({
      shoppingBagProducts:
        removeItemFromArray(shoppingBagProducts, shoppingBagProducts.indexOf(product)),
    });
  }

  render() {
    const {filterString, shoppingBagProducts, products} = this.state;
    const filteredProducts = filterProducts(products, filterString);

    return (
      <div>
        <h2>Shopping Bag</h2>
        <ProductList products={shoppingBagProducts} onClick={this.handleRemoveFromShoppingBag} />
        <hr />
        <h2>Products</h2>
        <SearchInput onChange={this.handleFilter} />
        <ProductList products={filteredProducts} onClick={this.handleProductClick} />
      </div>
    );
  }
}

function filterProducts(products, filterString) {
  return products.filter((product) => {
    return product.title.toLowerCase().indexOf(filterString) !== -1;
  });
}

function removeItemFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
