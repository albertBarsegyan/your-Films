import React from 'react';
import { useRouter } from 'next/router';
import MenuButton from '../buttons/MenuButton';

export default function MenuToggle() {
  const router = useRouter();
  function handleLogOut() {
    if (process.browser) {
      localStorage.setItem('loggedUser', '{}');
    }
    router.push('/');
  }

  return (
    <div>
      <ul className="flex flex-col w-full">
        <li>
          <div>
            <MenuButton>Account</MenuButton>
          </div>
        </li>
        <li>
          <div>
            <MenuButton>Favorites</MenuButton>
          </div>
        </li>
        <li>
          <div>
            <MenuButton onClick={handleLogOut}>Log out</MenuButton>
          </div>
        </li>
      </ul>
    </div>
  );
}
