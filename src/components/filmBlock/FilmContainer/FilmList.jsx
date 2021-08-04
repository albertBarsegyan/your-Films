import React from 'react';
import { useEffect } from 'react';
import FilmBlock from './FilmBlock';
import { array } from 'prop-types';
import PrimaryButton from '../../buttons/PrimaryButton';
export default function FilmList({ filmList, onClick, genre }) {
  let localFavoriteList;
  if (process.browser) {
    localFavoriteList =
      localStorage.getItem('favoriteList') &&
      JSON.parse(localStorage.getItem('favoriteList'));
    console.log(localFavoriteList);
  }

  return (
    <div className="my-5">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-center text-3xl text-primary border-b border-primary w-1/6 py-2">
          {genre}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-5 mx-5 justify-center my-5">
        {filmList.map((film, index) => {
          localFavoriteList.forEach((favorite) => {
            if (favorite.id === film.id) {
              console.log(favorite, 'favorite');
              return <FilmBlock makeFavorite key={index} filmObject={film} />;
            }
            return;
          });
          return <FilmBlock key={index} filmObject={film} />;
        })}
      </div>
      <div className="flex items-center justify-center">
        <PrimaryButton primary onClick={onClick}>
          Load More
        </PrimaryButton>
      </div>
    </div>
  );
}
FilmList.propTypes = {
  filmList: array,
};
FilmList.defaultProps = {
  filmList: [],
};