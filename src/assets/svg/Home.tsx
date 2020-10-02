import React from 'react';
import styled from 'styled-components';
import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';

const DawgHouse = styled(HomeSmile)`
  max-width: 36px
`;


export const RehabHome: React.FC = () => (
  <DawgHouse />
);