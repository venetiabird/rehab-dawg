import React from 'react';
import styled from 'styled-components';
import { Bone } from '@styled-icons/fa-solid/Bone';

const DoneDawg = styled(Bone)`
  height: 15px;
  width: 15px;
  padding: 5px;
`;

interface IProps {
  fill?: string;
}

export const DoneWalk: React.FC<IProps> = ({ fill = 'black'}) => (
  <DoneDawg color={fill}>
    Done!
  </DoneDawg>
);