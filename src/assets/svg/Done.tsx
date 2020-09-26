import React from 'react';
import styled from 'styled-components';
import { CloudDone } from '@styled-icons/material-twotone/CloudDone';

const DoneDawg = styled(CloudDone)`
  height: 70px;
  width: 70px;
  margin-left: 0px;
`;

interface Props {
  fill?: string;
}

export const DoneWalk: React.FC<Props> = ({ fill = 'black'}) => (
  <DoneDawg color={fill}/>
);