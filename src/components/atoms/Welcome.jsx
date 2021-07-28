import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div className="w-full h-80 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="my-5 w-4/5">
            <p className="text-4xl text-center">Welcome to </p>
            <p className="text-4xl text-center">Dark-Blog</p>
          </div>
          <div>
            <p className="text-xl text-center">
              Here you can add your posts and comments.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
