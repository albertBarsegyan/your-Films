import checkPasswordAndEmail from './checkPasswordAndEmail';

export default function handleLogin(values, stateHook, loginHook) {
  if (checkPasswordAndEmail(localStorage.getItem('localUsers'), values)) {
    const userData = JSON.stringify(
      checkPasswordAndEmail(localStorage.getItem('localUsers'), values)
    );
    localStorage.setItem('loggedUser', userData);
    loginHook(true);
    return;
  }
  stateHook(true);
}
