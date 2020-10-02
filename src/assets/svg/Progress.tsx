import React from 'react';
import styled from 'styled-components';
import { LineChart } from '@styled-icons/boxicons-regular/LineChart';

const DawgProgress = styled(LineChart)`
  max-width: 36px
`;


export const RehabProgress: React.FC = () => (
  <DawgProgress />
);