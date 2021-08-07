export default function getCurrentUserFavoriteList(localStorageKey) {
  let userInfo;
  let loggedUserFavoriteObject;
  if (process.browser) {
    userInfo = JSON.parse(localStorage.getItem('loggedUser'));
    // in in localStorage exist key with provided key
    if (localStorage.getItem(localStorageKey)) {
      loggedUserFavoriteObject = JSON.parse(
        localStorage.getItem(localStorageKey)
      ).find((favoriteObject) => favoriteObject.email === userInfo.email) ?? {
        favoriteList: [],
      };
      return loggedUserFavoriteObject;
    }

    return {
      favoriteList: [],
    };
  }
}
