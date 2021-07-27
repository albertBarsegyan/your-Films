import generateId from '../helpers/generateId';

export default function handleAddComment(e, postId, stateList) {
  e.preventDefault();
  // comment input value
  let inputValue = new FormData(e.target);
  inputValue = [...inputValue.values()][0];
  console.log('inputValues', inputValue);
  const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;
  const commentObject = {
    id: generateId(),
    commentWriter: userEmail,
    comment: inputValue,
  };
  const changedState = [...this.state[stateList]];
  changedState.map((postObject) => {
    if (postObject.id === postId) {
      const changedObject = { ...postObject };
      postObject.comments = [...postObject.comments, commentObject];
      return changedObject;
    }
    return postObject;
  });
  // console.log(changedState);
  Promise.resolve('success')
    .then(() => {
      this.setState({ [stateList]: changedState });
      return this.state[stateList];
    })
    .then((data) => {
      console.log(data, 'state data');
    });
  // console.log('changed main state', this.state[stateList]);
}
