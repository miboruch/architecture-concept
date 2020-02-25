import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useTrail, animated, useSpring } from 'react-spring';
import { MenuContext } from '../../../providers/MenuContext';
import { easeExpOut } from 'd3-ease';
import SocialMediaLinks from '../../atoms/SocialMediaLinks/SocialMediaLinks';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ colorTheme }) =>
    colorTheme === 'dark' ? '#2d2d2d' : '#fff'};
  color: ${({ colorTheme }) => (colorTheme === 'dark' ? '#fff' : '#2d2d2d')};
  position: fixed;
  top: 0;
  right: 0;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 1s ease;
  z-index: 500;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mq.standard} {
    width: 35%;
    justify-content: flex-end;
  }
`;

const StyledBorderLine = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
  width: 1px;
  background: ${({ colorTheme }) =>
    colorTheme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)'};
  transition: height 0.8s 0.5s ease;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 2rem;

  ${({ theme }) => theme.mq.standard} {
    align-items: flex-end;
  }
`;

const OverflowBox = styled.div`
  overflow: hidden;
`;

const StyledListItem = styled(animated.li)`
  font-family: ${({ theme }) => theme.font.family.futura};
  letter-spacing: 2px;
  padding-bottom: 1rem;
  font-weight: lighter;
  font-size: 40px;
  color: inherit;
`;

const StyledLine = styled.div`
  width: 80px;
  height: 1px;
  background-color: ${({ colorTheme }) =>
    colorTheme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)'};
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const SocialLinksWrapper = styled(animated.div)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  ${({ theme }) => theme.mq.standard} {
    right: auto;
    left: 2rem;
  }
`;

const Menu = ({ colorTheme }) => {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  const {
    architecture: { contents }
  } = useStaticQuery(graphql`
    query {
      architecture {
        contents {
          heading
          url
        }
      }
    }
  `);

  const menuTrail = useTrail(contents.length, {
    opacity: isOpen ? 1 : 0,
    transform: isOpen
      ? 'matrix(1,0,0,1,0,0)'
      : 'matrix(0.99, 0.33, 0, 1, 0, 100)',
    from: { opacity: 0, transform: 'matrix(0.99, 0.33, 0, 1, 0, 100)' },
    reverse: !isOpen,
    delay: 700
  });

  const socialLinksAnimation = useSpring({
    config: { duration: 1000, easing: easeExpOut },
    from: { opacity: 0 },
    to: { opacity: isOpen ? 1 : 0 },
    delay: isOpen ? 800 : 0
  });

  return (
    <StyledWrapper isOpen={isOpen} colorTheme={colorTheme}>
      <StyledBorderLine isOpen={isOpen} />
      <StyledList>
        {menuTrail.map((props, index) => (
          <StyledLink to={contents[index].url} key={index}>
            <OverflowBox>
              <StyledListItem style={props} onClick={toggleMenu}>
                {contents[index].heading}
              </StyledListItem>
            </OverflowBox>
          </StyledLink>
        ))}
        <StyledLine colorTheme={colorTheme} />
      </StyledList>
      <SocialLinksWrapper style={socialLinksAnimation}>
        <SocialMediaLinks colorTheme='dark' />
      </SocialLinksWrapper>
    </StyledWrapper>
  );
};

Menu.propTypes = {
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

export default Menu;
