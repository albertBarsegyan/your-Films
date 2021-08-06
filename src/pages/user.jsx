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
import { handleFavoriteButtonEvent } from '../handlers/handleFavoriteButtonEvent';
import isObjectEmpty from '../helpers/isObjectEmpty';
import { getMoviesByGenre } from '../services/genreService';

export default function User() {
  const router = useRouter();
  const [filmData, setFilmData] = useState({
    filmList: [],
    page: 1,
  });
  const [favoriteList, setFavoriteList] = useState([]);
  const [genre, setGenre] = useState({ id: 16, name: 'Animation' });

  let loggedUser, loggedUserFavoriteObject;
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    loggedUserFavoriteObject = localStorage.getItem('favoriteList')
      ? JSON.parse(localStorage.getItem('favoriteList')).find(
          (favoriteObject) => favoriteObject.email === loggedUser.email
        )
      : { favoriteList: [] };
  }

  useEffect(() => {
    if (isObjectEmpty(loggedUser)) {
      router.push('/404');
      return;
    }
    setFavoriteList(loggedUserFavoriteObject.favoriteList);
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
  // console.log(showFavoritesInsideFilmList(filmData.filmList, favoriteList));
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
