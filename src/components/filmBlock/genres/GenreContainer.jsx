import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {
  getGenreListURL,
  getMoviesByGenre,
} from '../../../helpers/filmAPI/APIAuth';
import MenuButton from '../../buttons/MenuButton';
import PrimaryButton from '../../buttons/PrimaryButton';

export default function GenreContainer() {
  const [genreList, setGenreList] = useState([]);
  const [showGenres, setShowGenres] = useState(true);
  useEffect(() => {
    axios
      .get(getGenreListURL())
      .then((response) => {
        const { genres } = response.data;
        setGenreList(genres);
        console.log(genreList);
        return true;
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="relative md:absolute left-0 top-0 py-10">
      <div className="mx-2 my-2">
        <PrimaryButton
          primary={false}
          onClick={() => setShowGenres((prev) => !prev)}
        >
          Genres
        </PrimaryButton>
      </div>
      <div className="flex items-center justify-center">
        {showGenres ? (
          <ul className="flex flex-col gap-1 w-1/2 md:w-full ">
            {genreList.map((genre) => {
              return (
                <MenuButton href={getMoviesByGenre(genre.id)} key={genre.id}>
                  {genre.name}
                </MenuButton>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
