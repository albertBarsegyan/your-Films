import React from 'react';
import Image from 'next/image';
import logo from '../assets/logos/logo.jpg';

export default function Header({ children }) {
  return (
    <div className="flex items-center justify-center my-4 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-center gap">
        <div>
          <Image
            priority
            src={logo}
            alt="Page logo"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>

        <div className="hidden md:block">
          <span className="text-4xl ">Dark-Blog</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 md:mt-0 md:absolute right-10 gap-5">
        {children}
      </div>
    </div>
  );
}
