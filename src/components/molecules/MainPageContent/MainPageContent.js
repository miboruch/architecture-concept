import React from 'react';
import styled from 'styled-components';
import { Scene, Controller } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { easeExpInOut } from 'd3-ease';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  padding: 80px 2rem 2rem;
  background-color: #f7f7f7;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTitle = styled(Paragraph)`
  font-size: 26px;
  font-family: ${({ theme }) => theme.font.family.avanti};
  position: relative;
  width: 160px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1rem;
    width: 25px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-50%);
    transition: all 0.45s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledContentParagraph = styled(Paragraph)`
  font-size: 14px;
  color: #2d2d2d;
  margin: 2.5rem 0;
`;

const StyledLine = styled.div`
  height: 1px;
  width: 60px;
  background-color: #2d2d2d;
  margin: 4rem 0;
`;

const FlexWrapper = styled.div`
  ${({ theme }) => theme.mq.standard} {
    padding: 2rem;
  }
`;

const MainPageContent = () => {
  return (
    <StyledWrapper>
      <FlexWrapper>
        <Controller>
          <Scene offset={100} triggerHook={1} reverse={true} duration={1}>
            {(progress, event) => (
              <div>
                <Tween
                  from={{
                    opacity: 0,
                    visibility: 'hidden',
                    x: '-50px',
                    ease: easeExpInOut
                  }}
                  to={{
                    opacity: 1,
                    x: 0,
                    visibility: 'visible',
                    ease: easeExpInOut
                  }}
                  paused={true}
                  playState={
                    event.type === 'enter' &&
                    event.scrollDirection === 'FORWARD'
                      ? 'play'
                      : event.type === 'enter' &&
                        event.scrollDirection === 'REVERSE'
                      ? 'reverse'
                      : null
                  }
                >
                  <div>
                    <StyledTitle>Architecture concept</StyledTitle>
                    <StyledContentParagraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </StyledContentParagraph>
                  </div>
                </Tween>
                <StyledLine />
              </div>
            )}
          </Scene>
        </Controller>
      </FlexWrapper>

      <FlexWrapper>
        <StyledContentParagraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </StyledContentParagraph>

        <StyledContentParagraph>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </StyledContentParagraph>
      </FlexWrapper>
    </StyledWrapper>
  );
};

export default MainPageContent;
