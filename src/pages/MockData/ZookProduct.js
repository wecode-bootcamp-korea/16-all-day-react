import React, { Component } from 'react';

export class ZookProduct extends Component {
  render() {
    const { title, price, img, isNew, isBest } = this.props;
    return (
      <div className="product">
        <img alt={title} src={img} />
        <div>{title}</div>
        <div>{price}</div>
        {/* <div>{isNew ? 'NEW' : ''}</div> */}
        {/* <div>{isBest ? 'BEST' : ''}</div> */}
        {/* 조건부 렌더링 && 보여 지거나 안 보여지거나 */}
        {isNew && <div>NEW</div>}
        {isBest && <div>BEST</div>}
        <div>{isNew ? 'NEW' : 'BEST'}</div>
      </div>
    );
  }
}

export default ZookProduct;
