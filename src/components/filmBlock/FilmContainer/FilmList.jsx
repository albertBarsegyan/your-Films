import React from 'react';
import { useEffect } from 'react';
import FilmBlock from './FilmBlock';

export default function FilmList({ filmList }) {
  useEffect(() => {
    console.log(filmList);
  }, []);
  return (
    <div>
      {filmList.map((film, index) => {
        return <FilmBlock key={index} filmObject={film} />;
      })}
    </div>
  );
}
