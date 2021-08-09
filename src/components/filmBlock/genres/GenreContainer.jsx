import React, { useEffect, useState } from 'react';
import { getGenreList } from '../../../services/genreService';
import MenuButton from '../../buttons/MenuButton';
import PrimaryButton from '../../buttons/PrimaryButton';

export default function GenreContainer({ onClick }) {
  const [genreList, setGenreList] = useState([]);
  const [showGenres, setShowGenres] = useState(true);

  useEffect(() => {
    getGenreList().then((data) => {
      setGenreList(data);
    });
  }, []);
  2;
  return (
    <div className="relative left-0 top-5 md:-top-20 py-10 md:w-1/6 w-full">
      <div className="mx-2 my-2 text-center">
        <PrimaryButton
          primary={false}
          onClick={() => setShowGenres((prev) => !prev)}
        >
          Genres
        </PrimaryButton>
      </div>
      <div className="flex items-center justify-center relative">
        {showGenres ? (
          <ul className="flex flex-col gap-1 w-3/4 md:w-full absolute top-0 z-20">
            {genreList.map((genre) => {
              return (
                <MenuButton onClick={(e) => onClick(genre)} key={genre.id}>
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
