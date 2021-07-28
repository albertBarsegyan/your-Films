import React, { Component } from 'react';

import PropTypes from 'prop-types';

import CommonButton from '../../components/CommonButton';
import CommentContainer from '../../components/comments/CommentContainer';


export default class UserPostTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };
  }

  render() {
    const { value, commentList, onSubmit, onClick } = this.props;

    return (
      <li className="w-full">
        <div className="flex items-center justify-center my-5">
          <div className=" w-3/4 border-b border-gray-800">
            <div className="my-5 flex items-center justify-center">
              <span className="text-2xl">{value}</span>
            </div>
            <div className="my-5 flex items-center justify-between">
              <CommonButton
                buttonInnerText="Comments"
                onClick={() => {
                  this.setState((prev) => ({
                    showComments: !prev.showComments,
                  }));
                }}
              />
            </div>
            {this.state.showComments ? (
              <CommentContainer
                commentList={commentList}
                onSubmit={onSubmit}
                onClick={(commentId) => onClick(commentId)}
              />
            ) : null}
          </div>
        </div>
      </li>
    );
  }
}
UserPostTemplate.propTypes = {
  value: PropTypes.string,
};
UserPostTemplate.defaultProps = {
  value: '',
};
