import generateId from '../helpers/generateId';

export default function handleAddCommentFunctional(
  e,
  postId,
  stateList,
  setStateList
) {
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
  const changedState = [...stateList];
  changedState.map((postObject) => {
    if (postObject.id === postId) {
      const changedObject = { ...postObject };
      postObject.comments = [...postObject.comments, commentObject];
      return changedObject;
    }
    return postObject;
  });

  setStateList(changedState);
  e.target.reset();
}
