import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';

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

const StyledSlideInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const StyledSlideParagraph = styled.p`
  color: #fff;
  transition: all 1s ease;
`;

const StyledSlidePages = styled(StyledSlideParagraph)`
  color: rgba(0, 0, 0, 0.4);
`;

const StyledLine = styled.div`
  width: 10px;
  height: 1px;
  background: #fff;
  margin: 0 1rem;
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
  const { currentSlide, setSlide } = useContext(CurrentSlideContext);

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
    centerMode: true,
    initialSlide: 3,
    afterChange: current => {
      setSlide(current);
    }
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings} ref={sliderRef}>
        <SliderContent image={images.image1} index={0} />
        <SliderContent image={images.image2} index={1} />
        <SliderContent image={images.image3} index={2} />
        <SliderContent image={images.image4} index={3} />
      </StyledSlider>
      <StyledSlideInfo>
        <StyledSlideParagraph>{currentSlide + 1}</StyledSlideParagraph>
        <StyledLine />
        <StyledSlidePages>4</StyledSlidePages>
      </StyledSlideInfo>
    </StyledWrapper>
  );
};

export default MainSlider;
