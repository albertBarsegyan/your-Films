import { useRouter } from 'next/router';
import { useEffect } from 'react';
import isObjectEmpty from '../helpers/isObjectEmpty';

export default function User() {
  //   const router = useRouter();
  //   useEffect(() => {
  //     if (isObjectEmpty(loggedInUser)) {
  //       router.push('/');
  //     }
  //   }, []);
  return (
    <div>
      <p>user page</p>
    </div>
  );
}
