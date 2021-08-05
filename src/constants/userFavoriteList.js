import LOGGED_USER from './userInfo';

let LOGGED_USER_FAVORITE_OBJECT;

// get current user favorite list
if (process.browser) {
  LOGGED_USER_FAVORITE_OBJECT = localStorage.getItem('favoriteList')
    ? JSON.parse(localStorage.getItem('favoriteList')).find(
        (favoriteObject) => favoriteObject.email === LOGGED_USER.email
      )
    : undefined;
}
export default LOGGED_USER_FAVORITE_OBJECT;
