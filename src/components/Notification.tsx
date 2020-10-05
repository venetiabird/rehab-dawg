import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {blue, silver } from '../utils/constants';
import { IWalk } from '../utils/types';
import useLocalStorage from '../hooks/useLocalStorage';

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

export const Notification: React.FC = () => {
  const [ history, setHistory ] = useLocalStorage<IWalk[]>('history', []); 
  const lastWalk = history[history.length - 1];
  if (lastWalk?.finishDateTime) {
    const formatLastWalkTime = moment(history.finishDateTime).format('MMMM Do YYYY, h:mm:ss a');

    return (
      <NotificationContainer>
        <NotificationText>Last Rehab Walk was on 
          <StrongSpan> {formatLastWalkTime}.</StrongSpan>
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