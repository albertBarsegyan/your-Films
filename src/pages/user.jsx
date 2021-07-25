import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import UserContainer from '../components/userPage/UserContainer';
import isObjectEmpty from '../helpers/isObjectEmpty';

export default function User() {
  const router = useRouter();
  let loggedUser = {};
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }
  useEffect(() => {
    if (isObjectEmpty(loggedUser)) {
      router.push('/404');
    }
    return () => {
      localStorage.setItem('loggedUser', JSON.stringify({}));
    };
  }, []);

  // useEffect(() => {
  //   if (isObjectEmpty(userData)) {
  //     router.push('/404');
  //   }
  // }, []);

  return (
    <UserContainer
      firstName={loggedUser.firstName}
      lastName={loggedUser.lastName}
    />
  );
}
