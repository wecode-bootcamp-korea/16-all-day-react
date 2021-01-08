import React, { Component } from 'react';
import Child from './Child/Child';

export class Props extends Component {
  constructor() {
    super();
    this.state = {
      childTitleColor: 'red',
      isH3Hidden: true
    };
  }

  handleH3State = () => {
    this.setState({
      isH3Hidden: !this.state.isH3Hidden
    });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child
          titleColor={this.state.childTitleColor}
          subTitleState={this.state.isH3Hidden}
          changeH3State={this.handleH3State}
        />
      </div>
    );
  }
}

export default Props;
