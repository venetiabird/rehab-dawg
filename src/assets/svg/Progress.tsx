import React from 'react';
import styled from 'styled-components';
import { LineChart } from '@styled-icons/boxicons-regular/LineChart';

const DawgProgress = styled(LineChart)`
  max-width: 36px
  height: 36px;
  width: 36px;
`;

interface IProps {
  fill?: string;
}

export const RehabProgress: React.FC<IProps> = ({ fill = 'black' }) => (
  <DawgProgress color={fill} />
);