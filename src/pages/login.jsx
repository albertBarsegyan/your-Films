import React, { useEffect } from 'react';
import CommonButton from '../components/CommonButton';
import Link from 'next/link';
import CommonLogin from '../components/CommonLogin';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import { useRouter } from 'next/router';
import isObjectEmpty from '../helpers/isObjectEmpty';
import Head from 'next/head';
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
    <>
      <div>
        <Head>
          <title>Sign In Dark-Blog</title>
        </Head>
        <Header>
          <div>
            <Link href="/" passHref>
              <CommonButton buttonInnerText="Register" />
            </Link>
          </div>
        </Header>
        <CommonLogin />
      </div>
      <Footer />
    </>
  );
}
