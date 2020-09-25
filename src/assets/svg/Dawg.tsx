import React from 'react';
import styled from 'styled-components';
import { GuideDog } from '@styled-icons/foundation/GuideDog';

const Dawg = styled(GuideDog)`
  height: 30px;
  width: 30px;
  margin-left: 0px;
`;

interface Props {
  fill?: string;
}

export const RehabDawg: React.FC<Props> = ({ fill = 'black'}) => (
  <Dawg color={fill}/>
);