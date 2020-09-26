import React from 'react';
import styled from 'styled-components';
import { Play } from '@styled-icons/fa-solid/Play';

const ResumeDawg = styled(Play)`
  height: 50px;
  width: 50px;
  margin-left: 30px;
`;

interface Props {
  fill?: string;
}

export const ResumeWalk: React.FC<Props> = ({ fill = 'black'}) => (
  <ResumeDawg color={fill}/>
);