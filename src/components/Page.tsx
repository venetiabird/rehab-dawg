import React from 'react';
import styled from 'styled-components';

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

const Heading = styled.h2`
  margin: ${gutterWidth}px;
  font-family: 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 900;
  font-size: 2em;
`;

interface IProps {
  heading: string
}

export const Page: React.FC<IProps> = ({ heading = '',
  children,
}) => (
  <>
    <PageContainer>
      <Heading />
      {heading}
      {children}
    </PageContainer>
  </>
);