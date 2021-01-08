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
  handleLogin = () => {
    const { idValue, pwValue } = this.state;
    // 3-1) API 통신 >>> fetch 함수
    fetch('API 주소', {
      method: 'POST',
      // method: 'GET'
      body: JSON.stringify({
        id: idValue,
        pw: pwValue
      })
    })
      // 3-2) Backend response 처리
      .then(response => response.json())
      .then(response => {
        console.log('response >>> ', response);
        // 3-3) reponse 메세지에 따른 로직 처리
        if (response.message === 'valid user') {
          localStorage.setItem('token', response.token);
          alert('로그인에 성공하셨습니다.');
          this.props.history.push('/main');
        }

        if (response.message === 'invalid id') {
          alert('id를 확인해주세요.');
        }

        if (response.message === 'invalid pw') {
          alert('pw를 확인해주세요.');
        }

        if (response.message === 'user not found') {
          alert('회원 아님?');
          this.props.history.push('/signup');
        }
      });

    this.checkBtnState();
  };

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
          onClick={this.handleLogin}
        >
          로그인 버튼
        </button>
      </div>
    );
  }
}

export default LoginAPI;
