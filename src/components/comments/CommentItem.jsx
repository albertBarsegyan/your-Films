import { TextField } from '@material-ui/core';
import classNames from 'classnames';

import React, { Component } from 'react';
import CommonButton from '../CommonButton';

export default class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
    };
  }
  render() {
    const { commentEmail, comment, onClick } = this.props;
    const { isEditable } = this.state;
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
            {isEditable ? (
              <input
                className="text-xl text-gray-600"
                type="text"
                value={comment}
              />
            ) : (
              <span className="text-xl text-gray-600">{comment}</span>
            )}
          </div>
          {commentEmail === userEmail ? (
            <div className="flex flex-row gap-2 my-2 mx-4">
              <div>
                <CommonButton
                  onClick={(e) => {
                    // handleEdit(e);
                    this.setState((prev) => !prev.isEditable);
                  }}
                  buttonInnerText={isEditable ? 'Save' : 'Edit'}
                />
              </div>
              <div>
                <CommonButton buttonInnerText="X" onClick={onClick} />
              </div>
            </div>
          ) : null}
        </div>
      </li>
    );
  }
}
