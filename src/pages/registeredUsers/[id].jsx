import Link from 'next/link';
import { useRouter } from 'next/router';

import CommonButton from '../../components/CommonButton';

import Header from '../../components/Header';
import LogOut from '../../components/userPage/LogOut';
import getEmailFromURL from '../../helpers/getEmailFromURL';
import handleDataByEmail from '../../handlers/handleDataByEmail';
import UserPostTemplate from './UserPostTemplate';

export default function DynamicUser() {
  const router = useRouter();

  let getEmail = getEmailFromURL(router.asPath);
  let postList;
  let getUserObject = { firstName: '', lastName: '' };
  if (process.browser) {
    postList = handleDataByEmail(getEmail, localStorage.getItem('usersPosts'));
    getUserObject = JSON.parse(localStorage.getItem('localUsers')).find(
      (userObject) => userObject.email === getEmail
    );
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
      <div className="flex flex-row items-center justify-center gap-5 mt-5">
        <div>
          <span className="text-4xl">
            {getUserObject ? getUserObject.firstName : null}
          </span>
        </div>
        <div>
          <span className="text-4xl">
            {getUserObject ? getUserObject.lastName : null}՛s blog
          </span>
        </div>
      </div>

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
