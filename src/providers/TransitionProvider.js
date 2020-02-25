import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TransitionLink from 'gatsby-plugin-transition-link';
import { TimelineMax } from 'gsap';
import { easeExpOut } from 'd3-ease';

const StyledLink = styled(TransitionLink)`
  text-decoration: none;
  color: #fff;
`;

const createTransitionBox = () => {
  const body = document.body;
  const element = document.createElement('div');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const style = element.style;
  style.zIndex = 1000;
  style.position = 'fixed';
  style.bottom = 0;
  style.backgroundColor = '#eee';
  style.width = `${vw}px`;
  style.height = `${vh}px`;
  style.transform = `translateX(${vw})px`;

  body.appendChild(element);
  return { element, body, vw };
};

const TransitionProvider = ({ children, to }) => {
  const exitAnimation = () => {
    const { element, body, vw } = createTransitionBox();
    const timeline = new TimelineMax();

    timeline
      .fromTo(
        element,
        0.5,
        { transform: `translateX(${-vw}px)`, ease: easeExpOut },
        { transform: 'translateX(0)' }
      )
      .to(element, 0.6, {
        transform: `translateX(0)`,
        onComplete: () => {
          body.removeChild(element);
        }
      });
  };

  const enterAnimation = () => {
    const { element, body, vw } = createTransitionBox();
    const timeline = new TimelineMax();

    timeline.to(element, 0.8, {
      transform: `translateX(${vw}px)`,
      delay: 0.5,
      ease: easeExpOut,
      onComplete: () => {
        body.removeChild(element);
      }
    });
  };

  return (
    <StyledLink
      to={to}
      exit={{
        trigger: ({ exit, node }) => exitAnimation(exit, node),
        length: 0.8
      }}
      entry={{
        delay: 0.5,
        trigger: ({ entry, node }) => enterAnimation(entry, node)
      }}
    >
      {children}
    </StyledLink>
  );
};

TransitionProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  to: PropTypes.string.isRequired
};

export default TransitionProvider;
