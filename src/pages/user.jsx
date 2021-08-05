import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect, useReducer } from 'react';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import FilmList from '../components/filmBlock/FilmContainer/FilmList';
import GenreContainer from '../components/filmBlock/genres/GenreContainer';
import SearchContainer from '../components/search/SearchContainer';
import MenuBlock from '../components/userMenu/MenuBlock';
import LOGGED_USER_FAVORITE_OBJECT from '../constants/userFavoriteList';
import { handleFavoriteButtonEvent } from '../handlers/handleFavoriteButtonEvent';
import isObjectEmpty from '../helpers/isObjectEmpty';
import { getMoviesByGenre, getSearchedFilms } from '../services/genreService';

export default function User() {
  const router = useRouter();
  const [filmData, setFilmData] = useState({
    filmList: [],
    page: 1,
  });
  const [favoriteList, setFavoriteList] = useState(
    LOGGED_USER_FAVORITE_OBJECT && LOGGED_USER_FAVORITE_OBJECT.favoriteList
  );
  const [genre, setGenre] = useState({ id: 16, name: 'Animation' });

  let loggedUser;
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  useEffect(() => {
    if (isObjectEmpty(loggedUser)) {
      router.push('/404');
      return;
    }
    getMoviesByGenre(genre.id, 1).then((res) => {
      setFilmData((prev) => {
        return {
          ...prev,
          filmList: res,
        };
      });
    });
  }, []);

  // load more button event
  const incrementPage = () => {
    Promise.resolve('success')
      .then(() => {
        setFilmData((prev) => {
          return {
            ...prev,
            page: prev.page + 1,
          };
        });
        return true;
      })
      .then(() => {
        getMoviesByGenre(genre.id, filmData.page).then((res) => {
          setFilmData((prev) => {
            return {
              ...prev,
              filmList: [...prev.filmList, ...res],
            };
          });
        });
      });
  };
  const showMoviesByGenre = (genreObject) => {
    getMoviesByGenre(genreObject.id, 1).then((response) => {
      setFilmData({
        page: 1,
        filmList: response,
      });
    });
    setGenre(genreObject);
  };

  return (
    <div className="relative">
      <Head>
        <title>Personal Blog </title>
      </Head>
      <Header>
        <MenuBlock />
      </Header>
      <div className="flex flex-col md:flex-row">
        <GenreContainer
          onClick={(genreObject) => showMoviesByGenre(genreObject)}
        />
        <FilmList
          handleFavoriteEvent={(filmObject) =>
            handleFavoriteButtonEvent(filmObject, setFavoriteList)
          }
          genre={genre && genre.name}
          filmList={filmData.filmList}
          onClick={() => incrementPage()}
        />
      </div>
      <Footer />
    </div>
  );
}
