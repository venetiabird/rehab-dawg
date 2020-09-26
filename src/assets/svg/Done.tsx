import React from 'react';
import styled from 'styled-components';
import { Bone } from '@styled-icons/fa-solid/Bone';

const DoneDawg = styled(Bone)`
  height: 60px;
  width: 60px;
`;

interface Props {
  fill?: string;
}

export const DoneWalk: React.FC<Props> = ({ fill = 'black'}) => (
  <DoneDawg color={fill}/>
);