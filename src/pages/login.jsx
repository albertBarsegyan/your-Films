import React, { useEffect } from 'react';
import Link from 'next/link';
import CommonLogin from '../components/loginBlock/CommonLogin';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import { useRouter } from 'next/router';
import isObjectEmpty from '../helpers/isObjectEmpty';
import Head from 'next/head';
import LinkButton from '../components/buttons/LinkButton';


export default function Login() {
  const router = useRouter();
  useEffect(() => {
    let loggedUser = {};
    if (process.browser) {
      loggedUser = JSON.parse(localStorage.getItem('loggedUser')) ?? {};
    }
    if (!isObjectEmpty(loggedUser)) {
      router.push('/user');
    }
  }, []);
  return (
    <div className="bg-background-2 bg-gray-500 h-screen bg-blend-darken">
      <div>
        <Head>
          <title>Sign In Your-Films</title>
        </Head>
        <Header>
          <div>
            <LinkButton href="/" passHref>
              Sign up
            </LinkButton>
          </div>
        </Header>
        <CommonLogin />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
