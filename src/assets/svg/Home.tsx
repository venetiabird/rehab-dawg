import React from 'react';
import styled from 'styled-components';
import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';

const DawgHouse = styled(HomeSmile)`
  max-width: 36px
  height: 36px;
  width: 36px;
`;
interface IProps {
  fill?: string;
}

export const RehabHome: React.FC<IProps> = ({ fill = 'black' }) => (
  <DawgHouse color={fill}/>
);