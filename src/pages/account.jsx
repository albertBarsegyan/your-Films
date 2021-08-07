import Head from 'next/head';
import Footer from '../components/atoms/Footer';
import Header from '../components/atoms/Header';
import MenuBlock from '../components/userMenu/MenuBlock';

export default function Account() {
  let loggedUser;
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  return (
    <div className="relative">
      <Head>
        <title>Film list </title>
      </Head>
      <Header>
        <MenuBlock />
      </Header>

      <Footer />
    </div>
  );
}
