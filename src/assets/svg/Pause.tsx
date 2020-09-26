import React from 'react';
import styled from 'styled-components';
import { Pause } from '@styled-icons/fa-solid/Pause';

const PauseDawg = styled(Pause)`
  height: 50px;
  width: 50px;
`;

interface Props {
  fill?: string;
}

export const PauseWalk: React.FC<Props> = ({ fill = 'black'}) => (
  <PauseDawg color={fill}/>
);