import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="my-5">
            <h1 className="text-4xl">Welcome to Dark-Blog</h1>
          </div>
          <div>
            <p className="text-xl">Here you can add your posts and comments.</p>
          </div>
        </div>
      </div>
    );
  }
}
