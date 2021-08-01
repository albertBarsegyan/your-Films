import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Children } from 'react';
import {
  getMoviesByGenre,
  getGenreList,
} from '../../../helpers/filmAPI/getFilmList';

import MenuButton from '../../buttons/MenuButton';
import PrimaryButton from '../../buttons/PrimaryButton';

export default function GenreContainer() {
  const [genreList, setGenreList] = useState([]);
  const [showGenres, setShowGenres] = useState(true);
  useEffect(() => {
    axios
      .get(getGenreList())
      .then((response) => {
        const { genres } = response.data;
        setGenreList(genres);

        return true;
      })
      .catch((err) => console.log(err.message));
  }, []);
2
  return (
   
      <div className="relative left-0 -top-0 py-10 md:w-1/6 w-full">
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
                  <MenuButton
                    onClick={() => {
                      axios.get(getMoviesByGenre(genre.id)).then((response) => {
                        console.log(response.data);
                      });
                    }}
                    key={genre.id}
                  >
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
