import React from 'react';
import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';

import { 
  gutterWidth,
  bannerHeight
} from '../utils/constants';

const Heading = styled.h1`
  margin: ${gutterWidth}px;
`;

const Hr = styled.hr`
  position: sticky
  top: ${bannerHeight}px
  border: none;
  margin: 0;
  border-bottom: solid 0.5px lightgrey;
`;

interface Props {
  heading: string;
  hideNvaigation?: boolean;
}

export const Page: React.FC<Props> = ({
  heading,
  children,
}) => {
  // const location = useLocation();
  return (
    <>
      <Heading>{heading}</Heading>
      <Hr />
      {children}
    </>
  );
};