import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderContent from '../SliderContent/SliderContent';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
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
  bottom: 2rem;
  left: 2rem;
`;

const StrokedParagraph = styled.p`
  font-size: 18px;
  margin: 0;
  color: #fff;
`;

const StyledLine = styled.div`
  width: 1px;
  height: 70px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 75px;
`;

const StyledLineDark = styled(StyledLine)`
  background-color: ${({ theme }) => theme.color.backgroundDark};
  transform: translateY(100%);
`;

const MainSlider = ({ images, content }) => {
  const { currentSlide, setSlide } = useContext(CurrentSlideContext);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    fade: true,
    initialSlide: 3,
    afterChange: current => {
      setSlide(current);
    }
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings} ref={sliderRef}>
        {images.map((item, index) => (
          <SliderContent
            image={item}
            index={index}
            key={index}
            content={content[index]}
          />
        ))}
      </StyledSlider>
      <StyledSlideInfo>
        <StrokedParagraph>{currentSlide + 1}</StrokedParagraph>
        <StrokedParagraph>/4</StrokedParagraph>
      </StyledSlideInfo>
      <StyledLine />
      <StyledLineDark />
    </StyledWrapper>
  );
};

export default MainSlider;
