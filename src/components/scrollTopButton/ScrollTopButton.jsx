import React from 'react';
import PrimaryButton from '../buttons/PrimaryButton';

export default function ScrollTopButton({ onClick }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="fixed right-20 bottom-10 z-50">
      <div>
        <PrimaryButton type="button" onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </PrimaryButton>
      </div>
    </div>
  );
}
