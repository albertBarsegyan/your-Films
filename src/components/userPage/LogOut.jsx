import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import Link from 'next/link';
export default class LogOut extends Component {
  render() {
    return (
      <div className="absolute right-10 flex flex-row items-center justify-end gap-5">
        <Link href="/registeredUsers" passHref>
          <CommonButton buttonInnerText="Users" />
        </Link>
        <Link href="/" passHref>
          <CommonButton buttonInnerText="Log out" />
        </Link>
      </div>
    );
  }
}
