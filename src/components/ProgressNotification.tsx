import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {blue, silver } from '../utils/constants';

const NotificationContainer = styled.div`
    border: 1px solid ${silver};
    border-radius: 5px;
    padding: 6px;
    margin: 0 12px 12px;
    background-color: rgba( 256, 256, 256, 0.1 );
`;

const NotificationText = styled.p`
    font-size: 16px;
    color: ${blue};
    text-align: center;
`;

const StrongSpan = styled.span`
  font-weight: 700;
  color: ${blue};
`;

interface IProps {
  totalActivityTime: number
}

export const ProgressNotification: React.FC<IProps> = ({ totalActivityTime }) => {
  const formatActivityTime = moment(totalActivityTime).format('mm:ss');
    if(totalActivityTime > 0) {
    return (
      <NotificationContainer>
        <NotificationText>Total Activity Time 
          <StrongSpan> {formatActivityTime}</StrongSpan>
        </NotificationText>
      </NotificationContainer>
    );
  }

  return (
    <NotificationContainer>
      <NotificationText>View your Dawg's activity feed here!</NotificationText>
    </NotificationContainer>
  );
};


export default ProgressNotification;