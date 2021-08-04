import React from 'react';
import { useRouter } from 'next/router';
import MenuButton from '../buttons/MenuButton';
import MenuLink from '../buttons/MenuLink';

export default function MenuToggle() {
  const router = useRouter();
  let loggedUser;
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }
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
            <MenuLink href="/search">Search</MenuLink>
          </div>
        </li>
        <li>
          <div>
            <MenuLink
              href="/userAccount/[id]"
              as={`/userAccount/${loggedUser.email}`}
            >
              Account
            </MenuLink>
          </div>
        </li>
        <li>
          <div>
            <MenuLink href="/userAccount/favorites">Favorites</MenuLink>
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
