import React, { Component } from 'react';
import Link from 'next/link';
import CommonButton from '../components/CommonButton';
import RegisterComponent from '../components/RegisterComponent';
import Header from '../components/atoms/Header';
import Footer from '../components/atoms/Footer';
import Head from 'next/head';
export default class Home extends Component {
  render() {
    return (
      <div className="bg-background-1 h-screen mix-blend-darken bg-gray-900">
        <Head>
          <title>Welcome to Dark-Blog </title>
        </Head>
        <Header>
          <Link href="/login" passHref>
            <CommonButton buttonInnerText="Sign in" />
          </Link>
        </Header>
        <RegisterComponent />
        <Footer />
      </div>
    );
  }
}
