import React from 'react';
import PrimaryInput from '../inputs/PrimaryInput';

export default function SearchContainer() {
  return (
    <div className="flex items-center justify-center w-full">
      <PrimaryInput placeholder="Type Film name and press enter" />
    </div>
  );
}
