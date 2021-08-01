import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../components/atoms/Header';
import FilmBlock from '../components/filmBlock/FilmContainer/FilmBlock';
import FilmList from '../components/filmBlock/FilmContainer/FilmList';
import GenreContainer from '../components/filmBlock/genres/GenreContainer';
import SearchContainer from '../components/search/SearchContainer';
import MenuBlock from '../components/userMenu/MenuBlock';
import isObjectEmpty from '../helpers/isObjectEmpty';

export default function User() {
  const router = useRouter();
  let loggedUser = {};
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser')) ?? {};
  }
  useEffect(() => {
    if (isObjectEmpty(loggedUser)) {
      router.push('/404');
      return;
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Personal Blog </title>
      </Head>
      <Header>
        <MenuBlock />
      </Header>
      <SearchContainer />
      <div className="flex flex-col md:flex-row">
        <GenreContainer />
        <FilmList />
      </div>
    </div>
  );
}
