import LOGGED_USER_FAVORITE_OBJECT from '../constants/userFavoriteList';
import LOGGED_USER from '../constants/userInfo';

export const handleFavoriteButtonEvent = (filmObject, setStateHook) => {
  // browser render time
  if (process.browser) {
    // if favoriteList exist in local storage
    if (localStorage.getItem('favoriteList')) {
      // if user has in local storage

      if (
        JSON.parse(localStorage.getItem('favoriteList')).find(
          (favoriteObject) => favoriteObject.email === LOGGED_USER.email
        )
      ) {
        // add to favoriteList
        const addLocalFavorites = JSON.parse(
          localStorage.getItem('favoriteList')
        ).map((favoriteObject) => {
          if (favoriteObject.email === LOGGED_USER.email) {
            let changedObject = { ...favoriteObject };
            changedObject.favoriteList.push(filmObject);
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
            changedObject.favoriteList = [
              ...[changedObject.favoriteList],
              filmObject,
            ];
            return changedObject;
          }
          return favoriteObject;
        });

        if (
          LOGGED_USER_FAVORITE_OBJECT &&
          LOGGED_USER_FAVORITE_OBJECT.favoriteList.find(
            (favoriteObject) => favoriteObject.id === filmObject.id
          )
        ) {
          localStorage.setItem(
            'favoriteList',
            JSON.stringify(filterLocalFavorites)
          );
          setStateHook(filterLocalFavorites);
          return;
        }

        localStorage.setItem('favoriteList', JSON.stringify(addLocalFavorites));
        setStateHook(addLocalFavorites);
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
