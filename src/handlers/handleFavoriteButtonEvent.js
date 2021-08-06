import LOGGED_USER from '../constants/userInfo';

export const handleFavoriteButtonEvent = (filmObject, setStateHook) => {
  // browser render time
  let loggedUserFavoriteObject;
  if (process.browser) {
    loggedUserFavoriteObject = localStorage.getItem('favoriteList')
      ? JSON.parse(localStorage.getItem('favoriteList')).find(
          (favoriteObject) => favoriteObject.email === LOGGED_USER.email
        )
      : undefined;
    // if favoriteList exist in local storage
    if (localStorage.getItem('favoriteList')) {
      // if user has in local storage
      if (loggedUserFavoriteObject) {
        // add to favoriteList
        const addLocalFavorites = JSON.parse(
          localStorage.getItem('favoriteList')
        ).map((favoriteObject) => {
          if (favoriteObject.email === LOGGED_USER.email) {
            let changedObject = { ...favoriteObject };
            changedObject.favoriteList.push(filmObject);
            // add to state changed object
            setStateHook(changedObject.favoriteList);
            return changedObject;   
          }
          return favoriteObject;
        });

        // const addToLocalFavorites = LOGGED_USER_FAVORITE_OBJECT;
        const filterLocalFavorites = JSON.parse(
          localStorage.getItem('favoriteList')
        ).map((favoriteObject) => {
          if (favoriteObject.email === LOGGED_USER.email) {
            let changedObject = { ...favoriteObject };
            changedObject.favoriteList = changedObject.favoriteList.filter(
              (favoriteObject) => favoriteObject.id !== filmObject.id
            );
            // add to state changed object
            setStateHook(changedObject.favoriteList);
            return changedObject;
          }
          return favoriteObject;
        });

        if (
          loggedUserFavoriteObject &&
          loggedUserFavoriteObject.favoriteList.find(
            (favoriteObject) => favoriteObject.id === filmObject.id
          )
        ) {
          localStorage.setItem(
            'favoriteList',
            JSON.stringify(filterLocalFavorites)
          );

          return;
        }

        localStorage.setItem('favoriteList', JSON.stringify(addLocalFavorites));
        return;
      }
      return;
    }
    // if there isn't favoriteList in local storage , creating new one
    localStorage.setItem(
      'favoriteList',
      JSON.stringify([{ email: LOGGED_USER.email, favoriteList: [filmObject] }])
    );
  }
};
