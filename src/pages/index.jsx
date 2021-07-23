import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import CommonForm from '../components/CommonForm';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <CommonForm />
        {/* <Footer /> */}
      </div>
    );
  }
}
