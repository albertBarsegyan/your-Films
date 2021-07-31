import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../components/atoms/Header';
import MenuBlock from '../components/userMenu/MenuBlock';
import isObjectEmpty from '../helpers/isObjectEmpty';

export default function User() {
  const router = useRouter();
  let loggedUser = {};
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser')) ?? {};
  }
  useEffect(() => {
    if (isObjectEmpty(loggedUser)) {
      router.push('/404');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Personal Blog </title>
      </Head>
      <Header>
        <MenuBlock />
      </Header>
    </div>
  );
}
