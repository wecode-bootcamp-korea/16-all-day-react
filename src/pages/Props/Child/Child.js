import React, { Component } from 'react';
import './Child.scss';

export class Child extends Component {
  render() {
    console.log('this.props >>> ', this.props);
    // {titleColor: "red", subTitleState: false}

    // JS ES6 구조 분해 할당
    const { titleColor, subTitleState, changeH3State } = this.props;
    return (
      <div className="child">
        {/* 데이터를 반영하는 요소 */}
        <h2 style={{ color: titleColor }}>Child title</h2>
        {/* <h3 style={{ display: this.props.subTitleState ? 'block' : 'none' }}>
          h3가 보일까요 안 보일까요?
        </h3> */}

        {/* 부모의 state 데이터를 반영하는 요소 */}
        <h3 className={subTitleState ? 'showSubTitle' : 'hideSubTitle'}>
          h3가 보일까요 안 보일까요?
        </h3>

        {/* 부모의 state를 바꿔주는 요소 */}
        <button onClick={changeH3State}>h3버튼</button>
      </div>
    );
  }
}

export default Child;
