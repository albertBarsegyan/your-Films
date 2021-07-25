import React, { Component } from 'react';
import CommonButton from '../CommonButton';

export default class UserTemplate extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div className="w-1/4 border-b border-gray-900 py-5 m-5">
        <div className="flex flex-col items-center justify-center">
          <div>
            <div>
              <span>{firstName}</span>
            </div>
            <div>
              <span>{lastName}</span>
            </div>
          </div>
          <div>
            <CommonButton buttonInnerText="View Posts" />
          </div>
        </div>
      </div>
    );
  }
}
