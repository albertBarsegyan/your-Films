import React from 'react';

import MenuLink from '../buttons/MenuLink';

export default function MenuToggle() {
  return (
    <div>
      <ul className="flex flex-col w-full">
        <li>
          <div>
            <MenuLink href="/">Account</MenuLink>
          </div>
        </li>
        <li>
          <div>
            <MenuLink href="/">Favorites</MenuLink>
          </div>
        </li>
        <li>
          <div>
            <MenuLink href="/">Log out</MenuLink>
          </div>
        </li>
      </ul>
    </div>
  );
}
