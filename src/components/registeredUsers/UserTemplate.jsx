import Link from 'next/link';
import React, { Component } from 'react';
import CommonButton from '../CommonButton';

export default class UserTemplate extends Component {
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="w-1/4 border-b border-gray-900 py-5 m-5">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-cente justify-center gap-4">
            <div>
              <span className="text-2xl">{firstName}</span>
            </div>
            <div>
              <span className="text-2xl">{lastName}</span>
            </div>
          </div>
          <div>
            <span>{email}</span>
          </div>
          <div className="my-5">
            <Link href={'/registeredUsers/' + email} passHref>
              <CommonButton buttonInnerText="View Posts" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
