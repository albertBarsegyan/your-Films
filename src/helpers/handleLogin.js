import checkPasswordAndEmail from './checkPasswordAndEmail';

export default function handleLogin(values, stateHook) {
  if (checkPasswordAndEmail(localStorage.getItem('localUsers'), values)) {
    const userData = JSON.stringify(
      checkPasswordAndEmail(localStorage.getItem('localUsers'), values)
    );
    localStorage.setItem('loggedUser', userData);
    console.log('user logged in');
    return;
  }
  stateHook(true);
}
