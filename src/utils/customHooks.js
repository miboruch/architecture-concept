import { useEffect, useState } from 'react';

export const useScrollWheel = () => {
  const [scrollDelta, setScrollDelta] = useState(0);

  useEffect(() => {
    window.addEventListener('wheel', event => {
      setScrollDelta(event.wheelDelta);
    });
    return () =>
      window.removeEventListener('wheel', event => {
        setScrollDelta(event.wheelDelta);
      });
  }, []);

  return scrollDelta;
};

export const useLoadingEffect = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const changeLoading = window.setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.clearTimeout(changeLoading);
    };
  }, []);

  return isLoading;
};

export const useScrollPosition = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const setPosition = () => {
      setIsOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', setPosition);
    setPosition();

    return () => window.removeEventListener('scroll', setPosition);
  }, []);

  return isOnTop;
};
