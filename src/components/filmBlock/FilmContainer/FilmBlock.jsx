import React from 'react';
import Image from 'next/image';
import { getImage } from '../../../helpers/filmAPI/APIAuth';
import { useState, useEffect } from 'react';
import { getGenreList } from '../../../services/genreService';
import getGenreNameById from '../../../helpers/filmAPI/getGenreNameById';
import classNames from 'classnames';
import { bool } from 'prop-types';

export default function FilmBlock({ filmObject, makeFavorite, onClick }) {
  const [genres, setGenres] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const blockStyle = classNames({
    'max-w-md w-full shadow-lg rounded-xl p-6 duration-300': true,
    'bg-primary ': !isFavorite,
    'bg-green-500': isFavorite,
  });

  useEffect(() => {
    setIsFavorite(makeFavorite);
    getGenreList().then((response) => {
      const { genre_ids } = filmObject;
      const genreNames = getGenreNameById(genre_ids, response);
      setGenres(genreNames);
    });
  }, []);

  return (
    <div className="flex items-center justify-center m-1 md:w-full">
      {/* <div className="container"> */}
      <div className={blockStyle}>
        <div className="w-auto flex flex-col">
          <div>
            <div className="relative  w-full mb-3">
              <div className="absolute flex flex-col top-0 right-0 p-3">
                <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full">
                <Image
                  width="400"
                  height="200"
                  src={getImage(filmObject.backdrop_path) || null}
                  alt="Just a flower"
                  className="block w-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                <div className="flex items-center justify-center my-2">
                  {/* film [original_title] */}
                  <span className="text-xl text-secondary font-semibold ">
                    {filmObject.original_title}
                  </span>
                </div>
                <div className="w-full flex-none text-sm flex items-center text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  {/* film [vote_average] */}
                  <span className="text-secondary whitespace-nowrap mr-3">
                    {filmObject.vote_average}
                  </span>
                  {/* film [genre_ids] */}
                  <span className="mr-2 text-secondary">{genres}</span>
                </div>
                {/* film [release_date] */}
                <div>
                  <span className="text-secondary">First release: </span>
                  <span className="text-secondary">
                    {filmObject.release_date}
                  </span>
                </div>
                <div className="flex items-center w-full justify-between min-w-0 my-2">
                  {/* film  [overview] */}
                  <h2 className="text-lg mr-auto cursor-pointer text-secondary hover:text-purple-500 truncate">
                    {filmObject.overview}
                  </h2>
                </div>
              </div>

              <div className="flex space-x-2 text-sm font-medium justify-start">
                <button
                  onClick={() => {
                    onClick();
                    setIsFavorite((prev) => !prev);
                  }}
                  className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg  text-secondary rounded-full hover:bg-purple-600 "
                >
                  <span> Favorites</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
FilmBlock.propTypes = {
  makeFavorite: bool,
};

FilmBlock.defaultProps = {
  makeFavorite: false,
};

