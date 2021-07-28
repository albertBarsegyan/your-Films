import React from 'react';
import CommonButton from '../../components/CommonButton';
import Header from '../../components/atoms/Header';
import UserTemplate from '../../components/registeredUsers/UserTemplate';
import LogOut from '../../components/userPage/LogOut';
import Link from 'next/link';
import Footer from '../../components/atoms/Footer';
import Head from 'next/head';
export default function RegisteredUsers() {
  let localUser = [];
  let userEmail;
  if (process.browser) {
    userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;
    localUser =
      JSON.parse(localStorage.getItem('localUsers')).filter(
        (userObject) => userObject.email !== userEmail
      ) ?? [];
  }
  return (
    <div className="mt-5">
      <Head>
        <title>Registered Users </title>
      </Head>
      <Header>
        <Link href="/user" passHref>
          <CommonButton buttonInnerText="My Blog" />
        </Link>
        <LogOut />
      </Header>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {localUser.length !== 0 ? (
          localUser.map((userObject) => {
            return (
              <UserTemplate
                key={userObject.email}
                firstName={userObject.firstName}
                lastName={userObject.lastName}
                email={userObject.email}
              />
            );
          })
        ) : (
          <div className="text-center">
            <span className="text-4xl">There is no registered user</span>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
