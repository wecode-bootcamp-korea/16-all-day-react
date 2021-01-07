import React, { Component } from 'react';
import './State.scss';

class State extends Component {
  constructor() {
    super();
    this.state = {
      textColor: 'skyblue',
      trueFalseColor: true,
      isHidden: false
    };
  }

  // state 객체의 textColor 변경 >>>> state 바꾸는 함수 >>> setState
  handleTextColor = () => {
    this.setState({
      textColor: 'orange'
    });
  };

  // state 객체의 trueFalseColor 변경 >>> state 바꾸는 함수 >>> setState
  handleToggleClick = () => {
    // 1) 첫 번째 방법
    // if (this.state.trueFalseColor === true) {
    //   this.setState({
    //     trueFalseColor: false
    //   });
    // } else if (this.state.trueFalseColor === false) {
    //   this.setState({
    //     trueFalseColor: true
    //   });
    // }

    // 2) 두 번째 방법 - boolean 데이터의 활용 #1
    // if (this.state.trueFalseColor) {
    //   this.setState({
    //     trueFalseColor: false
    //   });
    // } else if (!this.state.trueFalseColor) {
    //   this.setState({
    //     trueFalseColor: true
    //   });
    // }

    // 3) 최종 방법 - boolean 데이터의 활용 #2
    this.setState({
      trueFalseColor: !this.state.trueFalseColor
    });
  };

  handleHiddenState = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    return (
      <div className="state">
        <h1>State</h1>

        {/* 1) state 데이터를 반영하는 요소 */}
        <p style={{ color: this.state.textColor }}>
          이 문장의 색을 바꿔봅시다.
        </p>

        {/* 2) state 데이터를 변경하는 요소 >> click 되면 state 상태 변경 */}
        <button onClick={this.handleTextColor}>색 변경하기</button>

        <br />

        {/* 1) state 데이터를 반영하는 요소 */}
        {/* cf. 삼항 연산자 (toggle 기능) */}
        {/* cf. inline style (BAD) */}
        {/* <p style={{ color: this.state.trueFalseColor ? 'purple' : 'red' }}>
          True or False
        </p> */}

        {/* cf. className 동적으로 변경 */}
        <p className={this.state.trueFalseColor ? 'active' : 'inactive'}>
          True or False
        </p>

        {/* 2) state 데이터를 변경하는 요소 >> click 되면 state 상태 변경 */}
        <button onClick={this.handleToggleClick}>두 번째 버튼 </button>

        {/* state 상태에 따라서 다른 요소 나타내기 */}
        {this.state.isHidden ? (
          <p>지금은 state 값이 true 입니다.</p>
        ) : (
          <p>지금은 state 값이 false 입니다.</p>
        )}
        {/* {this.state.isCartEmpty ? <EmptyCart /> : <FilledCart />} */}
        <button onClick={this.handleHiddenState}>세 번째 버튼</button>
      </div>
    );
  }
}

export default State;
