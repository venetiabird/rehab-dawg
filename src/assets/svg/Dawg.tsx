import React from 'react';
import styled from 'styled-components';
import { GuideDog } from '@styled-icons/foundation/GuideDog';

const Dawg = styled(GuideDog)`
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