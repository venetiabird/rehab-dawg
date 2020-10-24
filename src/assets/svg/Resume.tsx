import React from 'react';
import styled from 'styled-components';
import { Play } from '@styled-icons/fa-solid/Play';

const ResumeDawg = styled(Play)`
  height: 30px;
  width: 30px;
`;

interface IProps {
  fill?: string;
  handleClick: () => void;
}

export const ResumeWalk: React.FC<IProps> = ({ fill = 'black', handleClick}) => (
  <a href='#'>
    <ResumeDawg color={fill} onClick={handleClick}/>
  </a>
);