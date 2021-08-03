import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect, useReducer } from 'react';
import Header from '../components/atoms/Header';
import FilmBlock from '../components/filmBlock/FilmContainer/FilmBlock';
import FilmList from '../components/filmBlock/FilmContainer/FilmList';
import GenreContainer from '../components/filmBlock/genres/GenreContainer';
import SearchContainer from '../components/search/SearchContainer';
import MenuBlock from '../components/userMenu/MenuBlock';
import isObjectEmpty from '../helpers/isObjectEmpty';
import { getMoviesByGenre, getPopularList } from '../services/genreService';

export default function User() {
  const router = useRouter();
  const [filmData, setFilmData] = useState({
    filmList: [],
    page: 1,
  });
  const [genreName, setGenreName] = useState({});
  let loggedUser = {};

  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser')) ?? {};
  }

  useEffect(() => {
    if (isObjectEmpty(loggedUser)) {
      router.push('/404');
      return;
    }
    getPopularList(1).then((res) => {
      setFilmData((prev) => {
        return {
          ...prev,
          filmList: res,
        };
      });
    });
  }, []);

  useEffect(() => {
    getPopularList(filmData.page).then((res) => {
      setFilmData((prev) => {
        return {
          ...prev,
          filmList: [...prev.filmList, ...res],
        };
      });
    });
  }, [filmData.page]);

  // load more button event
  const incrementPage = () => {
    setFilmData((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
      };
    });
  };
  const showMoviesByGenre = (genreObject) => {
    getMoviesByGenre(genreObject.id, 1).then((response) => {
      setFilmData({
        page: 1,
        filmList: response,
      });
    });
    setGenreName({ ...genreObject });
  };
  return (
    <div className="relative">
      <Head>
        <title>Personal Blog </title>
      </Head>
      <Header>
        <MenuBlock />
      </Header>
      <SearchContainer />
      <div className="flex flex-col md:flex-row">
        <GenreContainer
          onClick={(genreObject) => showMoviesByGenre(genreObject)}
        />
        <FilmList
          genre={genreName && genreName.name}
          filmList={filmData.filmList}
          onClick={incrementPage}
        />
      </div>
    </div>
  );
}
