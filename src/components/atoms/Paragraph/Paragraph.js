import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const Paragraph = styled(animated.p)`
  margin: 0;
  left: 0;
  letter-spacing: 2px;
  color: #000;

  ${({ alpha }) =>
    alpha &&
    css`
      color: rgba(255, 255, 255, 0.5);
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.font.size.s};
    `}
  
  ${({ medium }) =>
    medium &&
    css`
      font-size: ${({ theme }) => theme.font.size.m};
    `}
  
  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.font.size.l};
    `}
  
  ${({ xlarge }) =>
    xlarge &&
    css`
      font-size: ${({ theme }) => theme.font.size.xl};
    `}
`;

export default Paragraph;
