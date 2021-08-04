import React from 'react';
import { useEffect } from 'react';
import FilmBlock from './FilmBlock';
import { array } from 'prop-types';
import PrimaryButton from '../../buttons/PrimaryButton';

export default function FilmList({ filmList, onClick, genre }) {
  let localFavoriteList = [];
  if (process.browser) {
    localFavoriteList = localStorage.getItem('favoriteList')
      ? JSON.parse(localStorage.getItem('favoriteList'))
      : [];
  }

  return (
    <div className="my-5">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-center text-3xl text-primary border-b border-primary w-1/6 py-2">
          {genre}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-5 mx-5 justify-center my-5">
        {filmList.map((film) => {
          return <FilmBlock key={film.id} filmObject={film} />;
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