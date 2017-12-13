import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";
import ProductList from "./ProductList";

export default class App extends React.Component {
  state = {
    filterString: '',
    products: [],
  };

  componentDidMount() {
    fetch('https://www.kyliecosmetics.com/products.json')
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
