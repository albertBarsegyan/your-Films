import React from 'react';
import { useRouter } from 'next/router';
import MenuButton from '../buttons/MenuButton';
import MenuLink from '../buttons/MenuLink';

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
            <MenuLink href="/account" passHref>
              Account
            </MenuLink>
          </div>
        </li>
        <li>
          <div>
            <MenuLink href="/[id]" passHref>
              Favorites
            </MenuLink>
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
