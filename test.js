let changedState = [
  { id: 1627449722394, postValue: 'ko ko ', comments: [] },
  { id: 1627450203232, postValue: 'er', comments: [] },
];
let commentObject = {
  id: 1627450203232,
  postValue: 'er',
  comments: [{ name: 'john' }],
};
let postId = 1627450203232;
changedState = changedState.map((postObject) => {
  if (postObject.id === postId) {
    const changedObject = { ...postObject };
    changedObject.comments = [...changedObject.comments, commentObject];
    return changedObject;
  }
  return postObject;
});
console.log(changedState);
