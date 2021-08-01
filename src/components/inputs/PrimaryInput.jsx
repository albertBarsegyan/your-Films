import React from 'react';

export default function PrimaryInput({ placeholder, ...props }) {
  return (
    <div className="w-3/4 md:w-1/3">
      <input
        {...props}
        placeholder={placeholder}
        type="text"
        className="rounded-sm w-full border-b border-primary text-primary text-xl px-4 py-2 bg-transparent placeholder-secondary focus:bg-primary focus:text-secondary"
      />
    </div>
  );
}
