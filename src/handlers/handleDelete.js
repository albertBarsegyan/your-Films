export default function handleDelete(id, stateList) {
  const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;
  let changedLocalUsersPost = JSON.parse(
    localStorage.getItem('usersPosts')
  ).map((userPostObject) => {
    if (userPostObject[userEmail]) {
      let editedPostList = userPostObject[userEmail].filter(
        (postObject) => postObject.id !== id
      );
      return {
        [userEmail]: editedPostList,
      };
    }
    return userPostObject;
  });
  let changedStateList = this.state[stateList].filter(
    (stateItem) => stateItem.id !== id
  );
  localStorage.setItem('usersPosts', JSON.stringify(changedLocalUsersPost));

  this.setState(() => {
    return { [stateList]: [...changedStateList] };
  });
}
