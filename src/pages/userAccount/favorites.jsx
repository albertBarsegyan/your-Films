import Head from 'next/head';
import Footer from '../../components/atoms/Footer';
import Header from '../../components/atoms/Header';
import FilmBlock from '../../components/filmBlock/FilmContainer/FilmBlock';
import GenreContainer from '../../components/filmBlock/genres/GenreContainer';
import SearchContainer from '../../components/search/SearchContainer';
import MenuBlock from '../../components/userMenu/MenuBlock';

export default function Favorites() {
  let localFavoriteObject;
  let localUser;
  if (process.browser) {
    localUser = JSON.parse(localStorage.getItem('loggedUser'));
    localFavoriteObject = localStorage.getItem('favoriteList')
      ? JSON.parse(localStorage.getItem('favoriteList')).find(
          (favoriteObject) => favoriteObject.email === localUser.email
        )
      : undefined;
  }

  return (
    <div className="relative">
      <Head>
        <title>Personal Blog </title>
      </Head>
      <Header>
        <MenuBlock />
      </Header>
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-center text-3xl text-primary border-b border-primary w-1/6 py-2">
          Favorites
        </h3>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-5 mx-5 justify-center my-5">
        {localFavoriteObject && localFavoriteObject.favoriteList.length > 0 ? (
          localFavoriteObject.favoriteList.map((favorite) => {
            return (
              <FilmBlock makeFavorite key={favorite.id} filmObject={favorite} />
            );
          })
        ) : (
          <div className="w-full">
            <p className="text-primary text-center text-4xl">
              There isn&rsquo;t any favorite Movie
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
