import React, { Component } from 'react';
import './LoginAPI.scss';

class LoginAPI extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isBtnActive: false
    };
  }

  // 1) 사용자가 입력한 id, pw 데이터 저장 >>> state
  handleIdValue = event => {
    // 우리가 필요한 값 >>> 사용자가 입력한 값
    this.setState(
      {
        idValue: event.target.value
      },
      () => this.checkBtnState()
    );
  };

  handlePwValue = event => {
    // 우리가 필요한 값 >>> 사용자가 입력한 값
    this.setState(
      {
        pwValue: event.target.value
      },
      () => this.checkBtnState()
    );
  };

  // 2) id, pw 5글자 이상 되었을 경우 >>> 버튼 활성화
  checkBtnState = () => {
    const { idValue, pwValue } = this.state;
    const isActive = idValue.length >= 3 && pwValue.length >= 3;

    this.setState({
      isBtnActive: isActive
    });
  };

  // 3) 버튼 클릭 시 Login API 통신 >>> success인 경우 (회원의 id, pw 값이 일치하는 경우) >>> main 페이지로 이동

  render() {
    const { isBtnActive } = this.state;
    return (
      <div className="loginAPI">
        <h1>LoginAPI</h1>
        <input placeholder="id 입력" onChange={this.handleIdValue} />
        <br />
        <input placeholder="pw 입력" onChange={this.handlePwValue} />
        <br />
        <button
          className={
            isBtnActive ? 'loginBtn activeBtn' : 'loginBtn inactiveBtn'
          }
        >
          로그인 버튼
        </button>
      </div>
    );
  }
}

export default LoginAPI;
