import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';
import Paragraph from '../Paragraph/Paragraph';

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
  bottom: 1rem;
  right: 1rem;
`;

const StrokedParagraph = styled.p`
  font-size: 70px;
  margin: 0;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;

  ${({ theme }) => theme.mq.mobileL} {
    font-size: 90px;
  }
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
  const scroll = useScrollWheel();
  const { currentSlide, setSlide } = useContext(CurrentSlideContext);

  /* convert object to array */
  const keys = Object.keys(images);
  const imagesArray = [];
  keys.map(item => {
    imagesArray.push(images[item]);
  });

  useEffect(() => {
    scroll > 0 ? sliderRef.current.slickPrev() : sliderRef.current.slickNext();
  }, [scroll]);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
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
        {imagesArray.map((item, index) => (
          <SliderContent image={item} index={index} key={index} />
        ))}
      </StyledSlider>
      <StyledSlideInfo>
        <StrokedParagraph>{currentSlide + 1}</StrokedParagraph>
        <StrokedParagraph>/4</StrokedParagraph>
      </StyledSlideInfo>
    </StyledWrapper>
  );
};

export default MainSlider;
