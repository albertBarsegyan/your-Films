export default function filterFavoritesFromFilmList(favList, filmList) {
    return filmList.filter((film) => {
      favList.forEach((favorite) => {
        if (favorite.id === film.id) {
          return true;
        }
      });
      return false;
    });
}
