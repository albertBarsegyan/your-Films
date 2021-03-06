import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import FilmList from '../components/filmBlock/FilmContainer/FilmList';
import SearchContainer from '../components/search/SearchContainer';
import MenuBlock from '../components/userMenu/MenuBlock';
import { handleFavoriteButtonEvent } from '../handlers/handleFavoriteButtonEvent';
import isObjectEmpty from '../helpers/isObjectEmpty';
import { getSearchedFilms, getPopularList } from '../services/genreService';

export default function User() {
  const router = useRouter();
  const [filmData, setFilmData] = useState({
    filmList: [],
    page: 1,
  });
  const [searchInput, setSearchInput] = useState('');
  const genre = { id: 18, name: 'Search Film' };
  const [favoriteList, setFavoriteList] = useState([]);
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
    getPopularList(1).then((data) => {
      setFilmData({ filmList: data, page: 1 });
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
        if (searchInput.length === 0) {
          getPopularList(filmData.page).then((data) => {
            setFilmData((prev) => {
              return {
                filmList: [...prev.filmList, ...data],
                page: prev.page + 1,
              };
            });
          });
          return;
        }
        getSearchedFilms(searchInput, filmData.page).then((data) => {
          setFilmData((prev) => {
            return {
              filmList: [...prev.filmList, ...data],
              page: prev.page + 1,
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
      <SearchContainer
        onChange={(inputValue, page) => {
          setSearchInput(inputValue);
          handleSearch(inputValue, page);
        }}
      />
      <div className="flex flex-col md:flex-row">
        {filmData.filmList.length > 0 ? (
          <FilmList
            handleFavoriteEvent={(filmObject) =>
              handleFavoriteButtonEvent(filmObject, setFavoriteList)
            }
            genre={genre && genre.name}
            filmList={filmData.filmList}
            onClick={incrementPage}
            favList={favoriteList}
          />
        ) : (
          <div className="flex w-full text-center justify-center items-center">
            <p className="text-primary text-4xl">There isn`t any results</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
