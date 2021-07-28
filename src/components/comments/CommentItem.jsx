import classNames from 'classnames';
import { string, func } from 'prop-types';
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
    const { commentEmail, comment, onClick, onChange } = this.props;
    const { isEditable } = this.state;
    const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;
    // current user comment style
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
              // input for comment changing
              <div className="w-11/12">
                <input
                  onChange={(e) => onChange(e)}
                  className="w-full text-center text-xl px-3 py-2 border border-gray-600 text-gray-600 "
                  type="text"
                  value={comment}
                />
              </div>
            ) : (
              <span className="text-xl text-gray-600">{comment}</span>
            )}
          </div>
          {commentEmail === userEmail ? (
            <div className="flex flex-row gap-2 my-2 mx-4">
              <div>
                <CommonButton
                  onClick={(e) => {
                    this.setState((prev) => ({
                      isEditable: !prev.isEditable,
                    }));
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
// proptype rules
CommentItem.propTypes = {
  commentEmail: string.isRequired,
  comment: string.isRequired,
  onClick: func.isRequired,
  onChange: func.isRequired,
};
