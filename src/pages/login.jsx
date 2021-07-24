import React, { Component } from 'react';
import CommonButton from '../components/CommonButton';
import Header from '../components/Header';
import Link from 'next/link';
import CommonLogin from '../components/CommonLogin';
import Footer from '../components/Footer';


export default class Login extends Component {
 
  render() {
    return (
      <>
     
        <div>
          <Header>
            <div className="absolute right-10">
              <Link href="/" passHref>
                <CommonButton buttonInnerText="Register" />
              </Link>
            </div>
          </Header>
          <CommonLogin />
        </div>
        <Footer />
      </>
    );
  }
}
