import React, { Component } from 'react';
import CommentList from './mainComponents/CommentList/CommentList';
// default export vs. named export
import { commentData } from './commentData';
import './Main.scss';

class Main extends Component {
  constructor() {
    console.log('constructor 함수 실행');
    super();
    this.state = {
      commentData: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount 함수 실행');
    this.setState({
      commentData: commentData
    });
  }

  render() {
    console.log('render 함수 실행');
    console.log('this.state.commentData', this.state.commentData);
    return (
      <div className="main">
        <h1>Main Page</h1>
        <ul>
          {/* 1) 컴포넌트 분리 전 */}
          {/* {this.state.commentData.map(comment => {
            return (
              <li key={comment.id}>
                <span>{comment.username}</span>
                <span>{comment.content}</span>
                <span>{comment.isLiked ? '좋아요' : '싫어요'}</span>
              </li>
            );
          })} */}

          {/* 2) 컴포넌트 분리 후 */}
          {this.state.commentData.map(comment => {
            return (
              <CommentList
                key={comment.id}
                username={comment.username}
                content={comment.content}
                isLiked={comment.isLiked}
              />
            );
          })}
        </ul>
        <div>
          <input placeholder="댓글 입력해봐" />
          <button>입력</button>
        </div>
      </div>
    );
  }
}

export default Main;
