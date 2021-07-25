import generateId from './generateId';

export default function handlePostAdd(stateList) {
  const postObject = {
    id: generateId(),
    postValue: '',
  };
  Promise.resolve('success')
    .then(() => {
      this.setState((prevState) => ({
        [stateList]: [...prevState[stateList], postObject],
      }));
      return this.state[stateList];
    })
    .then((postList) => {
      const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;

      //   email -> [{postObject},{postObject}]
      const userPostList = { [userEmail]: postList };
      if (localStorage.getItem('usersPosts')) {
        // all post lists , postObject list
        let localPostsList = JSON.parse(localStorage.getItem('usersPosts'));

        if (!localPostsList.some((postObject) => postObject[userEmail])) {
          console.log('if there is not user with this email -> ');
          //  adding to local storage post list {postObject}
          localPostsList.push(userPostList);
          localStorage.setItem('usersPosts', JSON.stringify(localPostsList));
          console.log(
            localStorage.getItem('usersPosts'),
            'added to local post list'
          );
          return;
        }
        localPostsList = localPostsList.map((postObject) => {
          if (postObject[userEmail]) {
            return userPostList;
          }
          return postObject;
        });
        localStorage.setItem('usersPosts', JSON.stringify(localPostsList));
        console.log(
          localStorage.getItem('usersPosts'),
          'changed local post list'
        );
        return;
      }
      localStorage.setItem('usersPosts', JSON.stringify([userPostList]));
      console.log(
        'added to usersPost list first time ->',
        localStorage.getItem('usersPosts')
      );
    });
}
