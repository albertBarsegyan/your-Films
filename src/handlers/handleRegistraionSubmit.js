import hasEmailInLocal from '../helpers/hasEmailInLocal';
import firstLetterUpperCase from '../helpers/firstLetterUpperCase';
export const handleRegistrationSubmit = (formData, stateHook, messageHook) => {
  const userObject = { ...formData };
  userObject.firstName = firstLetterUpperCase(userObject.firstName);
  userObject.lastName = firstLetterUpperCase(userObject.lastName);
  if (!localStorage.getItem('localUsers')) {
    Promise.resolve('success')
      .then(() => {
        localStorage.setItem('localUsers', JSON.stringify([userObject]));
        return JSON.parse(localStorage.getItem('localUser'));
      })
      .then((data) => {
        stateHook(() => data);
        messageHook({ type: 'notification' });
      });
    return;
  }
  if (hasEmailInLocal(localStorage.getItem('localUsers'), formData.email)) {
    messageHook({ type: 'error' });
    return;
  }
  const localUsers = JSON.parse(localStorage.getItem('localUsers'));
  localUsers.push(userObject);
  Promise.resolve('success')
    .then(() => {
      localStorage.setItem('localUsers', JSON.stringify(localUsers));
      return localUsers;
    })
    .then((data) => {
      stateHook(() => [...data]);
      messageHook({ type: 'notification' });
    });
};
