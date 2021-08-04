import Head from 'next/head';
import Footer from '../../components/atoms/Footer';
import Header from '../../components/atoms/Header';
import FilmBlock from '../../components/filmBlock/FilmContainer/FilmBlock';
import GenreContainer from '../../components/filmBlock/genres/GenreContainer';
import SearchContainer from '../../components/search/SearchContainer';
import UserInfo from '../../components/userAccount/UserInfo';
import MenuBlock from '../../components/userMenu/MenuBlock';

export default function UserPage() {
  return (
    <div className="relative">
      <Head>
        <title>Personal Blog </title>
      </Head>
      <Header>
        <MenuBlock />
      </Header>

      <UserInfo />

      <Footer />
    </div>
  );
}
