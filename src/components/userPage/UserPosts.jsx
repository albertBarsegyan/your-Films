import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import PostTemplate from './PostTemplate';

export default class UserPosts extends Component {
  render() {
    const { onClick, children } = this.props;

    return (
      <div>
        <div className="items-center justify-center flex">
          <CommonButton buttonInnerText="Add post" onClick={onClick} />
        </div>
        <ul>{children}</ul>
      </div>
    );
  }
}
