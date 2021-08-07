import userInfo from '../constants/userInfo';
import getCurrentUserFavoriteList from '../helpers/getCurrentUserFavoriteList';

export const handleFavoriteButtonEvent = (filmObject, setStateHook) => {
  // browser render time
  let loggedUserFavoriteObject = getCurrentUserFavoriteList('favoriteList');
  let localStorageFavoriteList;
  let addNewFavoriteObject;
  let userInfo;
  if (process.browser) {
    userInfo = JSON.parse(localStorage.getItem('loggedUser'));
    localStorageFavoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    // if favoriteList exist in local storage
    if (localStorage.getItem('favoriteList')) {
      // if user has in local storage
      if (
        JSON.parse(localStorage.getItem('favoriteList')).find(
          (favoriteObject) => favoriteObject.email === userInfo.email
        )
      ) {
        // add to favoriteList
        const addLocalFavorites = JSON.parse(
          localStorage.getItem('favoriteList')
        ).map((favoriteObject) => {
          if (favoriteObject.email === userInfo.email) {
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
          if (favoriteObject.email === userInfo.email) {
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
      addNewFavoriteObject = JSON.parse(localStorage.getItem('favoriteList'));
      addNewFavoriteObject.push({
        email: userInfo.email,
        favoriteList: [filmObject],
      });
      localStorage.setItem(
        'favoriteList',
        JSON.stringify(addNewFavoriteObject)
      );
      return;
    }
    // if there isn't favoriteList in local storage , creating new one

    localStorage.setItem(
      'favoriteList',
      JSON.stringify([{ email: userInfo.email, favoriteList: [filmObject] }])
    );
  }
};
