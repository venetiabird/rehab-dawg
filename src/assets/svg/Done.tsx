import React from 'react';
import styled from 'styled-components';
import { Bone } from '@styled-icons/fa-solid/Bone';

const DawgBone = styled(Bone)`
  height: 15px;
  width: 15px;
  padding: 5px;
`;

interface IProps {
  fill?: string;
}

export const DoneActivity: React.FC<IProps> = ({ fill = 'black'}) => (
  <DawgBone color={fill}>
    Done!
  </DawgBone>
);