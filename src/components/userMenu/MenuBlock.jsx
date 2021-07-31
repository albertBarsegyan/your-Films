import React from 'react';
import { useState } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import MenuToggle from './MenuToggle';

export default function MenuBlock() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="relative">
        <div>
          <PrimaryButton onClick={() => setShowMenu((prev) => !prev)}>
            Settings
          </PrimaryButton>
        </div>
        <div className="flex items-center justify-center">
          {showMenu ? (
            <div className="absolute top-full">
              <MenuToggle />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
