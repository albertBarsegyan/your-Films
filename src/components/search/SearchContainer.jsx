import React from 'react';
import PrimaryInput from '../inputs/PrimaryInput';

export default function SearchContainer({ onChange }) {
  return (
    <div className="flex items-center justify-center w-full my-5">
      <PrimaryInput
        placeholder="Type Film name and press enter"
        onChange={(e) => onChange(e.target.value, 1)}
      />
    </div>
  );
}
