import React from 'react';

export default function UserInfo() {
  let localUser;
  if (process.browser) {
    localUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  return (
    <div className="container">
      <div className="mt-5">
        <div className="w-1/2 mx-auto bg-white rounded-md">
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-primary text-4xl font-medium my-4">
              User Information
            </h6>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-primary ml-4">First Name</p>
              <p className="text-primary mr-4">
                {localUser && localUser.firstName}
              </p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-primary ml-4">Last Name</p>
              <p className="text-primary mr-4">
                {localUser && localUser.lastName}
              </p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-primary ml-4">
                {localUser && localUser.email}
              </p>
              <p className="text-primary mr-4">
                {localUser && localUser.email}
              </p>
            </div>

            <div
              className="
                flex flex-col
                justify-between
                items-center
                px-3
                py-5
                w-full
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
