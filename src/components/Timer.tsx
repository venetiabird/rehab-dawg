import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


import {ResumeWalk} from '../assets/svg/Resume';
import {PauseWalk} from '../assets/svg/Pause';
import {formatTimeLeft} from '../utils/timeFormatter';
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
  startTime: number;
  walkTime: number;
}

export const Timer: React.FC<IProps> = ({ walkTime, startTime }) => {
  const walkTimeSeconds = walkTime * 60;
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const now = Date.now();
      setTimeElapsed(() => Math.round((now - startTime)/1000));
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <CountDownDawg>
        {formatTimeLeft(walkTimeSeconds - timeElapsed)}
      </CountDownDawg>
      <PauseResumeContainer>
        <PauseWalk fill={orange} handleClick={() => alert('Pausing!')}/>
        <ResumeWalk fill={darkgreen} handleClick={() => alert('Resuming')}/>
      </PauseResumeContainer>
    </>
  );
};

export default Timer;