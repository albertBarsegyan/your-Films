import React, { Component } from 'react';
import Link from 'next/link';
import CommonButton from '../components/CommonButton';
import RegisterComponent from '../components/RegisterComponent';
import Header from '../components/atoms/Header';
import Footer from '../components/atoms/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
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
