import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../../components/atoms/Footer';
import Header from '../../components/atoms/Header';
import FilmBlock from '../../components/filmBlock/FilmContainer/FilmBlock';
import MenuBlock from '../../components/userMenu/MenuBlock';
import LOGGED_USER_FAVORITE_OBJECT from '../../constants/userFavoriteList';
import { handleFavoriteButtonEvent } from '../../handlers/handleFavoriteButtonEvent';
export default function Favorites() {
  const [userFavoriteList, setUserFavoriteList] = useState(
    LOGGED_USER_FAVORITE_OBJECT && LOGGED_USER_FAVORITE_OBJECT.favoriteList
  );
  console.log(LOGGED_USER_FAVORITE_OBJECT);

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
        {userFavoriteList && userFavoriteList.length > 0 ? (
          userFavoriteList.map((favorite) => {
            return (
              <FilmBlock
                onClick={() =>
                  handleFavoriteButtonEvent(favorite, setUserFavoriteList)
                }
                makeFavorite
                key={favorite.id}
                filmObject={favorite}
              />
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
