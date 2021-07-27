import React, { Component } from 'react';

import PropTypes from 'prop-types';

import CommonButton from '../../components/CommonButton';
import CommentContainer from '../../components/comments/CommentContainer';
import getEmailFromURL from '../../helpers/getEmailFromURL';
import { SignalCellularNull } from '@material-ui/icons';

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
      <li>
        <div className="flex items-center justify-center my-5">
          <div className=" w-1/2 border-b border-gray-800">
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
                  console.log(this.state.showComments);
                }}
              />
            </div>
            {this.state.showComments ? (
              <CommentContainer
                commentList={commentList}
                onSubmit={onSubmit}
                onClick={onClick}
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
