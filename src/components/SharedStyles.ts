import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {
  colors,
} from '../utils/constants';

export interface ButtonStyleProps { background?: string; color?: string; }
const buttonStyle = `
  border: none;
  font-size: 12px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 400;
  z-index: 1;
  text-decoration: none;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`;

export const Logo = styled.h2`
  font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 900;
  font-size: 2em;
  border-radius: 1;
  padding: 0;
  color: black;
  align-items: center;
`;


export const DawgContainer = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonBaseWithLink = styled(Link)<ButtonStyleProps>`
  ${buttonStyle}
  color: ${props => props.color || 'white'};
  background-color: ${props => props.background || colors.blue};
`;

export const DoneButton = styled(ButtonBaseWithLink)`
  background: black;
  width: 25%;
`;
