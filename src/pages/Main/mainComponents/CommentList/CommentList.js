import React, { Component } from 'react';
import './CommentList.scss';

class CommentList extends Component {
  render() {
    return (
      <li className="commentList">
        <span>{this.props.username}</span>
        <span>{this.props.content}</span>
        <span>{this.props.isLiked ? '좋아요' : '안 좋아요'}</span>
      </li>
    );
  }
}

export default CommentList;
