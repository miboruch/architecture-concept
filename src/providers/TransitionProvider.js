import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { Keyframes, Spring } from 'react-spring/renderprops-universal';
import { easeExpOut } from 'd3-ease';
import Paragraph from '../components/Paragraph/Paragraph';

const StyledDiv = styled(animated.div)`
  width: 100%;
  height: 100vh;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
  color: #fff;
`;

const TransitionProvider = () => {

  const enterPage = useSpring({
    config: {duration: 2000, easing: easeExpOut},
    from: {transform: 'translateX(0%)', opacity: 1},
    to: async (next, delay) => {
      await next({ transform: `translateX(-100%)`, opacity: 0 });
      await delay(1000);
      // await next({ transform: `translateX(-100%)` });
    }
  });
  const exitPage = useSpring({
    config: {duration: 2000, easing: easeExpOut},
    from: {transform: 'translateX(-100%)', opacity: 0},
    to: async next => {
      await next({ transform: `translateX(0%)`, opacity: 1 });
    }
  });
  const ToggleTransition = Keyframes.Spring({
    enter: async next => {
      await next({
        transform: 'translateX(0%)',
        from: { transform: 'translateX(-100%)' }
      });
    },
    exit: async next => {
      await next({
        transform: 'translateX(-100%)',
        from: { transform: 'translateX(0%)' }
      });
    }
  });
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        const mount = ['exiting', 'exited'].includes(transitionStatus);
        console.log(transitionStatus);
        console.log(`mount: ${mount}`);
        return (
          <StyledDiv style={mount ? exitPage : enterPage}>
            <StyledParagraph>michalboruch</StyledParagraph>
          </StyledDiv>
        );
      }}
    </TransitionState>
  );
};

export default TransitionProvider;

/*
 <Spring from={{transform: 'translateX(-100%)'}} to={{transform: `translateX(${mount ? '0': '100%'})`}}>
          {props => <StyledDiv style={props}/>}
        </Spring>
 */

/*
<ToggleTransition state={mount ? 'enter' : 'exit'} config={{duration: 1000}}>
            {props => (
              <StyledDiv style={props}/>
            )}
          </ToggleTransition>
 */

/*
CURRENT VERSION

<Spring
            from={{ transform: 'translateX(-100%)' }}
            to={{ transform: `translateX(${mount ? '0' : '-100%'})` }}
            config={{duration: 1000, easing: easeExpOut}}
          >
            {props => (
              <StyledDiv style={props}>
                <StyledParagraph>michalboruch</StyledParagraph>
              </StyledDiv>
            )}
          </Spring>

 */

/*

<ToggleTransition state={mount ? enter : exit} config={{duration: 1000}}>
            {props => (
              <StyledDiv style={props}>
                <StyledParagraph>michalboruch</StyledParagraph>
              </StyledDiv>
            )}
          </ToggleTransition>

 */


/*

<ToggleTransition
            config={{ duration: 1000, easing: easeExpOut }}
            state={mount ? 'exit' : 'enter'}
          >
            {props => (
              <StyledDiv style={props}>
                <StyledParagraph>michalboruch</StyledParagraph>
              </StyledDiv>
            )}
          </ToggleTransition>

 */
