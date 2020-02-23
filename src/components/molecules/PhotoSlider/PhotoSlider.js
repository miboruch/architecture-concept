import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby';
import Arrow from '../../atoms/Arrow/Arrow';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
  }
`;

const StyledSlider = styled(Slider)`
  z-index: 0;
  width: 100%;
  height: 300px;

  ${({ theme }) => theme.mq.standard} {
    height: 360px;
  }
`;

const StyledImage = styled(GatsbyImage)`
  height: 300px;
  object-fit: cover;

  ${({ theme }) => theme.mq.standard} {
    height: 360px;
  }
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
`;

const ArrowWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 2rem;
`;

const StyledReversedArrowWrapper = styled.div`
  transform: rotate(180deg);
`;

const StyledTitleParagraph = styled(Paragraph)`
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.family.avanti};
`;

const PhotoSlider = ({ images, content }) => {
  const [currentPhotoSlide, setCurrentPhotoSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    fade: true,
    initialSlide: 0,
    afterChange: current => {
      setCurrentPhotoSlide(current);
    }
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <StyledImage fluid={image.childImageSharp.fluid} key={index} />
        ))}
      </StyledSlider>
      <ArrowWrapper>
        <Arrow
          onClick={() => sliderRef.current.slickPrev()}
          colorTheme='dark'
        />
        <StyledReversedArrowWrapper>
          <Arrow
            onClick={() => sliderRef.current.slickNext()}
            colorTheme='dark'
          />
        </StyledReversedArrowWrapper>
      </ArrowWrapper>
      <StyledContentWrapper>
        <Paragraph>{content[currentPhotoSlide].heading}</Paragraph>
        <Link to={content[currentPhotoSlide].url}>
          <StyledTitleParagraph title='true'>OPEN</StyledTitleParagraph>
        </Link>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default PhotoSlider;
