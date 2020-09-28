import React from 'react';
import styled from 'styled-components';
import { Pause } from '@styled-icons/fa-solid/Pause';

const PauseDawg = styled(Pause)`
  height: 50px;
  width: 50px;
`;

interface Props {
  fill?: string;
  handleClick: () => void;
}

export const PauseWalk: React.FC<Props> = ({ fill = 'black',   handleClick }) => (
  <a href='#'>
    <PauseDawg color={fill} onClick={handleClick} />
  </a> 
);