import React, { Component, useEffect } from 'react';

import RegisterComponent from '../components/registrationBlock/RegisterComponent';
import Header from '../components/atoms/Header';
import Footer from '../components/atoms/Footer';
import Head from 'next/head';
import LinkButton from '../components/buttons/LinkButton';
import isObjectEmpty from '../helpers/isObjectEmpty';
import { useRouter } from 'next/router';

export default function Home() {
  let loggedUser;
  const router = useRouter();
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }
  useEffect(() => {
    if (process.browser) {
      !isObjectEmpty(loggedUser) ? router.push('/user') : null;
    }
  }, []);
  return (
    <div className="bg-background-3 bg-gray-500 bg-center bg-blend-multiply m-0">
      <Head>
        <title>Registration to Your-Film </title>
      </Head>
      <Header>
        <LinkButton href="/login" passHref>
          Login
        </LinkButton>
      </Header>
      <RegisterComponent />
      <Footer />
    </div>
  );
}
