import React, { Component } from 'react';
import ZookProduct from './ZookProduct';
import './MockData.scss';

export class MockData extends Component {
  constructor() {
    super();
    this.state = {
      initData: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        console.log('res >>> ', res);
        this.setState({
          initData: res.data
        });
      });
  }

  render() {
    return (
      <div className="mockData">
        <h1>bornzook</h1>
        <div className="productContainer">
          {this.state.initData.map(product => {
            return (
              <ZookProduct
                key={product.id}
                title={product.productTitle}
                price={product.price}
                img={product.imgSrc}
                isNew={product.isNew}
                isBest={product.isBest}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default MockData;
