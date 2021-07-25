import React from 'react';
import UserTemplate from '../components/registeredUsers/UserTemplate';

export default function RegisteredUsers() {
  const localUser = JSON.parse(localStorage.getItem('localUsers'));
  return (
    <div>
      {localUser.map((userObject) => {
        return (
          <UserTemplate
            key={userObject.email}
            firstName={userObject.firstName}
            lastName={userObject.lastName}
          />
        );
      })}
    </div>
  );
}
