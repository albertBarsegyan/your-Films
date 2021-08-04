import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect, useReducer } from 'react';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import FilmList from '../components/filmBlock/FilmContainer/FilmList';
import SearchContainer from '../components/search/SearchContainer';
import MenuBlock from '../components/userMenu/MenuBlock';
import isObjectEmpty from '../helpers/isObjectEmpty';
import { getMoviesByGenre, getSearchedFilms } from '../services/genreService';

export default function User() {
  const router = useRouter();
  const [filmData, setFilmData] = useState({
    filmList: [],
    page: 1,
  });
  const [genre, setGenre] = useState({ id: 18, name: 'Search Film' });

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
    return () => {
      setFilmData({ filmList: [], page: 1 });
    };
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

  const handleSearch = (query, page) => {
    if (query.length > 0) {
      getSearchedFilms(query, page).then((data) =>
        setFilmData({ filmList: data, page: 1 })
      );
    }
  };
  return (
    <div className="relative">
      <Head>
        <title>Search Film </title>
      </Head>
      <Header>
        <MenuBlock />
      </Header>
      <SearchContainer onChange={handleSearch} />
      <div className="flex flex-col md:flex-row">
        <FilmList
          genre={genre && genre.name}
          filmList={filmData.filmList}
          onClick={incrementPage}
        />
      </div>
      <Footer />
    </div>
  );
}
