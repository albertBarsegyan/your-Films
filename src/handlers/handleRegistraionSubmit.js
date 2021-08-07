import hasEmailInLocal from '../helpers/hasEmailInLocal';
import firstLetterUpperCase from '../helpers/firstLetterUpperCase';
export const handleRegistrationSubmit = (formData, stateHook, messageHook) => {
  const userObject = { ...formData };
  userObject.firstName = firstLetterUpperCase(userObject.firstName);
  userObject.lastName = firstLetterUpperCase(userObject.lastName);
  //  doesn't exist local users in local storage
  if (!localStorage.getItem('localUsers')) {
    Promise.resolve('success')
      .then(() => {
        localStorage.setItem('localUsers', JSON.stringify([userObject]));
        return JSON.parse(localStorage.getItem('localUsers'));
      })
      .then((data) => {
        stateHook(() => data);

        localStorage.setItem('loggedUser', JSON.stringify(data[0]));
      });
    return true;
  }
  // user already registered with this email
  if (hasEmailInLocal(localStorage.getItem('localUsers'), formData.email)) {
    messageHook({ type: 'error' });
    return false;
  }
  //  exist local users -> adding to list
  const localUsers = JSON.parse(localStorage.getItem('localUsers'));
  localUsers.push(userObject);
  Promise.resolve('success')
    .then(() => {
      localStorage.setItem('localUsers', JSON.stringify(localUsers));
      return localUsers;
    })
    .then((data) => {
      stateHook(() => [...data]);

      localStorage.setItem('loggedUser', JSON.stringify(data[data.length - 1]));
    });
  return true;
};
