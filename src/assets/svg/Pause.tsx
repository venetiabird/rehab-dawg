import React from 'react';
import styled from 'styled-components';
import { Pause } from '@styled-icons/fa-solid/Pause';

const PauseDawg = styled(Pause)`
  height: 30px;
  width: 30px;
`;

interface IProps {
  fill?: string;
  handleClick: () => void;
}

export const PauseWalk: React.FC<IProps> = ({ fill = 'black',   handleClick }) => (
  <a href='#'> 
    <PauseDawg color={fill} onClick={handleClick} />
  </a> 
);