import { TextareaAutosize } from '@material-ui/core';
import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import PropTypes from 'prop-types';
export default class PostTemplate extends Component {
  render() {
    const { onBlur, deletePost, showComments, value, onChange } = this.props;
    return (
      <li>
        <div className="flex items-center justify-center my-5">
          <div className=" w-4/5 md:w-1/2 border-b border-gray-800">
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
              {/* <CommonButton buttonInnerText="Comments" onClick={showComments} /> */}
            </div>
          </div>
        </div>
      </li>
    );
  }
}
PostTemplate.propTypes = {
  value: PropTypes.string,
};
PostTemplate.defaultProps = {
  value: '',
};