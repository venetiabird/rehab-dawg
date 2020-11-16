import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { colors } from '../utils/constants';

const NotificationContainer = styled.div`
    border: 1px solid ${colors.silver};
    border-radius: 5px;
    padding: 6px;
    margin: 0 12px 12px;
    background-color: rgba( 256, 256, 256, 0.1 );
`;

const NotificationText = styled.p`
    font-size: 16px;
    color: ${colors.blue};
    text-align: center;
`;

const StrongSpan = styled.span`
  font-weight: 700;
  color: ${colors.blue};
`;

interface IProps {
  totalWalkActivityTime: number
  totalCavelettiActivityTime: number
}

export const ProgressNotification: React.FC<IProps> = ({ totalWalkActivityTime, totalCavelettiActivityTime }) => {
  const formatWalkActivityTime = moment(totalWalkActivityTime).format('mm:ss');
  const formatCavalettiActivityTime = moment(totalCavelettiActivityTime).format('mm:ss');
    if(totalWalkActivityTime > 0 || totalCavelettiActivityTime > 0) {
    return (
      <NotificationContainer>
        <NotificationText>Total Walk Time 
          <StrongSpan> {formatWalkActivityTime}</StrongSpan>
        </NotificationText>
        <NotificationText>Total Cavaletti Time 
          <StrongSpan> {formatCavalettiActivityTime}</StrongSpan>
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