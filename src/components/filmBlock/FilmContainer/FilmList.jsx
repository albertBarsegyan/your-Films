import React from 'react';
import FilmBlock from './FilmBlock';

export default function FilmList({ filmList }) {
  return (
    <div>
      {filmList.map((film,index) => {
        return <FilmBlock key={index} />;
      })}
    </div>
  );
}
