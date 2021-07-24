import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logos/logo.jpg';
import CommonButton from './CommonButton';

export default function Header({ children }) {
  return (
    <div className="relative flex items-center justify-center mt-4">
      <div className="flex flex-row items-center justify-center gap">
        <div>
          <Image
            priority
            src={logo}
            alt="Page logo"
            width={70}
            height={70}
            className="rounded-lg"
          />
        </div>
        <div>
          <span className="text-4xl ">Dark-Blog</span>
        </div>
      </div>
      {children}
    </div>
  );
}
