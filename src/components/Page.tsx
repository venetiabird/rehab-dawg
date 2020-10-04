import React from 'react';
import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';

import { 
  gutterWidth,
} from '../utils/constants';

const PageContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 ${gutterWidth}px;
`;

// background-image: linear-gradient(to bottom right, ${peach}, ${orange}); 
// height: calc(100vh - 50px);
// display: flex;
// flex-direction: column;
// justify-content: space-around;

const Heading = styled.h2`
  margin: ${gutterWidth}px;
  font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 900;
  font-size: 2em;
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
        {children}
      </PageContainer>
    </>
  );
};