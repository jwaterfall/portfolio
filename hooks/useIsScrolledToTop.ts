import { useEffect, useState } from 'react';

const useIsScrolledToTop = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  const handleScroll = () => {
    setIsScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolledToTop;
};

export default useIsScrolledToTop;
