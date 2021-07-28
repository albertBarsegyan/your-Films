export default function handleBlurPost(e, id, stateList) {
  const inputValue = e.target.value;

  const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;
  let changedLocalUsersPost = JSON.parse(localStorage.getItem('usersPosts'));
  let changedStateList;
  if (e.type === 'blur') {
    if (!inputValue.length) {
      changedStateList = this.state[stateList].map((stateItem) => {
        if (stateItem.id === id) {
          return {
            id,
            postValue: 'Type something in your post or delete it',
            comments: stateItem.comments,
          };
        }
        return stateItem;
      });
      this.setState(() => {
        return { [stateList]: [...changedStateList] };
      });
      changedLocalUsersPost = changedLocalUsersPost.map((userPostObject) => {
        if (userPostObject[userEmail]) {
          return { [userEmail]: changedStateList };
        }
        return userPostObject;
      });

      localStorage.setItem('usersPosts', JSON.stringify(changedLocalUsersPost));
      return;
    }
    Promise.resolve('success')
      .then(() => {
        this.setState({ showPopup: true });
        return true;
      })
      .then(() => {
        setTimeout(() => {
          this.setState({ showPopup: false });
        }, 2000);
      });

    return;
  }
  changedStateList = this.state[stateList].map((stateItem) => {
    if (stateItem.id === id) {
      return {
        id,
        postValue: inputValue,
        comments: stateItem.comments,
      };
    }
    return stateItem;
  });
  this.setState(() => {
    return { [stateList]: [...changedStateList] };
  });
  changedLocalUsersPost = changedLocalUsersPost.map((userPostObject) => {
    if (userPostObject[userEmail]) {
      return { [userEmail]: changedStateList };
    }
    return userPostObject;
  });
  localStorage.setItem('usersPosts', JSON.stringify(changedLocalUsersPost));
  return;
}
