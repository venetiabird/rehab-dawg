import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {blue, silver } from '../utils/constants';

const NotificationContainer = styled.div`
    border: 1px solid ${silver};
    border-radius: 5px;
    padding: 6px;
    margin: 0 12px;
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

const Notification = (history: any) => { // how to make this type safe?!!
  // should I have used a useEffect hook here?
  if (history.date) {
    const lastWalkTime = moment(history.date).format('MMMM Do YYYY, h:mm:ss a');

    return (
      <NotificationContainer>
        <NotificationText>Last Rehab Walk was on 
          <StrongSpan> {lastWalkTime}.</StrongSpan>
        </NotificationText>
      </NotificationContainer>
    );
  }
  // console.log('Walks', history);
  return (
    <NotificationContainer>
      <NotificationText>Start logging those Rehab Walks!</NotificationText>
    </NotificationContainer>
  );
};


export default Notification;