import React, { Component } from 'react';
import CommonForm from './CommonForm';
import Welcome from './Welcome';

export default class RegisterComponent extends Component {
  render() {
    return (
      <div className="flex flex-row items-center justify-center">
        <CommonForm />
        <Welcome />
      </div>
    );
  }
}
