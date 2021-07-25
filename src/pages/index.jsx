import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

import CommonButton from '../components/CommonButton';
import RegisterComponent from '../components/RegisterComponent';

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
