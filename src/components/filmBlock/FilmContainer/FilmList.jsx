import React from 'react';
import { useEffect } from 'react';
import FilmBlock from './FilmBlock';
import { array } from 'prop-types';
import PrimaryButton from '../../buttons/PrimaryButton';


export default function FilmList({
  filmList,
  favList,
  onClick,
  genre,
  handleFavoriteEvent,
}) {
  return (
    <div className="my-5 w-4/5 md:w-3/4 mx-auto">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-3xl text-center text-primary border-b border-primary md:w-1/6 py-2">
          {genre}
        </h3>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {filmList.map((film) => {
          if (favList.some((favorite) => favorite.id === film.id)) {
            return (
              <FilmBlock
                makeFavorite
                onClick={() => handleFavoriteEvent(film)}
                key={film.id}
                filmObject={film}
              />
            );
          }
          return (
            <FilmBlock
              onClick={() => handleFavoriteEvent(film)}
              key={film.id}
              filmObject={film}
            />
          );
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
  favList: array,
};
FilmList.defaultProps = {
  filmList: [],
  favList: [],
};