import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {
  purple,
} from '../utils/constants';

export interface ButtonStyleProps { background?: string; color?: string; }
const buttonStyle = `
  border: none;
  font-size: 12px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 800;
  z-index: 1;
  text-decoration: none;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`;

export const ButtonBaseWithLink = styled(Link)<ButtonStyleProps>`
${buttonStyle}
  color: ${props => props.color || 'white'};
  background-color: ${props => props.background || purple};
`;