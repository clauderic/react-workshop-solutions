import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";
import {products} from "./products.js";

export default class App extends React.Component {
  state = {
    filterString: '',
  };

  handleFilter = (str) => {
    this.setState({
      filterString: str.target.value,
    });
  }

  render() {
    const {filterString} = this.state;
    const filteredProducts = filterProducts(products, filterString);
    return (
      <div>
        <SearchInput onChange={this.handleFilter} />
        <ProductList products={filteredProducts} />
      </div>
    );
  }
}

function filterProducts(products, filterString) {
  return products.filter((product) => {
    return product.title.toLowerCase().indexOf(filterString) !== -1;
  });
}
