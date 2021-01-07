import React, { Component } from 'react';
import CommentList from './mainComponents/CommentList/CommentList';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      commentData: [
        {
          id: 1,
          username: '1username',
          content: '첫 번째 comment',
          isLiked: false
        },
        {
          id: 2,
          username: '2username',
          content: '두 번째 comment',
          isLiked: false
        },
        {
          id: 3,
          username: '3username',
          content: '세 번째 comment',
          isLiked: false
        },
        {
          id: 4,
          username: '4username',
          content: '네 번째 comment',
          isLiked: false
        },
        {
          id: 5,
          username: '5username',
          content: '다섯 번째 comment',
          isLiked: false
        },
        {
          id: 6,
          username: '6username',
          content: '여섯 번째 comment',
          isLiked: false
        }
      ]
    };
  }

  render() {
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
