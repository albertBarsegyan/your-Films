import React from 'react';


import PropTypes from 'prop-types';
import CommonMovieIcon from '../headerIcon/CommonMovieIcon';
export default function Header({ children }) {
  return (
    <div className="flex items-center justify-center my-4 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-center gap">
        <div>
          <CommonMovieIcon />
        </div>

        <div className="hidden md:block">
          <span className="text-4xl ">Dark-Blog</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 md:mt-0 md:absolute right-10 gap-5">
        {children}
      </div>
    </div>
  );
}
Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
