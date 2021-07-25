import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import Link from 'next/link';

export default function LogOut() {
  const handleLogOut = (e) => {
    localStorage.setItem('loggedUser', JSON.stringify({}));
  };
  return (
    <div>
      <Link href="/" passHref>
        <CommonButton
          onClick={(e) => handleLogOut(e)}
          buttonInnerText="Log out"
        />
      </Link>
    </div>
  );
}
