import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { getPopularList } from '../../../helpers/filmAPI/getFilmList';

export default function FilmBlock() {
  useEffect(() => {
    axios
      .get(getPopularList())
      .then((res) => console.log('popular data', res.data));
  }, []);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsa!
      </p>
    </div>
  );
}
