import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  z-index: 0;
  width: 100%;
  height: 100vh;
`;

const useScrollWheel = () => {
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

const MainSlider = ({ images }) => {
  const scroll = useScrollWheel(); /* change scroll unit (/100?)*/

  useEffect(() => {
    scroll > 0 ? sliderRef.current.slickPrev() : sliderRef.current.slickNext();
  }, [scroll]);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2400,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    centerMode: true
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings} ref={sliderRef}>
        <SliderContent image={images.image1} />
        <SliderContent image={images.image2} />
        <SliderContent image={images.image3} />
        <SliderContent image={images.image4} />
      </StyledSlider>
    </StyledWrapper>
  );
};

export default MainSlider;
