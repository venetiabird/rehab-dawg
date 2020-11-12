import React from 'react';
import styled from 'styled-components';
import { GuideDog } from '@styled-icons/foundation/GuideDog';
import { InfinityOutline }  from '@styled-icons/typicons/InfinityOutline'
import { getColor } from '../../utils/constants'

const Dawg = styled(GuideDog)`
  height: 45px;
  width: 45px;
  margin-left: 0px;
`;

const Figure8Dawg = styled(InfinityOutline)`
  height: 45px;
  width: 45px;
  margin-left: 0px;
`;

interface IProps {
  fill?: string;
}

export const RehabDawg: React.FC<IProps> = ({ fill = 'black'}) => (
  <Dawg color={fill}/>
);

export const RehabFigure8Dawg: React.FC<IProps> = ({ fill = 'black' }) => (
  <Figure8Dawg color={getColor(fill)} />
);