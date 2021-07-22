import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
