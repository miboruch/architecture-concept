import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const Paragraph = styled(animated.p)`
  margin: 0;
  left: 0;
  letter-spacing: 2px;
  color: #fff;

  ${({ alpha }) =>
    alpha &&
    css`
      color: rgba(255, 255, 255, 0.5);
    `}
`;

export default Paragraph;
