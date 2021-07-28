import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import PropTypes from 'prop-types';

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
UserPosts.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  onClick: PropTypes.func.isRequired,
};