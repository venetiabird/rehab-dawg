import React, { useState } from 'react';
import styled from 'styled-components';

import { useInterval } from '../hooks/useInterval';
import { ResumeWalk } from '../assets/svg/Resume';
import { PauseWalk } from '../assets/svg/Pause';
import { formatTimeLeft, formatTimeLeftCountUp } from '../utils/timeFormatter';
import { calculateActivityTime } from '../utils/timeCalculation';
import { colors } from '../utils/constants';
import { ActivityType } from '../utils/types';

const CountDownDawg = styled.div`
  height: 10px;
  font-size: 28px;
  font: courier;
  font-weight: 800; 
  text-align: center;
  display: flex;
`;
const PauseResumeContainer = styled.div`
  display: flex;
`;
interface IProps {
  activityTimeStamps: number[];
  activityTime: number;
  activityType: ActivityType;
  setActivityTimeStamps: (activityTimeStamp: React.Dispatch<number[]> | number[]) => void;
}

// activity type could part of the Activity Type ... refactor!
export const Timer: React.FC<IProps> = ({ activityType, activityTime, activityTimeStamps, setActivityTimeStamps }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  let walkTimeSeconds = activityTime * 60;
  const [isActive, setIsActive] = useState(true);
  useInterval(() => {
    const activeWalkTime = calculateActivityTime([
      ...activityTimeStamps, 
      ...(activityTimeStamps.length % 2 === 0 ? [] : [Date.now()])
    ]);
    setTimeElapsed(activeWalkTime);
  }, 1000);

  const toggle = (): void => {
    setIsActive(!isActive);
    setActivityTimeStamps((x: number[]) => [...x, Date.now()])
  }
  
  return (
    <>
      <CountDownDawg>
        {activityType === ActivityType.Walk ?
          formatTimeLeft(walkTimeSeconds - timeElapsed) : 
          formatTimeLeftCountUp(walkTimeSeconds + timeElapsed)
        }
      </CountDownDawg>
      <PauseResumeContainer>
        {isActive ? (
          <PauseWalk fill={colors.orange} handleClick={toggle} />
        ) : (
          <ResumeWalk fill={colors.darkgreen} handleClick={toggle} />
        )}
      </PauseResumeContainer>
    </>
  );
};

export default Timer;