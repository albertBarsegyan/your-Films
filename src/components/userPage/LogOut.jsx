import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import Link from 'next/link';
export default class LogOut extends Component {
  render() {
    return (
      <div className="absolute right-10">
        <Link href="/" passHref>
          <CommonButton buttonInnerText="Log out" />
        </Link>
      </div>
    );
  }
}
