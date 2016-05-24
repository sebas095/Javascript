import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable products={this.props.store}/>
      </div>
    );
  }
}
