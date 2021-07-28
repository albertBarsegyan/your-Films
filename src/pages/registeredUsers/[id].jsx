import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CommonButton from '../../components/CommonButton';
import Header from '../../components/Header';
import LogOut from '../../components/userPage/LogOut';
import getEmailFromURL from '../../helpers/getEmailFromURL';
import handleDataByEmail from '../../handlers/handleDataByEmail';
import UserPostTemplate from './UserPostTemplate';
import handleAddCommentFunctional from '../../handlers/handleAddCommentFunctional';


export default function DynamicUser() {
  const router = useRouter();
  let getEmail = getEmailFromURL(router.asPath);

  const [postList, setPostList] = useState(() => {
    if (process.browser) {
      return handleDataByEmail(getEmail, localStorage.getItem('usersPosts'));
    }
  });

  let getUserObject = { firstName: '', lastName: '' };

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

  const handleCommentChange = (postId, commentIdAndEvent) => {
    const commentId = commentIdAndEvent[0][0];
    const inputValue = commentIdAndEvent[0][1].target.value;
    let getUserPageEmail;
    const changedState = [...postList].map((postObject) => {
      if (postObject.id === postId) {
        const changedObject = { ...postObject };
        changedObject.comments = [...changedObject.comments].map(
          (commentObject) => {
            if (commentObject.id === commentId) {
              return {
                ...commentObject,
                comment: inputValue,
              };
            }
            return commentObject;
          }
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
      <ul className="w-full">
        {postList && postList.length > 0 ? (
          postList.map((postObject) => {
            return (
              <UserPostTemplate
                onSubmit={(e) => {
                  handleAddCommentFunctional(
                    e,
                    postObject.id,
                    postList,
                    setPostList
                  );
                }}
                onClick={(commentId) => {
                  handleDeleteComment(postObject.id, commentId);
                }}
                commentList={postObject.comments}
                key={postObject.id}
                value={postObject.postValue}
                onChange={(data) => handleCommentChange(postObject.id, data)}
              />
            );
          })
        ) : (
          <div className="text-center">
            <span className="text-4xl">There is no Posts yet</span>
          </div>
        )}
      </ul>
    </div>
  );
}
