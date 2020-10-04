import React from 'react';
import styled from 'styled-components';
import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';

const DawgHouse = styled(HomeSmile)`
  max-width: 45px
  height: 45px;
  width: 45px;
`;
interface Props {
  fill?: string;
}

export const RehabHome: React.FC<Props> = ({ fill = 'black' }) => (
  <DawgHouse color={fill}/>
);