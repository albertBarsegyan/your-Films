import generateId from '../helpers/generateId';
import getEmailFromURL from '../helpers/getEmailFromURL';

export default function handleAddCommentFunctional(
  e,
  postId,
  stateList,
  setStateList
) {
  e.preventDefault();
  // comment input value , value from form
  let inputValue = new FormData(e.target);
  inputValue = [...inputValue.values()][0];
  let getUserPageEmail;
  const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;

  const commentObject = {
    id: generateId(),
    commentWriter: userEmail,
    comment: inputValue,
  };
  const changedState = [...stateList];
  changedState.map((postObject) => {
    if (postObject.id === postId) {
      const changedObject = { ...postObject };
      postObject.comments = [...postObject.comments, commentObject];
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
    console.log(localStoragePostData);
    localStorage.setItem('postsList', JSON.stringify(localStorageChangedData));
    setStateList(changedState);
    e.target.reset();
  }
}
