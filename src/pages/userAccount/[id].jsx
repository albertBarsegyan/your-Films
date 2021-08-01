import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/atoms/Header';
import getEmailFromURL from '../../helpers/getEmailFromURL';
import handleDataByEmail from '../../handlers/handleDataByEmail';
import Head from 'next/head';
import Footer from '../../components/atoms/Footer';

export default function DynamicUser() {
  const router = useRouter();
  let getEmail = getEmailFromURL(router.asPath);

  const [postList, setPostList] = useState(() => {
    if (process.browser) {
      return handleDataByEmail(getEmail, localStorage.getItem('usersPosts'));
    }
  });

  let getUserObject;
  if (process.browser) {
    // finding user object from local storage
    getUserObject = JSON.parse(localStorage.getItem('localUsers')).find(
      (userObject) => userObject.email === getEmail
    );
  }

  return (
    <div>
      <Head>
        <title>Account Settings</title>
      </Head>
      <Footer />
    </div>
  );
}
