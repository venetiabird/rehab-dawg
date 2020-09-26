import React from 'react';
import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';

import Navigation from './Navigation';

import { 
  gutterWidth,
  bannerHeight
} from '../utils/constants';

const PageContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

// background-image: linear-gradient(to bottom right, ${peach}, ${orange}); 
// height: calc(100vh - 50px);
// display: flex;
// flex-direction: column;
// justify-content: space-around;

const Heading = styled.h2`
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
}

export const Page: React.FC<Props> = ({
  heading,
  children,
}) => {
  // const location = useLocation();
  return (
    <>
      <PageContainer>
        <Heading>{heading}</Heading>
        <Hr />
        {children}
      </PageContainer>
      {/* <Navigation /> */}
    </>
  );
};