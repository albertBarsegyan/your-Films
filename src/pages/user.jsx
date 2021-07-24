import { useRouter } from 'next/router';
import { useEffect } from 'react';
import UserContainer from '../components/userPage/UserContainer';
import isObjectEmpty from '../helpers/isObjectEmpty';

export default function User() {
  let userData;
  const router = useRouter();
  if (process.browser) {
    userData = localStorage.getItem('loggedUser')
      ? JSON.parse(localStorage.getItem('loggedUser'))
      : {};
  }

  useEffect(() => {
    if (isObjectEmpty(userData)) {
      router.push('/404');
    }
  }, []);

  return <UserContainer />;
}
