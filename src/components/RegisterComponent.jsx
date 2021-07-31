import React, { Component } from 'react';
import CommonForm from './CommonForm';
import Welcome from '../components/atoms/Welcome';

export default class RegisterComponent extends Component {
  render() {
    return (
      <div className="flex md:flex-row flex-col-reverse items-center justify-center">
        <CommonForm />
      </div>
    );
  }
}
