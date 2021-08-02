import React from 'react';
import { useEffect } from 'react';
import FilmBlock from './FilmBlock';
import { array } from 'prop-types';
import PrimaryButton from '../../buttons/PrimaryButton';

export default function FilmList({ filmList, onClick }) {
  return (
    <div className="my-5">
      <div className="flex flex-col md:flex-row flex-wrap gap-5 mx-5 items-center justify-center my-5">
        {filmList.map((film, index) => {
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