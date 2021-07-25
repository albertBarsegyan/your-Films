import React, { Component } from 'react';
const classNames = require('classnames');
export default class PopUp extends Component {
  render() {
    const { popUpMessage, isError } = this.props;
    const stylesDiv = classNames({
      'fixed right-10 top-10 px-4 py-2 rounded-xl z-10': true,
      'bg-red-500 ': isError,
      'bg-green-500': !isError,
    });

    return (
      <div className={stylesDiv}>
        <span className="text-white text-2xl">{popUpMessage}</span>
      </div>
    );
  }
}
