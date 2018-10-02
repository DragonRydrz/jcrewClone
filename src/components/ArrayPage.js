import React, { Component } from 'react';
// import axios from 'axios';
import ProductTile from './ProductTile';

export default class ArrayPage extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    // this.setState({ gender: this.props.location.pathname.split('/')[2] });
    // const gender = this.props.location.pathname.split('/')[2];
    // axios
    //   .get(
    //     `https://www.jcrew.com/data/v1/US/enhance-category${
    //       this.props.location.pathname
    //     }`
    //   )
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => console.log(err));
    // console.log(this.props);
    const products = {};
    this.props.data.productList[0].products.forEach(item => {
      if (!products[item.productCode]) products[item.productCode] = [];
      products[item.productCode].push(item);
    });
    this.setState({ products: Object.values(products) });
  }
  render() {
    // console.log(this.state.products);
    return (
      <div className="productContainer">
        {this.state.products.map(item => (
          <ProductTile item={item} key={item[0].productId} />
        ))}
      </div>
    );
  }
}
