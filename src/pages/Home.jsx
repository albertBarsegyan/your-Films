import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link href="./home">
          <a>Home</a>
        </Link>
        <Link href="./about">
          <a>About</a>
        </Link>

        <p>Home page</p>
        <Footer />
      </div>
    );
  }
}
