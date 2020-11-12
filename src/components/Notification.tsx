import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { colors } from '../utils/constants';

const NotificationContainer = styled.div`
    border: 1px solid ${colors.silver};
    border-radius: 5px;
    padding: 15px;
    margin: 0 12px;
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
  activityTimeStamps: number[] 
}

export const Notification: React.FC<IProps> = ({ activityTimeStamps }) => {
  if (activityTimeStamps.length) {
    const lastWalkTimeStamp = activityTimeStamps.slice(activityTimeStamps.length - 1).shift();
    const formatLastWalkTime = moment(lastWalkTimeStamp).format('MMMM Do YYYY, h:mm:ss a');

    return (
      <NotificationContainer>
        <NotificationText>Last Rehab Walk was on 
          <StrongSpan> {formatLastWalkTime}.</StrongSpan>
        </NotificationText>
      </NotificationContainer>
    );
  }
  return (
    <NotificationContainer>
      <NotificationText>Start the pooch on their Rehab Journey to see progress!</NotificationText>
    </NotificationContainer>
  );
};


export default Notification;