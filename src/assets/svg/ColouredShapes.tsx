import React from 'react';
import styled from 'styled-components';
import { Paw } from '@styled-icons/ionicons-solid/Paw';
import { HatCowboy } from '@styled-icons/fa-solid/HatCowboy';

const DawgPaw = styled(Paw)`
  height: 20px;
  display: inline;
  width: 20px;
  margin-right: 10px;
`;

const DawgHat = styled(HatCowboy)`
  height: 20px;
  display: inline;
  width: 20px;
  margin-right: 10px;
`;

const Svg = styled.svg`
  height: 8px;
  display: inline;
  width: 8px;
  margin-right: 8px;
`;

interface IProps {
  fill?: string;
}

export const ColouredSquare: React.FC<IProps> = ({ fill = 'black' }) => (
  <Svg role="img" width='8' height='8' fill={fill}>
    {/* <circle cx="4" cy="4" r="4" /> */}
    <rect width='10' height='10' x='0' y='0'/>
  </Svg>
);

export const ColouredPaw: React.FC<IProps> = ({ fill = 'black'}) => (
  <DawgPaw color={fill} />
);

export const ColouredHat: React.FC<IProps> = ( { fill = 'black'}) => (
  <DawgHat color={fill} />
);
