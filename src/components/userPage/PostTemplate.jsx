import { TextareaAutosize } from '@material-ui/core';
import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import PropTypes from 'prop-types';
import CommentContainer from '../comments/CommentContainer';
import { func, string, array } from 'prop-types';
export default class PostTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleComments: false,
    };
  }
  render() {
    const {
      onBlur,
      deletePost,
      value,
      onChange,
      commentList,
      handleAddComment,
      handleDeleteComment,
      handleCommentEdit
    } = this.props;

    return (
      <li>
        <div className="flex items-center justify-center my-5">
          <div className=" w-4/5 md:w-1/2 border-b border-green-500">
            <div className="my-5 flex items-center justify-center">
              <TextareaAutosize
                onChange={onChange}
                onBlur={onBlur}
                style={{
                  border: '1px solid black',
                  width: '100%',
                  padding: '10px 20px',
                }}
                value={value}
                aria-label="maximum height"
                placeholder="Here you can add your posts without save or edit button."
              />
            </div>
            <div className="my-5 flex items-center justify-between">
              <CommonButton
                buttonInnerText="Delete Post"
                onClick={deletePost}
              />
              <CommonButton
                buttonInnerText="Comments"
                onClick={() => {
                  this.setState((prev) => ({
                    toggleComments: !prev.toggleComments,
                  }));
                }}
              />
            </div>
            {this.state.toggleComments ? (
              <CommentContainer
                onChange={(data) => handleCommentEdit(data)}
                commentList={commentList}
                onSubmit={handleAddComment}
                onClick={(data) => handleDeleteComment(data)}
              />
            ) : null}
          </div>
        </div>
      </li>
    );
  }
}
PostTemplate.propTypes = {
  value: string,
  onBlur: func.isRequired,
  deletePost: func.isRequired,
  onChange: func.isRequired,
  commentList: array,
  handleAddComment: func.isRequired,
  handleDeleteComment: func.isRequired,
};
PostTemplate.defaultProps = {
  value: '',
};