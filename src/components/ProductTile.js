import React, { Component } from 'react';

export default class ProductTile extends Component {
  state = {
    img: '',
    altImg: '',
  };

  componentDidMount() {
    let {
      productCode,
      defaultColorCode,
      shotType,
      productDescription,
      url,
    } = this.props.item[0];
    shotType = shotType ? shotType.split(',') : null;
    let img = `https://www.jcrew.com/s7-img-facade/${productCode}_${defaultColorCode}${
      shotType ? shotType[0] : ''
    }`;
    let altImg = `https://www.jcrew.com/s7-img-facade/${productCode}_${defaultColorCode}${
      shotType && shotType[1] ? shotType[1] : ''
    }`;
    this.setState({
      productCode,
      productDescription,
      defaultColorCode,
      shotType,
      url,
      img,
      altImg,
    });
  }

  render() {
    return (
      <a href={`https://www.jcrew.com${this.state.url}`}>
        <div className="productTile">
          {/* {this.props.item.productName} */}
          <div className="product-description">
            {this.state.productDescription}
          </div>
          <img
            src={this.state.img}
            alt={this.state.productDescription}
            className="product-img"
          />
        </div>
      </a>
    );
  }
}
