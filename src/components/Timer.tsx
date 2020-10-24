import React, { useState } from 'react';
import styled from 'styled-components';

import { useInterval } from '../hooks/useInterval';
import {ResumeWalk} from '../assets/svg/Resume';
import {PauseWalk} from '../assets/svg/Pause';
import {formatTimeLeft } from '../utils/timeFormatter';
import {calculateActivityTime } from '../utils/timeCalculation';
import { darkgreen, orange } from '../utils/constants';

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
  walkTimeStamps: number[];
  walkTime: number;
  setWalkTimeStamps: (walkTimeStamp: React.Dispatch<number[]> | number[]) => void;
}

export const Timer: React.FC<IProps> = ({ walkTime, walkTimeStamps, setWalkTimeStamps }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  let walkTimeSeconds = walkTime * 60;
  const [isActive, setIsActive] = useState(true);
  
  useInterval(() => {
    const activeWalkTime = calculateActivityTime([
      ...walkTimeStamps, 
      ...(walkTimeStamps.length % 2 === 0 ? [] : [Date.now()])
    ]);
    setTimeElapsed(activeWalkTime);
  }, 1000);

  const toggle = (): void => {
    setIsActive(!isActive);
    setWalkTimeStamps((x: number[]) => [...x, Date.now()])
  }
  
  return (
    <>
      <CountDownDawg>
        {formatTimeLeft(walkTimeSeconds - timeElapsed)}
      </CountDownDawg>
      <PauseResumeContainer>
        {isActive ? (
        <PauseWalk fill={orange} handleClick={toggle} />
        ) : (
          <ResumeWalk fill={darkgreen} handleClick={toggle} />
        )}
      </PauseResumeContainer>
    </>
  );
};

export default Timer;