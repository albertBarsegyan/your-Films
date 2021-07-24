import { TextareaAutosize } from '@material-ui/core';
import React, { Component } from 'react';

export default class PostTemplate extends Component {
  render() {
    const { onBlur } = this.props;
    return (
      <div className="flex items-center justify-center">
        <div className=" w-1/2 border-b border-gray-800">
          <div className="my-5 flex items-center justify-center">
            <TextareaAutosize
              onBlur={onBlur}
              style={{
                border: '1px solid black',
                width: '100%',
                padding: '10px 20px',
              }}
              aria-label="maximum height"
              placeholder="Here you can add your posts without save or edit button."
            />
          </div>
        </div>
      </div>
    );
  }
}
