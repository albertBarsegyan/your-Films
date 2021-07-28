import generateId from '../helpers/generateId';

export default function handleAddComment(e, postId, stateList) {
  e.preventDefault();
  // comment input value
  let inputValue = new FormData(e.target);
  inputValue = [...inputValue.values()][0];
 
  const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;
  const commentObject = {
    id: generateId(),
    commentWriter: userEmail,
    comment: inputValue,
  };
  let changedState = [...this.state[stateList]].map((postObject) => {
    if (postObject.id === postId) {
      const changedObject = { ...postObject };
      changedObject.comments = [...changedObject.comments, commentObject];
      return changedObject;
    }
    return postObject;
  });
  console.log(changedState, 'changed state object -<');

  let localStoragePostData = JSON.parse(localStorage.getItem('usersPosts')).map(
    (postObject) => {
      if (postObject[userEmail]) {
        return { [userEmail]: changedState };
      }
      return postObject;
    }
  );

  this.setState({ [stateList]: changedState });
  localStorage.setItem('usersPosts', JSON.stringify(localStoragePostData));
  e.target.reset();
}
