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

  const handleDeleteComment = (postId, commentId) => {
    const changedState = [...postList];
    let getUserPageEmail;
    changedState.map((postObject) => {
      if (postObject.id === postId) {
        const changedObject = { ...postObject };
        postObject.comments = [...postObject.comments].filter(
          (comment) => comment.id !== commentId
        );
        return changedObject;
      }
      return postObject;
    });

    if (process.browser) {
      getUserPageEmail = getEmailFromURL(window.location.href);
      let localStoragePostData = JSON.parse(localStorage.getItem('usersPosts'));

      const localStorageChangedData = localStoragePostData.map((postObject) => {
        if (postObject[getUserPageEmail]) {
          return { [getUserPageEmail]: changedState };
        }
        return postObject;
      });

      localStorage.setItem(
        'usersPosts',
        JSON.stringify(localStorageChangedData)
      );
      setPostList(changedState);
    }
  };

  useEffect(() => {
    setPostList(() => {
      let getEmail = getEmailFromURL(window.location.href);
      if (process.browser) {
        return handleDataByEmail(getEmail, localStorage.getItem('usersPosts'));
      }
    });
  }, []);
  return (
    <div>
      <Head>
        <title>
          {getUserObject
            ? `${getUserObject.firstName} ${getUserObject.lastName}'s blog`
            : 'UserPage'}
        </title>
      </Head>
      <Footer />
    </div>
  );
}
