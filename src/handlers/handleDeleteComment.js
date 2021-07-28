import getEmailFromURL from '../helpers/getEmailFromURL';

export default function handleDeleteComment(commentId, postId, stateList) {
  const changedState = this.state[stateList].map((postObject) => {
    if (postObject.id === postId) {
      const changedPostObject = { ...postObject };
      const filteredCommentList = changedPostObject.comments.filter(
        (comment) => comment.id !== commentId
      );
      changedPostObject.comments = filteredCommentList;
      return changedPostObject;
    }
    return postObject;
  });
  const userEmail = getEmailFromURL(window.location.href);

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
  //   console.log(commentId, postId);
}
