import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { IWalk, WalkName } from '../utils/types';
import { colors } from '../utils/constants';
import { calculateActivityTime } from '../utils/timeCalculation'

const WalkContainer = styled.div`
  border: 0px solid ${colors.blue};
  border-radius: 5px;
  padding: 10px;
  margin: 0 12px;
  background-color: rgba( 100, 170, 200, 0.1 );
  margin-bottom 10px; 
`;

const ReportItemText = styled.div`
    color: ${colors.blue};
    font-size: 12px;
`;

const StrongSpan = styled.span`
  font-weight: 700;
`;

interface IProps {
  walk: IWalk;
  loading: boolean;
}

const walkGrade = (walkName: WalkName): string => {
  const grade = {
    'green': 'short',
    'blue': 'medium',
    'red': 'long'
  }
  return grade[walkName];
}

export const DawgWalkItem: React.FC<IProps> = ({ walk, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const lastWalkTimeStamp = walk.walkTimeStamps.slice(walk.walkTimeStamps.length - 1).shift(); //.format('MMM Do YYYY, h:mm a')
  if(lastWalkTimeStamp) {
    const activityTime = calculateActivityTime(walk.walkTimeStamps) * 1000;
    const walkTime = moment(activityTime).format('mm:ss');
    const walkName = walkGrade(walk.walk);
    const dateTime = moment(lastWalkTimeStamp).format('MMM Do YYYY, h:mm a');
  return (
    <WalkContainer key={lastWalkTimeStamp}>
      <ReportItemText><StrongSpan>{dateTime}</StrongSpan></ReportItemText>
      <ReportItemText><StrongSpan>Total walk time: </StrongSpan>{walkTime}</ReportItemText>
      <ReportItemText><StrongSpan>Walk grade: </StrongSpan>{walkName}</ReportItemText>
    </WalkContainer>
  )}
  return <WalkContainer><ReportItemText>View your Dawg's Rehab progress!</ReportItemText></WalkContainer>;
};
export default DawgWalkItem;