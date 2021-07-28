import classNames from 'classnames';
import React, { Component } from 'react';
import CommonButton from '../CommonButton';

export default class CommentItem extends Component {
  render() {
    const { commentEmail, comment, onClick } = this.props;
    const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;

    const styles = classNames({
      'text-xl': true,
      'text-green-600': userEmail === commentEmail,
      'text-gray-600': userEmail !== commentEmail,
    });
    return (
      <li className="my-5 border-r border-b border-gray-600 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="mx-5">
            <span className={styles}>{commentEmail}</span>
          </div>
          <div className="mx-5">
            <span className="text-xl text-gray-600">{comment}</span>
          </div>
          {commentEmail === userEmail ? (
            <div className="mx-5">
              <CommonButton buttonInnerText="X" onClick={onClick} />
            </div>
          ) : null}
        </div>
      </li>
    );
  }
}
