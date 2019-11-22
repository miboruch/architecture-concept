import React, { useState } from 'react';

export const CurrentSlideContext = React.createContext({
  currentSlide: 0,
  setSlide: () => {}
});

const CurrentSlideContextProvider = ({ children }) => {
  const [slide, setSlide] = useState(0);

  const setCurrentSlide = index => {
    setSlide(index);
  };

  return (
    <CurrentSlideContext.Provider
      value={{
        currentSlide: slide,
        setSlide: setCurrentSlide
      }}
    >
      {children}
    </CurrentSlideContext.Provider>
  );
};

export default CurrentSlideContextProvider;
