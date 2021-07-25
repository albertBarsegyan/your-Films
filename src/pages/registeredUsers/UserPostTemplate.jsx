import { TextareaAutosize } from '@material-ui/core';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import CommonButton from '../../components/CommonButton';

export default class UserPostTemplate extends Component {
  render() {
    const { showComments, value } = this.props;
    return (
      <li>
        <div className="flex items-center justify-center my-5">
          <div className=" w-1/2 border-b border-gray-800">
            <div className="my-5 flex items-center justify-center">
              <span className="text-2xl">{value}</span>
            </div>
            <div className="my-5 flex items-center justify-between">
              <CommonButton buttonInnerText="Comments" onClick={showComments} />
            </div>
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
