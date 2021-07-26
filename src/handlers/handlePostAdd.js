import generateId from '../helpers/generateId';

export default function handlePostAdd(stateList) {
  const postObject = {
    id: generateId(),
    postValue: '',
    comments: [],
  };
  Promise.resolve('success')
    .then(() => {
      this.setState((prevState) => ({
        [stateList]: [...prevState[stateList], postObject],
      }));
      return this.state[stateList];
    })
    .then((postList) => {
      // current user ,who logged in
      const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;

      //  made object with email
      const userPostList = { [userEmail]: postList };
      // is exist in local storage
      if (localStorage.getItem('usersPosts')) {
        // all post lists , postObject list
        let localPostsList = JSON.parse(localStorage.getItem('usersPosts'));

        // is there isn't user with this email
        if (!localPostsList.some((postObject) => postObject[userEmail])) {
          //  adding to local storage post list {postObject}
          localPostsList.push(userPostList);
          localStorage.setItem('usersPosts', JSON.stringify(localPostsList));

          return;
        }
        localPostsList = localPostsList.map((postObject) => {
          if (postObject[userEmail]) {
            return userPostList;
          }
          return postObject;
        });
        localStorage.setItem('usersPosts', JSON.stringify(localPostsList));

        return;
      }
      localStorage.setItem('usersPosts', JSON.stringify([userPostList]));
    });
}
