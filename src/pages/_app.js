import { useState, useEffect } from 'react';
import ScrollTopButton from '../components/scrollTopButton/ScrollTopButton';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <div>
      {isVisible && <ScrollTopButton />}

      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
