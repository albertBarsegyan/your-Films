let LOGGED_USER;
if (process.browser) {
  LOGGED_USER = JSON.parse(localStorage.getItem('loggedUser')) ?? {};
}
export default LOGGED_USER;
