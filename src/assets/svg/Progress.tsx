import React from 'react';
import styled from 'styled-components';
import { LineChart } from '@styled-icons/boxicons-regular/LineChart';

const DawgProgress = styled(LineChart)`
  max-width: 45px
  height: 45px;
  width: 45px;
`;

interface IProps {
  fill?: string;
}

export const RehabProgress: React.FC<IProps> = ({ fill = 'black' }) => (
  <DawgProgress color={fill} />
);