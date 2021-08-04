export default function getGenreNameById(genreIdList, genreList) {
  // console.log(genreIdList, genreList);
  return (
    genreIdList &&
    genreIdList
      .map((genreId) => {
        const genreObject = genreList.find((genre) => genre.id === genreId);
        return genreObject && genreObject.name;
      })
      .join(', ')
  );
}
