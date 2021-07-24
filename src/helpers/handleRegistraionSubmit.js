export const handleRegistrationSubmit = (formData, stateHook) => {
  if (!localStorage.getItem('localUsers')) {
    Promise.resolve('success')
      .then(() => {
        const usersList = [formData];
        localStorage.setItem('localUsers', JSON.stringify(usersList));
        return JSON.parse(localStorage.getItem('localUser'));
      })
      .then((data) => {
        stateHook(() => data);
        console.log(localStorage.getItem('localUsers'), 'local storage  users');
      });
    return;
  }
  const localUsers = JSON.parse(localStorage.getItem('localUsers'));
  localUsers.push(formData);
  Promise.resolve('success')
    .then(() => {
      localStorage.setItem('localUsers', JSON.stringify(localUsers));
      return localUsers;
    })
    .then((data) => {
      stateHook(() => [...data]);
    });
};
