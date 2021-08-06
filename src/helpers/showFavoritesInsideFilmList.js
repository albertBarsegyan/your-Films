export default function showFavoritesInsideFilmList(filmList, favoriteList) {
  const result = [];
  filmList.forEach((film) => {
    favoriteList.forEach((favorite) => {
      if (film.id === favorite.id) {
        result.push(true);
        return;
      }
      result.push(false);
    });
  });
  return result;
}
