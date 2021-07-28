import React from 'react';
import { string } from 'prop-types';
export default function UserInfo({ firstName, lastName }) {
  return (
    <div className="my-5">
      <div className="flex flex-row items-center justify-center gap-5">
        <div>
          <span className="text-4xl text-gray-900">{firstName}</span>
        </div>
        <div>
          <span className="text-4xl text-gray-900">{lastName}՛s Blog</span>
        </div>
      </div>
    </div>
  );
}
UserInfo.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
};