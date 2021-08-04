import Head from 'next/head';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import FilmBlock from '../components/filmBlock/FilmContainer/FilmBlock';
import GenreContainer from '../components/filmBlock/genres/GenreContainer';
import SearchContainer from '../components/search/SearchContainer';
import MenuBlock from '../components/userMenu/MenuBlock';

export default function Favorites() {
  let localFavoriteList = [];
  if (process.browser) {
    localFavoriteList = localStorage.getItem('favoriteList')
      ? JSON.parse(localStorage.getItem('favoriteList'))
      : [];
  }
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
        <div>
          <div className="flex items-center justify-center mb-4">
            <h3 className="text-center text-3xl text-primary border-b border-primary w-1/6 py-2">
              Favorites
            </h3>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-5 mx-5 justify-center my-5">
            {localFavoriteList.map((favorite) => {
              return <FilmBlock key={favorite.id} filmObject={favorite} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
