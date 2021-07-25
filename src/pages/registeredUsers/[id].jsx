import Link from 'next/link';
import { useRouter } from 'next/router';

import CommonButton from '../../components/CommonButton';

import Header from '../../components/Header';
import LogOut from '../../components/userPage/LogOut';
import getEmailFromURL from '../../helpers/getEmailFromURL';
import handleAllPostsByEmail from '../../helpers/handleAllPostsByEmail';
import UserPostTemplate from './UserPostTemplate';

export default function DynamicUser() {
  const router = useRouter();

  let getEmailList = getEmailFromURL(router.asPath);
  let postList;
  if (process.browser) {
    postList = handleAllPostsByEmail(
      getEmailList,
      localStorage.getItem('usersPosts')
    );
    console.log(getEmailList, 'email url');
    console.log(postList, 'post list');
    console.log(JSON.parse(localStorage.getItem('usersPosts')));
  }

  return (
    <div>
      <Header>
        <Link href="/user" passHref>
          <CommonButton buttonInnerText="My Blog" />
        </Link>
        <Link href="/registeredUsers" passHref>
          <CommonButton buttonInnerText="Users" />
        </Link>
        <LogOut />
      </Header>

      {postList && postList.length > 0 ? (
        postList.map((postObject) => {
          return (
            <ul key={postObject.id}>
              <UserPostTemplate value={postObject.postValue} />
            </ul>
          );
        })
      ) : (
        <div className="text-center">
          <span className="text-4xl">There is no Posts yet</span>
        </div>
      )}
    </div>
  );
}
