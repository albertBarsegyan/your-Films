import React from 'react';
import { useState } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import MenuToggle from './MenuToggle';

export default function MenuBlock() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="relative z-10">
        <div>
          <div className="w-full bg-transparent border border-primary text-primary px-4 py-2 text-2xl text-center hover:border-transparent duration-100">
            <button type="button" onClick={() => setShowMenu((prev) => !prev)}>
              Settings
            </button>
          </div>
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
